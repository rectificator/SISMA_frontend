<template>
    <div></div>
</template>

<script>
import api from '@/api'
export default {
    name: 'PxSelect',

    data() {
        return {
            info: [],
        }
    },

    props: {
        info: {
            type: String,
            default: 'tipo_actividad'
        }
    }

    created() {
        api.getFrom('sisma/tipo_actividad').then((data) => {
            console.log('DATA: ', data)
            this.info = data
        })
    },
}
</script>
