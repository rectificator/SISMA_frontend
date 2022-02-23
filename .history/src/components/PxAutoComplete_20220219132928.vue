<template>
    <div>
        <input
            type="text"
            :name="info"
            id="info"
            placeholder="Buscar..."
            v-model="filter"
        />
        <ul>
            <li
                :ref="info"
                v-for="asset in filteredAssets"
                :key="asset.id"
                @click="selectedItem"
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
            console.log('DATA: ', data[0])
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
        selectedItem() {
            console.log('REFS: ', this.$refs)
            this.$emit('select-value', this.$refs[this.info].value || '')
        },
    },
}
</script>
