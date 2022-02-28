<template>
    <div v-if="token == '0000'" class="px-6 py-2">
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
            token: this.$route.params.get('token'),
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
            ],
            links: [
                {
                    title: 'Home',
                    to: { name: 'home' },
                },
                {
                    title: 'Logout',
                    to: { name: 'login' },
                },
                {
                    title: 'Reporte',
                    to: { name: 'reporte' },
                },
            ],
        }
    },

    methods: {},
}
</script>
