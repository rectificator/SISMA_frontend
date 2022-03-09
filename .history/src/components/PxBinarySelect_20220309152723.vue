<template>
    <div>
        <label :for="info">{{ label }}</label>
        <select
            :id="info"
            :ref="info"
            v-on:change="selectItem"
            class=""
        >
            <option value="" disabled selected hidden>
                Selecciona una opción
            </option>
            <option :value="value1">
                {{ value1 }}
            </option>
            <option :value="value2">
                {{ value2 }}
            </option>
        </select>
        <p v-if="error" class="">Por favor, selecciona un valor</p>
    </div>
</template>

<script>
export default {
    name: 'PxBinarySelect',

    props: {
        info: {
            type: String,
            default: '',
        },
        value1: {
            type: String,
            default: 'Sí',
        },
        value2: {
            type: String,
            default: 'No',
        },
        label: {
            type: String,
            default: '',
        },
        error: {
            type: Boolean,
            default: false,
        },
    },

    methods: {
        selectItem() {
            console.log('Selected val: ', this.$refs[this.info].value)
            if (this.value1 == this.$refs[this.info].value) {
                this.$emit('select-value', true.toString())
            } else {
                this.$emit('select-value', false.toString())
            }
            //console.log('SELECTED: ', selected)
        },
    },
}
</script>
