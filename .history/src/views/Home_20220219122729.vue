<template>
    <form @submit.prevent="submitForm" class="">
        <px-select-modalidad @select-value="getTipoActividad"></px-select-modalidad>
        <button
            type="submit"
            
        >
            Sign in
        </button>
    </form>
</template>

<script>
import PxSelectModalidad from '@/components/PxSelectModalidad'
import config from '@/config'
export default {
    name: 'Home',
    components: {
        PxSelectModalidad,
    },

    data() {
        return {
            apiBaseUrl: config.apiBaseUrl,
            id_modalidad: 'Pollo Raro',
        }
    },

    methods: {
        async submitForm() {
            const res = await fetch(`${this.apiBaseUrl}acciones_comunitarias`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                // pass in the information from our form
                body: JSON.stringify({
                    id_modalidad: this.id_modalidad,
                    /*  email: this.email,
                    password: this.password, */
                }),
            })
            res.json().then((data) => console.log(data))
        },

        getTipoActividad(id_modalidad){
            console.log('TA: ' , id_modalidad)
            this.id_modalidad = id_modalidad
        }
    },
}
</script>
