<template>
    <PxSelect
        :info="poblacion"
        :requestedInfo="poblaciones"
        @select-value="selectItem"
    ></PxSelect>
</template>

<script>
import api from '@/api'
import PxSelect from '@/components/PxSelect'
export default {
    name: 'PxSelectpoblacion 👨‍👩‍👧‍👦',
    components: {
        PxSelect,
    },
    data() {
        return {
            poblaciones: [],
            poblacion: 'poblacion',
        }
    },
    created() {
        api.getFrom('sisma/poblacion').then((data) => {
            //console.log('DATA: ', data)
            this.poblaciones = data
        })
    },
    methods: {
        selectItem(value) {
            //console.log('REFS: ', this.$refs)
            this.$emit('select-value', value)
        },
    },
}
</script>
