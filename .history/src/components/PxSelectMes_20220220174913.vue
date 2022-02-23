<template>
    <PxSelect
        :info="mes"
        :requestedInfo="meses"
        label="Mes 📆"
        :error="error"
        @select-value="selectItem"
    ></PxSelect>
</template>

<script>
import api from '@/api'
import PxSelect from '@/components/PxSelect'
export default {
    name: 'PxSelectmes',
    components: {
        PxSelect,
    },
    data() {
        return {
            meses: [],
            mes: 'mes',
        }
    },
    props: {
        error: {
            type: Boolean,
            default: false,
        },
    },
    created() {
        api.getFrom('sisma/mes').then((data) => {
            //console.log('DATA: ', data)
            this.meses = data
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
