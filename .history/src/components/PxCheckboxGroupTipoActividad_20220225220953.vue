<template>
    <div>
        <px-checkbox-group
            label="Tipo de actividad 🏃‍♂️🏃‍♀️"
            :error="error"
            :checkboxValues="tipos"
            v-model="selectedValues"
            @change="loaded ? valueChanged(selectedValues) : () => {}"
        />
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
            loaded: false,
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
            this.tipoActividadObjects = data
            this.tipos = this.tipoActividadObjects.map(
                (tipoActividadObject) => {
                    return tipoActividadObject.tipo
                }
            )
        })
    },

    methods: {
        valueChanged(values) {
            let objects = values.map((tipo_actividad) => {
                return this.tipoActividadObjects.find(
                    (x) => x.tipo === tipo_actividad
                )
            })

            this.$emit('input', objects)
        },
    },
    mounted() {
        this.loaded = true
    },
}
</script>
