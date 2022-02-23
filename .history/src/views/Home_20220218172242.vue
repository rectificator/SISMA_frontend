<template>
    <div></div>
</template>

<script>
import api from '@/api'
export default {
    name: 'Home',

    data() {
        return {
            tipo_actividad: [],
        }
    },

    created() {
        api.getFrom('sisma/tipo_actividad').then((data) => {
            console.log('DATA: ', data)
            this.tipo_actividad = data
        })
    },
}
</script>
