<template>
    <div>
        <px-checkbox-group
            label="Mes 📆"
            :error="error"
            :checkboxValues="meses"
            v-model="selectedValues"
        />
        <span>{{ valueChanged(selectedValues) }}</span>
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
                if (mesObject.mes == value) {
                    values.push(mesObject)
                }
            }
            console.log('SELECTED: ', this.selectedValues)
            this.$emit('input', value)
        },
    },
}
</script>
