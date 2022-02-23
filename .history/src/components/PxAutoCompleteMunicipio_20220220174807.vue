<template>
    <px-auto-complete
        :info="municipio"
        :assets="municipios"
        label="Municipio 🏜"
        :error="error"
        @select-value="selectItem"
    ></px-auto-complete>
</template>

<script>
import api from '@/api'
import PxAutoComplete from '@/components/PxAutoComplete'
export default {
    name: 'PxSelectmunicipio',
    components: {
        PxAutoComplete,
    },
    data() {
        return {
            municipios: [],
            municipio: 'municipio',
        }
    },
    props: {
        error: {
            type: Boolean,
            default: false,
        },
    },
    created() {
        api.getFrom('sisma/municipio').then((data) => {
            //console.log('DATA: ', data)
            this.municipios = data
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
