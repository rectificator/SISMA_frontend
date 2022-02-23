<template>
    <form @submit.prevent="checkChanged">
        <px-checkbox-group
            label="Mes 📆"
            :error="error"
            :checkboxValues="meses"
            v-model="selectedValues"
        />
        <button
            type="submit"
            class="px-4 py-2 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none self-center"
        >
            Enviar
        </button>
    </form>
</template>

<script>
import api from '@/api'
import PxCheckboxGroup from '@/components/PxCheckboxGroup'
export default {
    components: { PxCheckboxGroup },
    name: 'PxCheckboxGroupMes',
    data() {
        return {
            mesObjects: [],
            meses: [],
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
        api.getFrom('sisma/mes').then((data) => {
            //console.log('DATA: ', data)
            this.mesObjects = data
            this.meses = this.mesObjects.map((mesObject) => {
                return mesObject.mes
            })
        })
    },

    methods: {
        valueChanged(value) {
            //console.log('REFS: ', this.$refs)
            for (let index = 0; index < value.length; index++) {
                let mesObject = this.mesObjects[index]
                if (mesObject.mes == value) {
                    this.selectedValues.push(mesObject)
                }
            }
            console.log('SELECTED: ', this.selectedValues)
            this.$emit('input', value)
        },
        checkChanged() {
            console.log('LIST: ', this.prueba)
        },
    },
}
</script>
