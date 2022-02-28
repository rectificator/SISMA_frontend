<template>
    <div>
        <div
            class="fixed block w-full max-h-8 inset-0 my-0 mx-auto py-4 pr-12 bg-red-100 z-50"
        >
            <px-header :links="links" />
        </div>

        <reporte-estatal class="z-0" />
    </div>
</template>

<script>
import PxHeader from '@/components/PxHeader'
import ReporteEstatal from '@/views/ReporteEstatal'

export default {
    name: 'Reporte',
    components: {
        PxHeader,
        ReporteEstatal,
    },
    data() {
        return {
            brigadasGruposDataCollection: {
                labels: ['A', 'B', 'C', 'C', 'E', 'F', 'G'],
                datasets: [
                    {
                        label: 'No. de terapeutas de grupos de apoyo emocional',
                        backgroundColor: '#5858f9',
                        data: [8, 14, 8, 7, 2, 4, 1],
                    },
                    {
                        label: 'No. Brigadas de apoyo en salud mental',
                        backgroundColor: '#085809',
                        data: [5, 2, 8, 7, 2, 2, 1],
                    },
                    {
                        label: 'No. brigadostas de apoyo en salud mental',
                        backgroundColor: '#f85809',
                        data: [1, 4, 18, 4, 2, 4, 3],
                    },
                ],
            },
            consultasDataCollection: {
                labels: ['A', 'B', 'C', 'C', 'E', 'F', 'G'],
                datasets: [
                    {
                        label: 'Consultas de 1ra vez',
                        backgroundColor: '#f85809',
                        data: [8, 14, 8, 7, 2, 4, 1],
                    },
                    {
                        label: 'Consultas subsecuentes',
                        backgroundColor: '#1848ff',
                        data: [8, 14, 8, 7, 2, 4, 1],
                    },
                ],
            },
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
