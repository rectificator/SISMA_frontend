<template>
    <select
        :id="info"
        :ref="info"
        v-on:change="selectItem"
        
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

    props:{
        info: {
            type: String,
            default: ''
        },
        requestedInfo: {
            type: Array,
            default: () => []
        }
    },

    methods: {
        selectItem() {
            //console.log('REFS: ', this.$refs)
            this.$emit('select-value', this.$refs[this.info].value)
        },
    },
}
</script>
