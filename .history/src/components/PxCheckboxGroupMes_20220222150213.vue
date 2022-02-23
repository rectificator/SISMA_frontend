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
        valueChanged(values) {
            let objects = values.map((mes, index) => {
                console.log('Mes: ', values)
                console.log('Index: ', this.mesObjects[index])
                return mes
            })
            console.log('OBJ: ', objects)
            this.$emit('input', values)
        },
    },
}
</script>
