<template>
    <div>
        <px-checkbox-group
            label="Mes 📆"
            :error="error"
            :checkboxValues="tipos"
            v-model="selectedValues"
            >{{ valueChanged(selectedValues) }}</px-checkbox-group
        >
    </div>
</template>

<script>
import api from '@/api'
import PxCheckboxGroup from '@/components/PxCheckboxGroup'
export default {
    components: { PxCheckboxGroup },
    name: 'PxCheckboxGroupMes',
    data() {
        return {
            tipoActividadObjects: [],
            tipos: [],
            selectedValues: [],
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
            this.tipoActividadObjects = data
            this.tipos = this.tipoActividadObjects.map(
                (tipoActividadObject) => {
                    return tipoActividadObject.mes
                }
            )
        })
    },

    methods: {
        valueChanged(values) {
            let objects = values.map((mes) => {
                return this.tipoActividadObjects.find((x) => x.mes === mes)
            })

            this.$emit('input', objects)
        },
    },
}
</script>
