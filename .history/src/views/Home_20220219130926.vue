<template>
    <form @submit.prevent="submitForm" class="mt-9">
        <px-select-modalidad
            @select-value="getTipoActividad"
        ></px-select-modalidad>
        <px-auto-complete @select-value="getTipoActividad"></px-auto-complete>
        <button
            type="submit"
            class="block w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
        >
            Sign in
        </button>
    </form>
</template>

<script>
import PxSelectModalidad from '@/components/PxSelectModalidad'
import PxAutoComplete from '@/components/PxAutoComplete'
import config from '@/config'
export default {
    name: 'Home',
    components: {
        PxSelectModalidad,
        PxAutoComplete,
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

        getModalidad(id_modalidad) {
            console.log('TA: ', id_modalidad)
            this.id_modalidad = id_modalidad
        },
    },
}
</script>
