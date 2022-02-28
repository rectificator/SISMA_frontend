<template>
    <div class="py-4">
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
        <section id="general" class="flex flex-col pt-24 items-end">
            <p
                class="block px-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg text-left"
            >
                Datos generales
            </p>
            <table class="w-full mt-2">
                <tr class="">
                    <th class="text-sm border"></th>
                    <th colspan="2" class="text-sm border">
                        Acciones comunitarias
                    </th>
                    <th colspan="2" class="text-sm border">Capacitación</th>
                    <th colspan="2" class="text-sm border">
                        Acciones de prevención
                    </th>
                    <th class="text-sm border"></th>
                    <th class="text-sm border"></th>
                    <th class="text-sm border"></th>
                </tr>
                <tr class="">
                    <th class="text-sm border px-1">Estado</th>
                    <th class="text-sm border px-1">Personas</th>
                    <th class="text-sm border px-1">Acciones</th>
                    <th class="text-sm border px-1">Personas</th>
                    <th class="text-sm border px-1">Acciones</th>
                    <th class="text-sm border px-1">Personas</th>
                    <th class="text-sm border px-1">Acciones</th>
                    <th class="text-sm border px-1">Atención</th>
                    <th class="text-sm border px-1">Suicidio</th>
                    <th class="text-sm border px-1">Políticas</th>
                </tr>
            </table>
        </section>
        <section
            id="capacitacion_salud_mental"
            class="flex flex-col items-center pt-4"
        >
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                CAPACITACION EN SALUD MENTAL A PERSONAL DE 1er NIVEL DE
                ATENCIÓN.
            </p>
            <p
                class="block pb-4 py-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                Guía de Intervención para la Atención de Trastornos Mentales,
                Neurológicos o por Consumo de Sustancias.
            </p>

            <div
                class="overflow-hidden rounded-md border border-gray-400 w-11/12 choroplethContainer"
            >
                <div class="choropleth">
                    <state-choropleth />
                </div>
            </div>

            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                CAPACITACION EN SUICIDIO A PERSONAL DE SALUD MENTAL
            </p>
            <p
                class="block pb-4 py-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                CURSO DIPLOMADO DE ESPECIALIZACIÓN EN IDENTIFICACIÓN, VALORACIÓN
                E INTERVENCIÓN DE LA CONDUCTA SUICIDA.
            </p>
            <div
                class="overflow-hidden rounded-md border border-gray-400 w-11/12 choroplethContainer"
            >
                <div class="choropleth">
                    <state-choropleth />
                </div>
            </div>

            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                AVANCE BRIGADAS Y GRUPOS DE APOYO EN SALUD MENTAL
            </p>

            <div class="w-2/3 h-30">
                <horizontal-bar-chart
                    :chart-data="brigadasGruposDataCollection"
                />
            </div>
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                CONSULTAS OTORGADAS DE 1ª Vez y Subsecuentes
            </p>

            <div class="w-2/3 h-30">
                <horizontal-bar-chart :chart-data="consultasDataCollection" />
            </div>
        </section>
    </div>
</template>

<script>
import PxHeader from '@/components/PxHeader'
import HorizontalBarChart from '@/components/charts/HorizontalBarChart'
import StateChoropleth from '@/components/charts/StateChoropleth'
export default {
    name: 'Reporte',
    components: {
        PxHeader,
        HorizontalBarChart,
        StateChoropleth,
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
