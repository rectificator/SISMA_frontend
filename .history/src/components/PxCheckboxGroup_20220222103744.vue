<template>
    <div>
        <div
            v-for="value in checkboxValues"
            :key="checkboxValues.indexOf(value)"
        >
            <input
                type="checkbox"
                name="value"
                value="value"
                v-model="selectedItemValues"
            />
            <label for="value"> {{ value }} </label><br />
        </div>
        <span>Checked names: {{ checkedNames }}</span>
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
    },

    methods: {
        valueChanged(value) {
            console.log('CB: ', value)
        },
    },
}
</script>
