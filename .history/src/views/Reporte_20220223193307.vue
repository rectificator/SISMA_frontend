<template>
    <px-header :links="links" />
</template>

<script>
import PxHeader from '../components/PxHeader.vue'
export default {
    name: 'Reporte',
    components: {
        PxHeader,
    },
    data() {
        return {
            links: [
                {
                    title: 'Home',
                    to: { name: 'home' },
                },
                {
                    title: 'Logout',
                    to: { name: 'login' },
                },
                {
                    title: 'Reporte',
                    to: { name: 'reporte' },
                },
            ],
        }
    },
}
</script>
