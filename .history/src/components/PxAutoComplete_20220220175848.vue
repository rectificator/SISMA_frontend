<template>
    <div @blur="toggleShowOptions">
        <label for="info">{{ label }}</label>
        <input
            type="text"
            :name="info"
            id="info"
            placeholder="Buscar..."
            v-model="filter"
            @click="showOptions = true"
            class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
        />
        <p v-if="error == false" class="text-red-600">Éste campo es requerido</p>
        <ul v-show="showOptions" class="">
            <li
                v-for="asset in filteredAssets"
                :key="asset.id"
                @click="selectedItem(asset)"
                class="block cursor-default hover:bg-gray-400 hover:text-white"
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
            console.log('VAL: ', value[this.info])
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
