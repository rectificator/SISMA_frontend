<template>
    <header class="shadow w-full">
        <nav>
            <nav
                class="flex items-center justify-between flex-wrap bg-white p-2 bg-red-200"
            >
                <div
                    class="flex flex-wrap items-center text-black mr-6 bg-green-200 w-1/4"
                >
                    <div class="w-1/2 h-12">
                        <img src="@/assets/logo_nav.png" alt="user image" />
                    </div>
                    <router-link
                        class="ms-4 font-semibold text-xl tracking-tight"
                        :to="{ name: 'home' }"
                    >
                        SISMA
                    </router-link>
                </div>
                <div class="flex flex-row-reverse w-auto flex-grow bg-blue-200">
                    <div class="text-md">
                        <router-link
                            v-for="link in links"
                            :key="link.title"
                            :to="link.to"
                            class="mt-4 inline-block text-center text-black-400 hover:text-blue-400 mr-4 hoover:border hoover:border-gray-400"
                        >
                            {{ link.title }}
                        </router-link>
                    </div>
                </div>
                <div class="mr-6 bg-green-200">
                    <div class="w-10 h-10">
                        <img
                            src="@/assets/undraw_profile_1.svg"
                            alt="user image"
                        />
                    </div>
                </div>
            </nav>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'PxHeader',

    props: {
        links: {
            type: Array,
            default: () => [],
        },
    },
}
</script>
