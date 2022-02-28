<template>
    <div>
        <div
            class="fixed block w-full h-1/6 top-0 left-0 my-0 mx-auto py-4 px-6 bg-gray-100 z-50"
        >
            <px-header :links="links" />
        </div>

        <reporte-estatal class="z-0" />
        <reporte-federal class="z-0" />
    </div>
</template>

<script>
import PxHeader from '@/components/PxHeader'
import ReporteEstatal from '@/views/ReporteEstatal'
import ReporteFederal from '@/views/ReporteFederal'

export default {
    name: 'Reporte',
    components: {
        PxHeader,
        ReporteEstatal,
        ReporteFederal,
    },
    data() {
        return {
            reportSelect: false,
            open: false,
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

<style scoped></style>
