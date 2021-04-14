<template>
    <div class="input-text">
        <div class="row">
            <div class="col-6">
                <pre v-highlightjs >
                    <code class="html" v-html="plainHtml">

                    </code>
                </pre>
            </div>
            <div class="col-6 pt-4">
                <input class="form-control" v-model="message" placeholder="edit me">
                <p>Message is: {{ message }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: '',
            plainHtml: `&lt;input v-model="message" placeholder="edit me"&gt;
&lt;p&gt;Message is: {{ message }}&lt;/p&gt;`
        }
    }
}
</script>