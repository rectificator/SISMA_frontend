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
                    class="flex flex-col text-2xl font-semibold text-center login-title"
                >
                    <span>Sistema de Información en Salud</span>
                    <span>Mental y Adicciones</span>
                </h1>
                <form class="mt-6 px-32">
                    <label
                        for="email"
                        class="block text-xs font-semibold text-gray-600 uppercase"
                        >E-mail
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="john.doe@company.com"
                        autocomplete="email"
                        class="block w-full p-1 mt-2 rounded-full text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                        required
                    />
                    <label
                        for="password"
                        class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                        >Password</label
                    >
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="********"
                        autocomplete="current-password"
                        class="block w-full p-1 mt-2 rounded-full text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                        required
                    />
                    <button
                        type="submit"
                        class="w-full py-3 mt-6 font-medium rounded-full tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
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
.login-title {
    color: #858796;
}
</style>
