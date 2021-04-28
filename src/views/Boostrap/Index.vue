<template>
    <div class="container">
        <b-button @click="showModal">
            Launch demo modal
        </b-button>

        <b-modal
            id="modal-1"
            v-model="modalShow"
            title="BootstrapVue"
        >
            <p class="my-4">
                Hello from modal!
            </p>
            <template v-slot:modal-header>
                header
            </template>
            <template v-slot:modal-footer>
                header
            </template>
        </b-modal>
        <p v-if="loading">
            Loading...
        </p>
        <ul
            v-if="!loading && postLength"
            class="list-unstyled"
        >
            <li
                v-for="(post, index) in posts"
                :key="index"
            >
                <div class="card">
                    <!-- <img :src="post.postThumbnail" class="card-img-top" alt="..."> -->
                    <div class="card-body">
                        <h5 class="card-title">
                            {{ post.postTitle }}
                        </h5>
                    </div>
                </div>
            </li>
        </ul>
        <p v-if="!loading && !postLength">
            No data
        </p>
    </div>
</template>
<script>
import myMixin from '../../mixins/test';
import { mapState, mapGetters } from 'vuex';
import {socketService} from '../../plugins/socketio'
export default {
    mixins: [myMixin],
    data() {
        return {
            dismissSecs: 10,
            dismissCountDown: 0,
            showDismissibleAlert: false,
            modalShow: false,
            urlImg: ''
        }
    },
    // computed: {
    //   posts () {
    //     return this.$store.state.post.list
    //   }
    // },
    computed: {
        ...mapState({
            loading: state => state.post.loading,
            posts: state => state.post.list,

        // arrow functions can make the code very succinct!
        // count: state => state.count,

        // passing the string value 'count' is same as `state => state.count`
        // countAlias: 'count',

        // to access local state with `this`, a normal function must be used
        // countPlusLocalState (state) {
        //   return state.count + this.localCount
        // }
        }),
        ...mapGetters({
            postLength: 'post/postLength'
        }),
        // postLength() {
        //     return this.$store.getters['post/postLength'];
        // }
    },
    watch: {
        // postLength(v) {
        //   console.log('---------1')
        //   console.log(v)
        //   console.log('---------2')
        // }
    },
    mounted() {
        this.getPosts()
      
        const socket = socketService.connect()
        console.log(socket)
        socket.emit('BO_PRICE_SUBSCRIBE')
        socket.on('BO_PRICE', (data) => {
            console.log(data)
        })
    },
    methods: {
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        },
        showModal() {
            this.$bvModal.show('modal-1')
        },
        getPosts() {
            this.$store.dispatch('post/get')
        }
    }
}
</script>