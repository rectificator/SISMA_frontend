<template>
    <div></div>
</template>

<script>
import api from "@/api"
export default {

    name: 'Home',

    data() {
        return {
            tipo_actividad: []
        }
    },

    created(){
        api.getFrom('tipo_actividad').then( data =>  this.tipo_actividad = data)
    }
    
}
</script>
