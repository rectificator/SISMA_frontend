<template>
    <header class="shadow w-full">
        <nav>
            <nav
                class="flex items-center justify-between flex-wrap bg-white p-6"
            >
                <div class="flex items-center text-white mr-6">
                    <div class="w-12 h-12">
                        <img src="@/assets/logo_nav.png" alt="user image" />
                    </div>
                    <router-link
                        class="font-semibold text-xl tracking-tight"
                        :to="{ name: 'home' }"
                    >
                        Platzi Exchange
                    </router-link>
                </div>
                <div
                    class="hidden sm:block w-full blok flex-grow lg:flex lg:items-center lg:wauto"
                >
                    <div class="text-sm lg:flex-grow">
                        <router-link
                            v-for="link in links"
                            :key="link.title"
                            :to="link.to"
                            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
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
