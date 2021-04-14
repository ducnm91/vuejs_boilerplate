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
                <span>Multiline message is:</span>
                <p style="white-space: pre-line;">{{ message }}</p>
                <textarea class="form-control" v-model="message" placeholder="add multiple lines"></textarea>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: '',
            plainHtml: `&lt;span&gt;Multiline message is:&lt;/span&gt;
&lt;p style="white-space: pre-line;"&gt;{{ message }}&lt;/p&gt;
&lt;textarea class="form-control" v-model="message" placeholder="add multiple lines"&gt;&lt;/textarea&gt;`
        }
    }
}
</script>