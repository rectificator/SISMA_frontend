<template>
    <div v-if="jwt != ''" class="">
        <div class="">
            <px-header :links="links" />
        </div>
        <div
            class=""
        >
            <router-link
                v-for="form in forms"
                :key="forms.indexOf(form)"
                :to="{
                    name: 'form',
                    params: { form: form.routeName, name: form.name },
                }"
                class=""
            >
                {{ form.name }}
            </router-link>

            <!-- <form
                ref="form"
                class=""
            >
                Cargar CSV para mhGAP
                <input
                    type="file"
                    id="input"
                    @change="handleFile"
                    tabindex="-1"
                    class=""
                />
            </form> -->
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
                    routeName: 'agregar_usuario',
                    name: 'Agregar usuario',
                },
                {
                    routeName: 'eliminar_usuario',
                    name: 'Eliminar usuario',
                },
                {
                    routeName: 'cambiar_contrasenia',
                    name: 'Cambiar contraseña',
                },
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
            let file = event.target.files[0]
            console.log('FILE: ', file)
            this.$refs.form.reset()
        },
    },
    mounted() {
        this.jwt = localStorage.jwt
    },
}
</script>
