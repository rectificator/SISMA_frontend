<template>
    <form @submit.prevent="submitForm" class="mt-9">
        <px-select-modalidad @select-value="getModalidad"></px-select-modalidad>
        <px-auto-complete-estado @select-value="getAutoComplete"></px-auto-complete-estado>
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
import PxAutoCompleteEstado from '@/components/PxAutoCompleteEstado'
import config from '@/config'
export default {
    name: 'Home',
    components: {
        PxSelectModalidad,
        PxAutoCompleteEstado,
    },

    data() {
        return {
            apiBaseUrl: config.apiBaseUrl,
            info: {},
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
                body: JSON.stringify(this.info),
            })
            res.json().then((data) => console.log(data))
        },

        getModalidad(id_modalidad) {
            console.log('INFO: ', this.info)
            this.info.id_modalidad = id_modalidad
        },
        getAutoComplete(value) {
            console.log('INFO: ', this.info)
            this.info.auto_complete = value
        },
    },
}
</script>
