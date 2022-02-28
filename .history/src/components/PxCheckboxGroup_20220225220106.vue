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
                @click="log"
            />
            <label :for="value">
                {{ value }}
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
        log() {
            console.log(this.selectedItemValues)
        },
    },
}
</script>
