<template>
    <div class="my-recaptcha">
        <vue-recaptcha
            ref="invisibleRecaptcha"
            sitekey="6LeMYLEaAAAAAD3dig-SEysFuZcrbXGHu_atFdvb"
            :load-recaptcha-script="true"
            size="invisible"
            @verify="onVerify"
        >
            <button class="btn btn-primary">
                Click me
            </button>
        </vue-recaptcha>
        <button
            class="btn btn-primary"
            @click="onSubmit"
        >
            Click me outside
        </button>
    </div>
</template>
<script>
import VueRecaptcha from 'vue-recaptcha';
export default {
    components: { VueRecaptcha },
    methods: {
        onVerify: function (response) {
            console.log('Verify: ' + response)
            this.resetRecaptcha()
        },
        onSubmit: function () {
            this.$refs.invisibleRecaptcha.execute()
        },
        resetRecaptcha() {
            this.$refs.invisibleRecaptcha.reset() // Direct call reset method
        },
    },
}
</script>
<style lang="scss">
.grecaptcha-badge {
    visibility: hidden;
}
</style>