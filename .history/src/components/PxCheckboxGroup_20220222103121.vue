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
                @change="valueChanged($event)"
            />
            <label for="value"> {{ value }} </label><br />
        </div>
    </div>
</template>

<script>
export default {
    name: 'PxCheckboxGroup',
    data() {
        return {
            slectedItemValues: [],
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
