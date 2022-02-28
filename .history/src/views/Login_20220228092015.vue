<template>
    <div class="relative h-screen bg-redSisma">
        <div class="absolute px-14 p-12 w-full h-full">
            <div class="w-full h-full p-12 bg-gray-100 rounded-md">
                <figure class="w-1/3 mx-auto">
                    <img
                        src="@/assets/logo-login.png"
                        alt="LOogo SISMA"
                        srcset=""
                    />
                </figure>
                <h1 class="text-xl font-semibold">
                    Sistema de Información en Salud Mental y Adicciones
                </h1>
                <form class="mt-6">
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
                        class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
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
                        class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                        required
                    />
                    <button
                        type="submit"
                        class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                    >
                        Sign in
                    </button>
                    <p
                        class="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black"
                    >
                        Forgot password?
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.center-box {
    margin-top: 12%;
    margin-left: 50%;
}
</style>
