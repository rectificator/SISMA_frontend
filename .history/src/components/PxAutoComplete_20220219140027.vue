<template>
    <div>
        <input
            type="text"
            :name="info"
            id="info"
            placeholder="Buscar..."
            v-model="filter"
        />
        <ul class="">
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
import api from '@/api'
export default {
    name: 'PXAutoComplete',
    data() {
        return {
            assets: [],
            info: 'tipo',
            filter: '',
            sortOrder: 1,
        }
    },
    created() {
        api.getFrom('sisma/tipo_actividad').then((data) => {
            //console.log('DATA: ', data)
            this.assets = data
        })
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
            this.$emit('select-value', value)
        },
    },
}
</script>
