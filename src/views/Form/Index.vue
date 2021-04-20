<template>
    <div class="container">
        <InputText />
        <MultilineText />
        <PreviewImageBeforeUploaded />
        <Validator />
        <Recaptcha />
    </div>
</template>
<script>
import InputText from '../../components/Form/InputText'
import MultilineText from '../../components/Form/MultilineText'
import PreviewImageBeforeUploaded from '../../components/Form/PreviewImageBeforeUploaded'
import Validator from '../../components/Form/Validator'
import Recaptcha from '../../components/Form/Recaptcha'


export default {
    components: {
        InputText,
        MultilineText,
        PreviewImageBeforeUploaded,
        Validator,
        Recaptcha
    }
}
</script>