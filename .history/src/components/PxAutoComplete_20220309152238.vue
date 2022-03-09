<template>
    <div @blur="toggleShowOptions">
        <label for="info">{{ label }}</label>
        <input
            type="text"
            :name="info"
            id="info"
            autocomplete="text"
            placeholder="Buscar..."
            v-model="filter"
            @click="showOptions = true"
            class=""
        />
        <p v-if="error" class="">Éste campo es requerido</p>
        <ul v-show="showOptions" class="">
            <li
                v-for="asset in filteredAssets"
                :key="asset.id"
                @click="selectedItem(asset)"
                class=""
            >
                {{ asset[info] }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'PXAutoComplete',
    data() {
        return {
            filter: '',
            sortOrder: 1,
            showOptions: false,
        }
    },
    props: {
        assets: {
            type: Array,
            default: () => [],
        },
        info: {
            type: String,
            default: '',
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
    computed: {
        filteredAssets() {
            return this.assets
                .filter((asset) => {
                    return this.filter != ''
                        ? asset[this.info]
                              .toLowerCase()
                              .includes(this.filter.toLowerCase())
                        : ''
                })
                .sort((a, b) => {
                    if (parseInt(a.id) > parseInt(b.id)) {
                        return this.sortOrder
                    }
                    //Cambio la dirección del orden
                    return this.sortOrder * -1
                })
        },
    },

    methods: {
        selectedItem(value) {
            //console.log('VAL: ', value[this.info])
            this.filter = value[this.info].toString()
            this.toggleShowOptions()
            this.$emit('select-value', value)
        },
        toggleShowOptions() {
            this.showOptions = !this.showOptions
        },
    },
}
</script>
