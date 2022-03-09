<template>
    <div>
        <label for="info">{{ label }}</label>
        <select
            :id="info"
            :ref="info"
            v-on:change="selectItem"
            class=""
        >
            <option value="" disabled selected hidden>
                Selecciona una opción
            </option>
            <option v-for="item in requestedInfo" :key="item.id">
                {{ item[info] }}
            </option>
        </select>
        <p v-if="error" class="">Por favor, selecciona un valor</p>
    </div>
</template>

<script>
export default {
    name: 'PxSelect',

    props: {
        info: {
            type: String,
            default: '',
        },
        requestedInfo: {
            type: Array,
            default: () => [],
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
        selectItem() {
            let selected = this.requestedInfo
            selected = selected.filter((item) => {
                return item[this.info]
                    .toString()
                    .toLowerCase()
                    .includes(this.$refs[this.info].value.toLowerCase())
            })
            //console.log('SELECTED: ', selected)
            this.$emit('select-value', selected[0])
        },
    },
}
</script>
