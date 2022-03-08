<template>
    <div class="relative h-screen bg-redSisma">
        <div class="absolute px-16 py-8 w-full h-full">
            <div class="w-full h-full p-12 bg-gray-100 rounded-md">
                <figure class="w-1/4 mx-auto">
                    <img
                        src="@/assets/logo-login.png"
                        alt="LOogo SISMA"
                        srcset=""
                    />
                </figure>
                <h1
                    class="flex flex-col text-2xl font-semibold text-center login-text-color"
                >
                    <span>Sistema de Información en Salud</span>
                    <span>Mental y Adicciones</span>
                </h1>
                <form @submit.prevent="login" class="mt-6 px-48">
                    <input
                        id="email"
                        type="text"
                        name="email"
                        placeholder="usuario"
                        autocomplete="email"
                        class="block w-full py-2 px-4 mt-2 rounded-full login-text-color bg-white border border-blue-400 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                        required
                        v-model="keys.usuario"
                    />

                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="contraseña"
                        autocomplete="current-password"
                        class="block w-full py-2 px-4 mt-2 rounded-full login-text-color bg-white border border-blue-400 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                        required
                        v-model="keys.contrasenia"
                    />
                    <button
                        type="submit"
                        class="w-full py-3 mt-6 font-medium text-lg rounded-full tracking-widest text-white bg-gray-900 shadow-lg focus:outline-none hover:bg-blue-600 hover:shadow-none"
                    >
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            keys: {
                usuario: '',
                contrasenia: '',
            },
        }
    },
    methods: {
        login() {
            fetch(`${this.apiBaseUrl}${this.formRoute}`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.keys),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log('DATA: ', data)
                })
            /* res.json().then((data) => console.log(data))
            this.$router.push({
                    name: 'home',
                    params: { token: '0000' },
                    replace: true,
                }) */
            ///////////////////
        },
    },
}
</script>

<style scoped>
.login-text-color {
    color: #858796;
}
</style>
