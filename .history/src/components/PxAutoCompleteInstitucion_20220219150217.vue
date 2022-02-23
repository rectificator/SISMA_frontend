<template>
    <px-auto-complete
        :info="institucion"
        :assets="instituciones"
        @select-value="selectItem"
    ></px-auto-complete>
</template>

<script>
import api from '@/api'
import PxAutoComplete from '@/components/PxAutoComplete'
export default {
    name: 'PxSelectinstitucion',
    components: {
        PxAutoComplete,
    },
    data() {
        return {
            instituciones: [],
            institucion: 'institucion',
        }
    },
    created() {
        api.getFrom('sisma/institucion').then((data) => {
            //console.log('DATA: ', data)
            this.instituciones = data
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
