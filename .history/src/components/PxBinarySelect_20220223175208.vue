<template>
    <div>
        <label :for="info">{{ label }}</label>
        <select
            :id="info"
            :ref="info"
            v-on:change="selectItem"
            class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
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
        <p v-if="error" class="text-red-600">Por favor, selecciona un valor</p>
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
        selectItem(value) {
            console.log('Selected val: ', value);
            if (this.value1 == this.$refs[this.info].value.toLowerCase()) {
                this.$emit('select-value', true)
            } else {
                this.$emit('select-value', false)
            }
            //console.log('SELECTED: ', selected)
        },
    },
}
</script>
