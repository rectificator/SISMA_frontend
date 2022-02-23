<template>
    <form @submit.prevent="submitForm" class="mt-9">
        <px-select-modalidad @select-value="getModalidad"></px-select-modalidad>
        <px-auto-complete @select-value="getAutoComplete"></px-auto-complete>
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
            console.log('Modalidad: ', id_modalidad)
            this.info.id_modalidad = id_modalidad
        },
        getAutoComplete(value) {
            console.log('AutoComplete: ', value)
            this.info.auto_complete = value
        },
    },
}
</script>
