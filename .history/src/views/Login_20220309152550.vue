<template>
    <div class="">
        <div class="">
            <div class="">
                <figure class="">
                    <img
                        src="@/assets/logo-login.png"
                        alt="LOogo SISMA"
                        srcset=""
                    />
                </figure>
                <h1
                    class=""
                >
                    <span>Sistema de Información en Salud</span>
                    <span>Mental y Adicciones</span>
                </h1>
                <form @submit.prevent="login" class="">
                    <input
                        id="email"
                        type="text"
                        name="email"
                        placeholder="username"
                        autocomplete="text"
                        class=""
                        required
                        v-model="keys.username"
                    />

                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="contraseña"
                        autocomplete="current-password"
                        class=""
                        required
                        v-model="keys.password"
                    />
                    <button
                        type="submit"
                        class=""
                    >
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import config from '@/config'
export default {
    name: 'Login',
    data() {
        return {
            keys: {
                username: '',
                password: '',
            },
        }
    },
    methods: {
        login() {
            fetch(`${config.apiBaseUrl}user/login`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.keys),
            })
                .then((res) => res.json())
                .then((data) => {
                    localStorage.jwt = data.body.jwt
                    this.$router.push({
                        name: 'home',
                        replace: true,
                    })
                })
        },
    },
    mounted() {
        localStorage.jwt = ''
        console.log(localStorage.jwt)
    },
}
</script>

<style scoped>
.login-text-color {
    color: #858796;
}
</style>
