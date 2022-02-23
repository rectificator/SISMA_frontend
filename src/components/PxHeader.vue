<template>
    <header class="shadow w-full">
        <nav>
            <nav
                class="flex items-center justify-between align-text-center flex-wrap bg-white p-2"
            >
                <div
                    class="flex flex-wrap items-center text-black align-text-center mr-6 w-1/4"
                >
                    <div class="w-2/3 h-13 mr-2">
                        <img src="@/assets/logo_nav.png" alt="user image" />
                    </div>
                </div>
                <div
                    class="flex flex-row-reverse w-auto flex-grow align-text-center"
                >
                    <div class="text-md">
                        <router-link
                            v-for="link in links"
                            :key="link.title"
                            :to="link.to"
                            class="mt-4 align-text-center text-black-400 hover:text-blue-400 mr-4 hoover:border hoover:border-gray-400"
                        >
                            {{ link.title }}
                        </router-link>
                    </div>
                </div>
                <div class="">
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
