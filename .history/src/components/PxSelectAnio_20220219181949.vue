<template>
    <PxSelect
        :info="anio"
        :requestedInfo="anios"
        @select-value="selectItem"
        label="Año 📅"
    ></PxSelect>
</template>

<script>
import api from '@/api'
import PxSelect from '@/components/PxSelect'
export default {
    name: 'PxSelectAnio',
    components: {
        PxSelect,
    },
    data() {
        return {
            anios: [],
            anio: 'anio',
        }
    },
    created() {
        api.getFrom('sisma/anio').then((data) => {
            //console.log('DATA: ', data)
            this.anios = data
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
