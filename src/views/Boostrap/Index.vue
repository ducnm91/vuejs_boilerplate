<template>
    <div class="container">
        <pre v-highlightjs>
            <code class="javascript">
                document.addEventListener('DOMContentLoaded', (event) => {
                    document.querySelectorAll('pre code').forEach((block) => {
                        hljs.highlightBlock(block);
                    });
                });
            </code>
        </pre>
    </div>
</template>