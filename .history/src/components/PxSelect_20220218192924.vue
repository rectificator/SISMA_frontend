<template>
    <select
        :id="info"
        class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
    >
        <option value="" disabled selected hidden>Selecciona una opción</option>
        <option v-for="item in requestedInfo" :key="item.id" :value="key">
            {{ item[valueSelector] }}
        </option>
    </select>
</template>

<script>
import api from '@/api'
export default {
    name: 'PxSelect',

    data() {
        return {
            requestedInfo: [],
            valueSelector: 'tipo',
        }
    },

    props: {
        info: {
            type: String,
            default: 'tipo_actividad',
        },
    },

    created() {
        if (this.info == 'tipo_actividad') {
            this.valueSelector = 'tipo'
            api.getFrom('sisma/tipo_actividad').then((data) => {
                //console.log('DATA: ', data)
                this.requestedInfo = data
            })
        }
    },
}
</script>
