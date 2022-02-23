<template>
    <div>
        <p>{{ label }}</p>
        <div
            v-for="value in checkboxValues"
            :key="checkboxValues.indexOf(value)"
        >
            <input
                type="checkbox"
                :name="value"
                :value="value"
                v-model="selectedItemValues"
                @input="valueChanged"
            />
            <label :for="value"> {{ value }} </label><br />
        </div>
        <span>Selected Values: {{ selectedItemValues }}</span>
        <p v-if="error" class="text-red-600">Por favor, selecciona un valor</p>
    </div>
</template>

<script>
export default {
    name: 'PxCheckboxGroup',
    data() {
        return {
            selectedItemValues: [],
        }
    },

    props: {
        checkboxValues: {
            type: Array,
            default: () => ['Value 1', 'Value 2'],
        },

        label: {
            type: String,
            default: '',
        },
        error: {
            type: Boolean,
            default: false,
        },
    },

    methods: {
        valueChanged() {
            console.log('SEL: ', this.selectedItemValues)
            this.$emit('input', this.selectedItemValues)
        },
        prueba(value){
            console.log('VAL: ' value);
        }
    },
}
</script>
