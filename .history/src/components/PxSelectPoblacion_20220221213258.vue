<template>
    <PxSelect
        :info="etiqueta"
        :requestedInfo="poblaciones"
        label="Población 👨‍👩‍👧‍👦"
        :error="error"
        @select-value="selectItem"
    ></PxSelect>
</template>

<script>
import api from '@/api'
import PxSelect from '@/components/PxSelect'
export default {
    name: 'PxSelectpoblacion',
    components: {
        PxSelect,
    },
    data() {
        return {
            poblaciones: [],
            poblacion: [],
            etiqueta: 'poblacion',
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
            //console.log('DATA: ', data)
            this.poblaciones = data
        })
    },
    methods: {
        selectItem(value) {
            //console.log('REFS: ', this.$refs)

            for (let index = 0; index < this.poblaciones.length; index++) {
                let poblacionObject = this.poblaciones[index].poblacion
                if (poblacionObject == value) {
                    this.poblacion.push(poblacionObject.id)
                }
            }

            this.$emit('select-value', this.poblacion[0])
        },
    },
}
</script>
