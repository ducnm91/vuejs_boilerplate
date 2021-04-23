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
        <!-- <img :src="urlImg" class="img-fluid" /> -->
    </div>
</template>
<script>
  import myMixin from '../../mixins/test';
  import Repository from '../../repositories/RepositoryFactory';
  const PostRepository = Repository.get("posts");

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
        PostRepository.get().then((r) => {
          console.log(r)
        }).catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // always executed
        })
      }
    },
    watch: {
        modalShow(v) {
            console.log(v)
        }
    }
  }
</script>