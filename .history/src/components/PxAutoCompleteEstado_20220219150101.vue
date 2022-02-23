<template>
    <px-auto-complete
        :info="estado"
        :assets="estados"
        @select-value="selectItem"
    ></px-auto-complete>
</template>

<script>
import api from '@/api'
import PxAutoComplete from '@/components/PxAutoComplete'
export default {
    name: 'PxSelectestado',
    components: {
        PxAutoComplete,
    },
    data() {
        return {
            estados: [],
            estado: 'estado',
        }
    },
    created() {
        api.getFrom('sisma/estado').then((data) => {
            //console.log('DATA: ', data)
            this.estados = data
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
