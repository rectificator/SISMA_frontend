<template>
    <div>
        <px-checkbox-group
            label="Mes 📆"
            :error="error"
            :checkboxValues="meses"
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
            let values = []
            //console.log('REFS: ', this.$refs)
            for (let index = 0; index < value.length; index++) {
                let mesObject = this.mesObjects[index]
                console.log(value)
                console.log('SELECTED: ', mesObject.mes)
                if (mesObject.mes == value) {
                    console.log('SELECTED: ', value)
                    values.push(mesObject)
                }
            }
            this.$emit('input', values)
        },
    },
}
</script>
