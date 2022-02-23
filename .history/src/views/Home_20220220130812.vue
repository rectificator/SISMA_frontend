<template>
    <div>
        <router-link
            v-for="formName in forms"
            :key="formName"
            :to="{ name: 'forms', params: { form: formName } }"
        ></router-link>
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
