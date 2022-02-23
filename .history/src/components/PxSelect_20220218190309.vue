<template>
    <select :id="info">
        <option value="" disabled selected hidden>Selecciona una opción</option>
        <option v-for="item in requestedInfo" :key="item.id">
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
