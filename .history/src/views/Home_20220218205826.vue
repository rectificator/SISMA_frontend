<template>
    <form @submit.prevent="submitForm" class="">
        <px-select @select-value="getTipoActividad"></px-select>
        <button
            type="submit"
            class="block w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
        >
            Sign in
        </button>
    </form>
</template>

<script>
import PxSelect from '@/components/PxSelect'
import config from '@/config'
export default {
    name: 'Home',
    components: {
        PxSelect,
    },

    data() {
        return {
            apiBaseUrl: config.apiBaseUrl,
            id_tipo_actividad: 'Pollo Raro',
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
                    id_tipo_actividad: this.id_tipo_actividad,
                    /*  email: this.email,
                    password: this.password, */
                }),
            })
            res.json().then((data) => console.log(data))
        },

        getTipoActividad(id_tipo_actividad){
            console.log('TA: ' , id_tipo_actividad)
            this.id_tipo_actividad = id_tipo_actividad
        }
    },
}
</script>
