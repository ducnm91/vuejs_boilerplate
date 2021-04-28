<template>
    <div class="validate">
        <h3>Validate: </h3>
        <div class="row">
            <div class="col-6">
                <input
                    v-model="inputValue"
                    type="text"
                    class="form-control"
                    @keypress="validateInput"
                >
            </div>
            <div class="col-6">
                <select
                    v-model="selected"
                    class="form-control"
                    @change="changeRegex"
                >
                    <option
                        v-for="(option, index) in options"
                        :key="index"
                        :value="option.value"
                    >
                        {{ option.text }}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            inputValue: '',
            regexList: [/[a-zA-Z0-9]|\./, /[0-9]|\./],
            regex: /[a-zA-Z0-9]|\./,
            selected: 0,
            options: [
                { text: 'Chỉ chữ và số', value: 0 },
                { text: 'Chỉ số', value: 1 }
            ]
        }
    },
    methods: {
        validateInput(evt) {
            // start not input 0 charater at first
            if (/^0/.test(this.inputValue)) {
                this.inputValue = this.inputValue.replace(/^0/, "")
            }
            // end
            
            var theEvent = evt || window.event;
            // Handle paste
            if (theEvent.type === 'paste') {
                key = evt.clipboardData.getData('text/plain');
            } else {
                // Handle key press
                var key = theEvent.keyCode || theEvent.which;
                key = String.fromCharCode(key);
            }
            var regex = this.regex;
            if( !regex.test(key) ) {
                theEvent.returnValue = false;
                if(theEvent.preventDefault) theEvent.preventDefault();
            }
        },
        changeRegex() {
            this.regex = this.regexList[this.selected]
        }
    }
}
</script>