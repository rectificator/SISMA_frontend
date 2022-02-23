<template>
    <PxSelect
        :info="tipo_actividad"
        :requestedInfo="tipo_actividades"
        label="Tipo de actividad 🏃‍♀️🏃‍♂️"
        :error="error"
        @select-value="selectItem"
    ></PxSelect>
</template>

<script>
import api from '@/api'
import PxSelect from '@/components/PxSelect'
export default {
    name: 'PxSelecttipo_actividad',
    components: {
        PxSelect,
    },
    data() {
        return {
            tipo_actividades: [],
            tipo_actividad: 'tipo',
        }
    },
    props: {
        error: {
            type: Boolean,
            default: false,
        },
    },
    created() {
        api.getFrom('sisma/tipo_actividad').then((data) => {
            //console.log('DATA: ', data)
            this.tipo_actividades = data
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
