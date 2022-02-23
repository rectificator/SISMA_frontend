<template>
    <form @submit.prevent="submitForm" class="">
        <px-select></px-select>
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
            id_tipo_actividad: '',
        }
    },

    methods: {
        async submitForm() {
            const res = await fetch(this.apiBaseUrl, {
                method: 'POST',
                mode: 'cors',
                // pass in the information from our form
                body: JSON.stringify({
                    id_tipo_actividad: this.username,
                    /*  email: this.email,
                    password: this.password, */
                }),
            })
            console.log(res)
        },
    },
}
</script>
