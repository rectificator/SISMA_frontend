<template>
    <div class="flex flex-col px-[10%] space-y-6">
        <router-link
            v-for="formName in forms"
            :key="forms.indexOf(formName)"
            :to="{ name: 'sisma-form', params: { form: formName } }"
            class="border border-gray-400 hover:border-gray-500 hover:bg-gray-300 rounded text-center"
        >
            {{ formName }}
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {},

    data() {
        return {
            forms: [
                'acciones_comunitarias',
                'acciones_prevencion_salud',
                'atencion_salud',
                'capacitacion',
                'politicas_publicas',
                'suicidio',
            ],
        }
    },

    methods: {},
}
</script>
