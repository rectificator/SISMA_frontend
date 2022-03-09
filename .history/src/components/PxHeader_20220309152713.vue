<template>
    <header class="">
        <nav>
            <nav
                class=""
            >
                <div
                    class=""
                >
                    <div class="">
                        <img src="@/assets/logo_nav.png" alt="user image" />
                    </div>
                </div>
                <div
                    class=""
                >
                    <div class="">
                        <router-link
                            v-for="link in links"
                            :key="link.title"
                            :to="link.to"
                            class=""
                        >
                            {{ link.title }}
                        </router-link>
                    </div>
                </div>
                <div class="">
                    <div
                        @click="showUserMenu = !showUserMenu"
                        class=""
                    >
                        <img
                            src="@/assets/undraw_profile_1.svg"
                            alt="user image"
                        />
                    </div>
                    <div
                        v-if="showUserMenu"
                        class=""
                    >
                        <router-link
                            to="admin"
                            class=""
                        >
                            Administración
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
    data() {
        return {
            showUserMenu: false,
        }
    },
    props: {
        links: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style scoped>
.user-menu-align {
    top: 120%;
    left: -200%;
}
</style>
