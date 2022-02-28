<template>
    <div>
        <px-checkbox-group
            label="Tipo de accion 🏃‍♂️🏃‍♀️"
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
    name: 'PxCheckboxGroupTipoAccion',
    data() {
        return {
            tipoAccionObjects: [],
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
        api.getFrom('sisma/tipo_accion').then((data) => {
            //console.log('TIPO_ACT: ', data)
            this.tipoAccionObjects = data
            this.tipos = this.tipoAccionObjects.map((tipoAccionObject) => {
                return tipoAccionObject.tipo_accion
            })
        })
    },

    methods: {
        valueChanged(values) {
            let objects = values.map((tipo_accion) => {
                return this.tipoAccionObjects.find(
                    (x) => x.tipo_accion === tipo_accion
                )
            })
            console.log('Objects: ', objects)
            this.$emit('input', objects)
        },
    },
}
</script>
