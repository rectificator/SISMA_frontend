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
                <form class="mt-6 px-40">
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="usuario"
                        autocomplete="email"
                        class="block w-full py-1 px-4 mt-2 rounded-full login-text-color bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                        required
                    />

                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="contraseña"
                        autocomplete="current-password"
                        class="block w-full py-1 px-4 mt-2 rounded-full login-text-color bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                        required
                    />
                    <button
                        type="submit"
                        class="w-full py-3 mt-6 font-medium text-lg rounded-full tracking-widest text-white bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                    >
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.login-text-color {
    color: #858796;
}
</style>
