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
        api.getFrom('sisma/poblacion').then((data) => {
            //console.log('TIPO_ACT: ', data)
            this.poblacionObjects = data
            this.poblaciones = this.poblacionObjects.map((poblacionObject) => {
                return poblacionObject.tipo
            })
        })
    },

    methods: {
        valueChanged(values) {
            let objects = values.map((poblacion) => {
                return this.poblacionObjects.find(
                    (x) => x.poblacion === poblacion
                )
            })

            this.$emit('input', objects)
        },
    },
}
</script>
