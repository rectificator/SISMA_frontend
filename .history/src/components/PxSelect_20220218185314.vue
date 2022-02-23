<template>
    <select id="cars">
        <option v-for="item in requestedInfo" :key="item.id">
            {{ item[info] }}
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
        }
    },

    props: {
        info: {
            type: String,
            default: 'tipo',
        },
    },

    created() {
        api.getFrom('sisma/tipo_actividad').then((data) => {
            console.log('DATA: ', data)
            this.requestedInfo = data
        })
    },
}
</script>
