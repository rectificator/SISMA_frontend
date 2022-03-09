<template>
    <div v-if="jwt != ''" class="px-6 py-2">
        <px-header :links="links" />
        <div
            class="flex flex-col space-y-6 my-8 px-4 py-4 bg-white border border-gray-400 rounded blur-md invert drop-shadow-xl"
        >
            <router-link
                v-for="form in forms"
                :key="forms.indexOf(form)"
                :to="{
                    name: 'sisma-form',
                    params: { form: form.routeName, name: form.name },
                }"
                class="border border-gray-400 hover:border-gray-500 hover:bg-gray-400 rounded py-2 text-lg text-center font-bold text-gray-700"
            >
                {{ form.name }}
            </router-link>

            <form
                ref="form"
                class="relative border border-gray-400 hover:border-gray-500 hover:bg-gray-400 rounded py-2 text-lg text-center font-bold text-gray-700"
            >
                Cargar CSV para mhGAP
                <input
                    type="file"
                    id="input"
                    @change="handleFile"
                    tabindex="-1"
                    class="absolute opacity-0 inset-0"
                />
            </form>
        </div>
    </div>
</template>

<script>
import PxHeader from '@/components/PxHeader'
export default {
    name: 'Home',
    components: { PxHeader },

    data() {
        return {
            jwt: undefined,
            forms: [
                {
                    routeName: 'acciones_comunitarias',
                    name: 'Acciones comunitarias',
                },
                {
                    routeName: 'acciones_prevencion_salud',
                    name: 'Acciones de prevención en salud',
                },
                { routeName: 'atencion_salud', name: 'Atención en salud' },
                { routeName: 'capacitacion', name: 'Capacitación' },
                { routeName: 'politicas_publicas', name: 'Políticas públicas' },
                { routeName: 'suicidio', name: 'Suicidio' },
                { routeName: 'mhGAP', name: 'mhGAP' },
            ],
            links: [
                {
                    title: 'Home',
                    to: { name: 'home' },
                },
                {
                    title: 'Reporte',
                    to: { name: 'reporte' },
                },
                {
                    title: 'Logout',
                    to: { name: 'login' },
                },
            ],
        }
    },

    methods: {
        handleFile(event) {
            console.log('FILE: ', event.target.files)
            this.$refs.form.reset()
        },
    },
    mounted() {
        this.jwt = localStorage.jwt
    },
}
</script>
