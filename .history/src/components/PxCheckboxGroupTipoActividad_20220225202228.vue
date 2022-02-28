<template>
    <div>
        <px-checkbox-group
            label="Tipo de actividad 🏃‍♂️🏃‍♀️"
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
    name: 'PxCheckboxGroupTipoActividad',
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
                    return tipoActividadObject.tipo_actividad
                }
            )
        })
    },

    methods: {
        valueChanged(values) {
            let objects = values.map((tipo_actividad) => {
                return this.tipoActividadObjects.find(
                    (x) => x.tipo_actividad === tipo_actividad
                )
            })

            this.$emit('input', objects)
        },
    },
}
</script>
