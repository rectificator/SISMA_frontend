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
                :change="changedValues"
            />
            <label :for="value">
                {{ value }} {{ emitChanges(selectedItemValues) }}
            </label>
        </div>

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
    computed: {
        changedSelectedValues() {
            this.emitChanges(this.selectedItemValues)
            return this.selectedItemValues
        },
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
        emitChanges(value) {
            this.$emit('input', value)
        },
        changedValues() {
            this.changedSelectedValues
        },
    },
}
</script>
