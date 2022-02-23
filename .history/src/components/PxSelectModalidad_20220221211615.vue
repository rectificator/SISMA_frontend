<template>
    <PxSelect
        :info="modalidad"
        :requestedInfo="modalidades"
        label="Modalidad 🖥🙋🏽‍♀️"
        :error="error"
        @select-value="selectItem"
    ></PxSelect>
</template>

<script>
import api from '@/api'
import PxSelect from '@/components/PxSelect'
export default {
    name: 'PxSelectModalidad',
    components: {
        PxSelect,
    },
    data() {
        return {
            modalidades: [],
            modalidad: 'modalidad',
        }
    },
    props: {
        error: {
            type: Boolean,
            default: false,
        },
    },
    created() {
        api.getFrom('sisma/modalidad').then((data) => {
            //console.log('DATA: ', data)
            this.modalidades = data
        })
    },
    methods: {
        selectItem(value) {
            //console.log('REFS: ', this.$refs)
            let modalidad_ids = this.modalidades.map((modalidadObject) => {
                if (modalidadObject.modalidad == value) {
                    return modalidadObject.id
                }
            })
            this.modalidad.push(modalidad_ids)
            console.log(this.modalidad)
            this.$emit('select-value', value.id)
        },
    },
}
</script>
