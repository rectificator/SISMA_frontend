<template>
    <div class="flex flex-col px-6 space-y-6">
        <form action="checkChanged">
            <px-checkbox-group-mes v-model="prueba" />
            <button
                type="submit"
                class="px-4 py-2 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none self-center"
            >
                Enviar
            </button>
        </form>
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
</template>

<script>
import PxCheckboxGroupMes from '@/components/PxCheckboxGroupMes'
export default {
    name: 'Home',
    components: { PxCheckboxGroupMes },

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

            prueba: [],
        }
    },

    methods: {
        checkChanged() {
            console.log('LIST: ', this.prueba)
        },
    },
}
</script>
