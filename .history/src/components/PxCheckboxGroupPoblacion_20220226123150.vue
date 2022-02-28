<template>
    <div>
        <px-checkbox-group
            label="Tipo de actividad 🏃‍♂️🏃‍♀️"
            :error="error"
            :checkboxValues="poblaciones"
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
    name: 'PxCheckboxGroupTipoActividad',
    data() {
        return {
            poblacionObjects: [],
            poblaciones: [],
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
            //console.log('TIPO_ACT: ', data)
            this.poblacionObjects = data
            this.poblaciones = this.poblacionObjects.map(
                (tipoActividadObject) => {
                    return tipoActividadObject.tipo
                }
            )
        })
    },

    methods: {
        valueChanged(values) {
            let objects = values.map((tipo_actividad) => {
                return this.poblacionObjects.find(
                    (x) => x.tipo === tipo_actividad
                )
            })

            this.$emit('input', objects)
        },
    },
}
</script>
