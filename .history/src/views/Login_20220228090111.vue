<template>
    <div class="relative h-screen px-12 bg-redSisma">
        <div class="absolute center-box inline-block p-12 bg-white rounded-md">
            <h1 class="text-xl font-semibold">
                Welcome back,
                <span class="red font-normal">sign in to continue</span>
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
</template>

<script>
export default {}
</script>

<style scoped>
.center-box{
    left: 50px;
}
</style>