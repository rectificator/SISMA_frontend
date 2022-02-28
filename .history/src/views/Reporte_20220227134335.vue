<template>
    <div>
        <div
            class="fixed block w-full h-1/6 top-0 left-0 my-0 mx-auto py-4 px-6 bg-gray-100 z-50"
        >
            <px-header :links="links" />
            <div class="block flex justify-end bg-transparent">
                <button
                    :class="
                        reportSelect == false ? 'bg-green-800' : 'bg-gray-800'
                    "
                    class="px-2 py-2 mt-2 mr-4 text-base font-semibold text-white hover:text-xl hover:bg-gray-800 focus:bg-gray-800 focus:text-white focus:outline-none focus:shadow-outline"
                    @click="reportSelect = false"
                >
                    Reporte Estatal
                </button>
                <button
                    :class="
                        reportSelect == true ? 'bg-blue-800' : 'bg-gray-800'
                    "
                    class="px-2 py-2 mt-2 text-base font-semibold text-white hover:text-xl hover:bg-gray-800 focus:bg-gray-800 focus:text-white focus:outline-none focus:shadow-outline"
                    @click="reportSelect = true"
                >
                    Reporte Federal
                </button>
            </div>
        </div>

        <reporte-estatal v-if="reportSelect == false" class="z-0 mt-20" />
        <reporte-federal v-if="reportSelect == true" class="z-0 mt-20" />
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
