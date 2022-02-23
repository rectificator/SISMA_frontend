<template>
    <px-auto-complete
        :info="mes"
        :assets="meses"
        @select-value="selectItem"
    ></px-auto-complete>
</template>

<script>
import api from '@/api'
import PxAutoComplete from '@/components/PxAutoComplete'
export default {
    name: 'PxSelectmes',
    components: {
        PxAutoComplete,
    },
    data() {
        return {
            meses: [],
            mes: 'mes',
        }
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
