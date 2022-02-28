<template>
    <div>
        <p>{{ label }}</p>
        <div
            v-for="(value, index) in checkboxValues"
            :key="checkboxValues.indexOf(value)"
        >
            <input
                type="checkbox"
                :name="value"
                :value="value"
                v-model="selectedItemValues"
            />
            <label v-if="loaded" :for="value">
                {{ value }} {{ emitChanges(selectedItemValues) }}
                {{
                    index == checkboxValues.length - 1
                        ? (loaded = true)
                        : (loaded = false)
                }}</label
            ><br />
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
            loaded: false,
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
    },
}
</script>
