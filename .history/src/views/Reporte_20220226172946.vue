<template>
    <div class="py-4">
        <div class="fixed flex items-center w-full">
            <px-header :links="links" />
        </div>

        <!-- component -->
        <aside
            class="mt-20 rounded-md fixed shadow-xl flex flex-col w-4/9 z-50"
        >
            <div
                class="flex flex-col w-full md:w-64 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800"
            >
                <button
                    class="block px-0 py-2 mt-2 text-xl font-semibold text-white bg-gray-800 rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-xl hover:bg-gray-800 focus:bg-gray-800 focus:text-white focus:outline-none focus:shadow-outline"
                    @click="open = !open"
                >
                    Menu
                </button>
                <div
                    v-if="open"
                    class="flex-grow md:block px-4 pb-8 md:overflow-y-auto"
                >
                    <a
                        class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        href="#general"
                        >Datos generales</a
                    >
                    <a
                        class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        href="#capacitacion_salud_mental"
                        >Capacitación en salud mental</a
                    >
                    <a
                        class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        href="#"
                        >About</a
                    >
                    <a
                        class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        href="#"
                        >Contact</a
                    >
                </div>
            </div>
        </aside>
    </div>
</template>

<script>
import PxHeader from '@/components/PxHeader'

export default {
    name: 'Reporte',
    components: {
        PxHeader,
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

<style scoped>
/* .choropleth {
    height: 10000px;
    width: 10000px;
    padding-left: 3900px;
} */
.choroplethContainer {
    height: 600px;
    background: none;
}
.choropleth {
    position: relative;
    display: inline-block;
    width: 6800px;
    height: 6800px;
    top: -2600px;
    right: 1170px;
}
</style>
