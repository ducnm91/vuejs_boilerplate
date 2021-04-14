<template>
    <div class="preview">
        <h3>Preview an image before uploaded:</h3>
        <input type="file" @change="previewFiles">
        <div class="preview-img">
            <img :src="sourceImg" class="img-fluid" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            sourceImg: ''
        }
    },
    methods: {
        previewFiles(event) {
            if (event.target.files && event.target.files[0]) {
                var reader = new FileReader();
                
                reader.onload = (e) => {
                    this.sourceImg = e.target.result
                }
                
                reader.readAsDataURL(event.target.files[0]); // convert to base64 string
            }
            // console.log(event.target.files[0]);
        }
    }
}
</script>
<style lang="scss">
    .preview {
        &-img {
            width: 200px;
            margin: 0 auto;
        }
    }
</style>