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
                <div class="flex w-auto flex-grow bg-blue-200">
                    <div class="text-sm">
                        <router-link
                            v-for="link in links"
                            :key="link.title"
                            :to="link.to"
                            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-black mr-4"
                        >
                            {{ link.title }}
                        </router-link>
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
