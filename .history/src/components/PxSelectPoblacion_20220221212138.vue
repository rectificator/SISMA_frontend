<template>
    <PxSelect
        info="'poblacion'"
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
            let poblacion_ids = this.modalidades.map((poblacionObject) => {
                if (poblacionObject.poblacion == value) {
                    return poblacionObject.id
                }
            })
            this.poblacion.push(poblacion_ids)
            console.log(this.poblacion)
            this.$emit('select-value', this.poblacion[0])
        },
    },
}
</script>
