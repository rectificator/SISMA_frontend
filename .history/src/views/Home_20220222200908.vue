<template>
    <div>
        <px-header />
        <div class="flex flex-col px-6 space-y-6">
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
        }
    },

    methods: {},
}
</script>
