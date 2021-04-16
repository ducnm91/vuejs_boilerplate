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
        <img :src="urlImg" class="img-fluid" />
    </div>
</template>
<script>
  import Vue from 'vue';
  export default {
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
      Vue.$http.get('https://thatcopy.pw/catapi/rest/').then((r) => {
        console.log(r)
        this.urlImg = r.data.url
      }).catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      }); 
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
      }
    },
    watch: {
        modalShow(v) {
            console.log(v)
        }
    }
  }
</script>