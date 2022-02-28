<template>
    <div>
        <px-header :links="links" />
        <!-- component -->
        <aside class="mt-2 rounded-md fixed shadow-xl flex flex-col w-4/9">
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
        <section id="general" class="flex flex-col mt-4 items-end">
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
        <section id="capacitacion_salud_mental">
            <p
                class="block px-4 py-2 mt-2 text-lg font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                Capacitación en salud mental
            </p>
            <line-chart :chart-data="datacollection"></line-chart>
        </section>
    </div>
</template>

<script>
import PxHeader from '@/components/PxHeader'
import LineChart from '@/components/charts/LineChart'
export default {
    name: 'Reporte',
    components: {
        PxHeader,
        LineChart,
    },
    data() {
        return {
            datacollection: {
                labels: [this.getRandomInt(), this.getRandomInt()],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#f87979',
                        data: [this.getRandomInt(), this.getRandomInt()],
                    },
                    {
                        label: 'Data One',
                        backgroundColor: '#f87979',
                        data: [this.getRandomInt(), this.getRandomInt()],
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
