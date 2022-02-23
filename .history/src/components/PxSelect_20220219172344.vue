<template>
    <select
        :id="info"
        :ref="info"
        v-on:change="selectItem"
        class="block border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
    >
        <option value="" disabled selected hidden>Selecciona una opción</option>
        <option v-for="item in requestedInfo" :key="item.id">
            {{ item[info] }}
        </option>
    </select>
</template>

<script>
export default {
    name: 'PxSelect',

    props: {
        info: {
            type: String,
            default: '',
        },
        requestedInfo: {
            type: Array,
            default: () => [],
        },
    },

    methods: {
        selectItem() {
            let selected = this.requestedInfo
            selected = selected.filter((item) => {
                return item[this.info]
                    .toString()
                    .toLowerCase()
                    .includes(this.$refs[this.info].value.toLowerCase())
            })
            //console.log('SELECTED: ', selected)
            this.$emit('select-value', selected[0])
        },
    },
}
</script>
