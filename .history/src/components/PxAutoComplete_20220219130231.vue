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
            <li v-for="item in requestedInfo"></li>
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
            this.requestedInfo = data
        })
    },
    computed: {
        filteredAssets() {
            return this.assets
                .filter((asset) => {
                    return asset[this.info]
                        .toLowerCase()
                        .includes(this.filter.toLowerCase())
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
}
</script>
