<template>
    <div class="container">
        <b-button @click="showModal">Launch demo modal</b-button>

        <b-modal id="modal-1" title="BootstrapVue" v-model="modalShow">
            <p class="my-4">Hello from modal!</p>
            <template v-slot:modal-header>
                header
            </template>
            <template v-slot:modal-footer>
                header
            </template>
        </b-modal>
        <ul class="list-unstyled">
          <li v-for="(post, index) in posts" :key="index">
            <div class="card">
              <!-- <img :src="post.postThumbnail" class="card-img-top" alt="..."> -->
              <div class="card-body">
                <h5 class="card-title">{{ post.postTitle }}</h5>
              </div>
            </div>
          </li>
        </ul>
    </div>
</template>
<script>
  import myMixin from '../../mixins/test';

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
    computed: {
      posts () {
        return this.$store.state.post.list
      }
    },
    mounted() {
      this.getPosts()
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