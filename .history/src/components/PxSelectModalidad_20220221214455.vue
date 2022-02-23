<template>
    <PxSelect
        :info="etiqueta"
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
            etiqueta: 'modalidad',
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
            //console.log('Modalidades: ', data)
            this.modalidades = data
        })
    },
    methods: {
        selectItem(value) {
            //console.log('REFS: ', this.$refs)
            for (let index = 0; index < this.modalidades.length; index++) {
                let modalidadObject = this.modalidades[index]
                console.log('MO',modalidadObject);
                console.log('MV',value);
                if (modalidadObject.modalidad == value) {
                    this.modalidad.push(modalidadObject.id)
                }
            }
            this.$emit('select-value', this.modalidad[0])
        },
    },
}
</script>
