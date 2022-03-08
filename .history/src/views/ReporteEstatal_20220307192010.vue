<template>
    <div class="py-4 px-4">
        <!-- component -->
        <aside
            class="mt-20 rounded-md fixed shadow-xl flex flex-col w-4/9 bg-transparent z-50"
        >
            <div
                :class="open == true ? 'bg-white' : 'bg-transparent'"
                class="flex flex-col w-full md:w-64 text-gray-700"
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
                        @click="toggleOpen"
                        >Datos generales</a
                    >
                    <a
                        class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        href="#capacitacion_salud_mental"
                        @click="toggleOpen"
                        >Capacitación en salud mental</a
                    >
                    <a
                        class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        href="#suicidio"
                        @click="toggleOpen"
                        >Suicidio</a
                    >
                    <a
                        class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        href="#brigadas_grupos"
                        @click="toggleOpen"
                        >Brigadas y grupos de apoyo</a
                    >
                    <a
                        class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        href="#consultas"
                        @click="toggleOpen"
                        >Consultas</a
                    >
                </div>
            </div>
        </aside>
        <section id="general" class="flex flex-col pt-24 items-center">
            <p
                class="w-full px-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg text-right"
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
                    <th
                        class="text-white font-bold text-sm border px-1 bg-red-800"
                    >
                        Estado
                    </th>
                    <th
                        class="text-white font-bold text-sm border px-1 bg-red-800"
                    >
                        Personas
                    </th>
                    <th
                        class="text-white font-bold text-sm border px-1 bg-red-800"
                    >
                        Acciones
                    </th>
                    <th
                        class="text-white font-bold text-sm border px-1 bg-red-800"
                    >
                        Personas
                    </th>
                    <th
                        class="text-white font-bold text-sm border px-1 bg-red-800"
                    >
                        Acciones
                    </th>
                    <th
                        class="text-white font-bold text-sm border px-1 bg-red-800"
                    >
                        Personas
                    </th>
                    <th
                        class="text-white font-bold text-sm border px-1 bg-red-800"
                    >
                        Acciones
                    </th>
                    <th
                        class="text-white font-bold text-sm border px-1 bg-red-800"
                    >
                        Atención
                    </th>
                    <th
                        class="text-white font-bold text-sm border px-1 bg-red-800"
                    >
                        Suicidio
                    </th>
                    <th
                        class="text-white font-bold text-sm border px-1 bg-red-800"
                    >
                        Políticas
                    </th>
                </tr>
                <tr
                    v-for="(dataset, datasetIndex) in generalInfoWithStates"
                    :key="datasetIndex"
                    class=""
                >
                    <th
                        v-for="(data, dataIndex) in dataset"
                        :key="dataIndex"
                        :class="dataIndex == 0 ? 'w-12 text-redSisma' : ''"
                        class="text-sm border px-1"
                    >
                        {{ dataIndex != 0 ? Math.round(data) : data }}
                    </th>
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
                class="relative overflow-hidden rounded-md border border-gray-400 w-11/12 choroplethContainer"
            >
                <div class="choropleth">
                    <state-choropleth
                        :dataset="capacitacionSaludMentalPorEstado"
                    />
                </div>
                <div class="absolute choroplethInnerInfo">
                    <span
                        class="block text-center text-2xl pt-6 font-bold text-red-800"
                        >{{ totalCapacitacionSaludMental }}</span
                    >
                    <p class="block text-lg font-bold text-center">
                        Recursos Humanos capacitados del 1er nivel de atención
                    </p>
                </div>
            </div>
        </section>

        <section id="suicidio" class="flex flex-col pt-24 items-center">
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
                class="relative overflow-hidden rounded-md border border-gray-400 w-11/12 choroplethContainer"
            >
                <div class="choropleth">
                    <state-choropleth
                        :dataset="capacitacionEnSuicidioPorEstado"
                        :background-color="choroplethRed"
                    />
                </div>
                <div class="absolute choroplethInnerInfo">
                    <span
                        class="block text-center text-2xl pt-6 font-bold text-red-800"
                        >{{ totalCapacitacionSuicidio }}</span
                    >
                    <p class="block text-lg font-bold text-center">
                        Recursos Humanos capacitados en prevención del suicidio
                    </p>
                </div>
            </div>
        </section>

        <section id="brigadas_grupos" class="flex flex-col pt-24 items-center">
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                AVANCE BRIGADAS Y GRUPOS DE APOYO EN SALUD MENTAL
            </p>

            <div class="w-2/3 h-30">
                <horizontal-bar-chart
                    :chart-data="avanceBrigadasGruposApoyoSaludMental"
                />
            </div>
        </section>

        <section id="" class="flex flex-col pt-24 items-center">
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                CONSULTAS POR ESTADO
            </p>
            <p
                class="block pb-4 py-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                1RA VEZ
            </p>
            <div
                class="relative overflow-hidden rounded-md border border-gray-400 w-11/12 choroplethContainer"
            >
                <div class="choropleth">
                    <state-choropleth
                        :dataset="capacitacionEnSuicidioPorEstado"
                        :background-color="choroplethGreen"
                    />
                </div>
                <div class="absolute choroplethInnerInfo">
                    <span
                        class="block text-center text-2xl pt-6 font-bold text-red-800"
                        >{{ totalCapacitacionSuicidio }}</span
                    >
                    <p class="block text-lg font-bold text-center">
                        Consultas de 1ra vez
                    </p>
                </div>
            </div>
        </section>
        <section id="" class="flex flex-col pt-24 items-center">
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                CONSULTAS POR ESTADO
            </p>
            <p
                class="block pb-4 py-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                SUBSECUENTES
            </p>
            <div
                class="relative overflow-hidden rounded-md border border-gray-400 w-11/12 choroplethContainer"
            >
                <div class="choropleth">
                    <state-choropleth
                        :dataset="capacitacionEnSuicidioPorEstado"
                        :background-color="choroplethRandom"
                    />
                </div>
                <div class="absolute choroplethInnerInfo">
                    <span
                        class="block text-center text-2xl pt-6 font-bold text-red-800"
                        >{{ totalCapacitacionSuicidio }}</span
                    >
                    <p class="block text-lg font-bold text-center">
                        Consultas subsecuentes
                    </p>
                </div>
            </div>
        </section>

        <section id="consultas" class="flex flex-col pt-24 items-center">
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                CONSULTAS OTORGADAS DE 1ª Vez y Subsecuentes
            </p>

            <div class="w-2/3 h-30">
                <horizontal-bar-chart :chart-data="consultasDataCollection" />
            </div>
        </section>

        <section id="" class="flex flex-col pt-24 items-center">
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                CONSULTAS OTORGADAS DE 1ª Vez y Subsecuentes
            </p>

            <div class="w-2/3 h-30">
                <line-chart :chart-data="randomDataCollection" />
            </div>
        </section>

        <section id="" class="flex flex-col pt-24 items-center">
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                CONSULTAS OTORGADAS DE 1ª Vez y Subsecuentes
            </p>

            <div class="w-2/3 h-30">
                <radar-chart :chart-data="randomDataCollection" />
            </div>
        </section>

        <section id="" class="flex flex-col pt-24 items-center">
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                CONSULTAS OTORGADAS DE 1ª Vez y Subsecuentes
            </p>

            <div class="w-2/3 h-30">
                <doughnut-chart :chart-data="randomDoughnutDataCollection" />
            </div>
        </section>

        <section id="" class="flex flex-col pt-24 items-center">
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                CONSULTAS OTORGADAS DE 1ª Vez y Subsecuentes
            </p>

            <div class="w-2/3 h-30">
                <polar-area-chart :chart-data="randomDoughnutDataCollection" />
            </div>
        </section>

        <section id="" class="flex flex-col pt-24 items-center">
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                CONSULTAS OTORGADAS DE 1ª Vez y Subsecuentes
            </p>

            <div class="w-2/3 h-30">
                <pie-chart :chart-data="randomDoughnutDataCollection" />
            </div>
        </section>

        <section id="" class="flex flex-col pt-24 items-center">
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                CONSULTAS OTORGADAS DE 1ª Vez y Subsecuentes
            </p>

            <div class="w-2/3 h-30">
                <bubble-chart :chart-data="randomBubbleDataCollection" />
            </div>
        </section>
    </div>
</template>

<script>
import { formatNumberWithCommas } from '@/utilities.js'
import HorizontalBarChart from '@/components/charts/HorizontalBarChart'
import LineChart from '@/components/charts/LineChart'
import RadarChart from '@/components/charts/RadarChart'
import DoughnutChart from '@/components/charts/DoughnutChart'
import PolarAreaChart from '@/components/charts/PolarAreaChart'
import PieChart from '@/components/charts/PieChart'
import BubbleChart from '@/components/charts/BubbleChart'
import StateChoropleth from '@/components/charts/StateChoropleth'
export default {
    name: 'Reporte',
    components: {
        HorizontalBarChart,
        LineChart,
        RadarChart,
        DoughnutChart,
        PolarAreaChart,
        PieChart,
        BubbleChart,
        StateChoropleth,
    },
    data() {
        return {
            open: false,
            choroplethRed: [255, 0, 0],
            choroplethGreen: [0, 255, 0],
            choroplethRandom: [
                Math.round(Math.random() * 255),
                Math.round(Math.random() * 255),
                Math.round(Math.random() * 255),
            ],
        }
    },
    props: {
        states: { type: Array, default: () => [{ id: 0, estado: 'NULL' }] },
        generalInfoDataSet: {
            type: Array,
            default: () =>
                new Array(32)
                    .fill(0)
                    .map(() =>
                        new Array(10).fill(0).map(() => Math.random() * 6000)
                    ),
        },
        capacitacionSaludMentalPorEstado: {
            type: Array,
            default: () =>
                new Array(32)
                    .fill(1)
                    .map(() => Math.round(Math.random() * 200)),
        },
        capacitacionEnSuicidioPorEstado: {
            type: Array,
            default: () =>
                new Array(32)
                    .fill(1)
                    .map(() => Math.round(Math.random() * 200)),
        },
        noBrigadistasDeApoyoEnSaludMental: {
            type: Array,
            default: () =>
                new Array(32)
                    .fill(1)
                    .map(() => Math.round(Math.random() * 200)),
        },
        noBrigadasDeApoyoEnSaludMental: {
            type: Array,
            default: () =>
                new Array(32)
                    .fill(1)
                    .map(() => Math.round(Math.random() * 200)),
        },
        noTerapeutasDeApoyoEmocional: {
            type: Array,
            default: () =>
                new Array(32)
                    .fill(1)
                    .map(() => Math.round(Math.random() * 200)),
        },
        noConsultasPrimeraVez: {
            type: Array,
            default: () =>
                new Array(32)
                    .fill(1)
                    .map(() => Math.round(Math.random() * 200)),
        },
        noConsultasSubsecuentes: {
            type: Array,
            default: () =>
                new Array(32)
                    .fill(1)
                    .map(() => Math.round(Math.random() * 200)),
        },
    },
    computed: {
        /* Provicional para poder mostrar los estados */
        generalInfoWithStates() {
            let aux = this.generalInfoDataSet

            for (
                let index = 0;
                index < this.generalInfoDataSet.length;
                index++
            ) {
                if (this.states[index] != undefined) {
                    aux[index][0] = this.states[index]['estado']
                }
            }
            return aux
        },
        totalCapacitacionSaludMental() {
            let formatedNumber = this.capacitacionSaludMentalPorEstado.reduce(
                (a, b) => a + b
            )

            return formatNumberWithCommas(formatedNumber)
        },
        totalCapacitacionSuicidio() {
            let formatedNumber = this.capacitacionEnSuicidioPorEstado.reduce(
                (a, b) => a + b
            )

            return formatNumberWithCommas(formatedNumber)
        },
        avanceBrigadasGruposApoyoSaludMental() {
            return {
                labels: this.states.map((state) => state.estado),
                datasets: [
                    {
                        label: 'No. de terapeutas de grupos de apoyo emocional',
                        backgroundColor: '#085809',
                        data: this.states.map(() =>
                            Math.round(Math.random() * 250)
                        ),
                    },
                    {
                        label: 'No. Brigadas de apoyo en salud mental',
                        backgroundColor: '#003399',
                        data: this.states.map(() =>
                            Math.round(Math.random() * 250)
                        ),
                    },
                    {
                        label: 'No. brigadistas de apoyo en salud mental',
                        backgroundColor: '#f85809',
                        data: this.states.map(() =>
                            Math.round(Math.random() * 250)
                        ),
                    },
                ],
            }
            /* return {
                labels: this.states.map((state) => state.estado),
                datasets: [
                    {
                        label: 'No. de terapeutas de grupos de apoyo emocional',
                        backgroundColor: '#085809',
                        data: this.noBrigadistasDeApoyoEnSaludMental,
                    },
                    {
                        label: 'No. Brigadas de apoyo en salud mental',
                        backgroundColor: '#003399',
                        data: this.noBrigadasDeApoyoEnSaludMental,
                    },
                    {
                        label: 'No. brigadistas de apoyo en salud mental',
                        backgroundColor: '#f85809',
                        data: this.noTerapeutasDeApoyoEmocional,
                    },
                ],
            } */
        },
        consultasDataCollection() {
            return {
                labels: this.states.map((state) => state.estado),
                datasets: [
                    {
                        label: 'Consultas de 1ra vez',
                        backgroundColor: '#085809',
                        borderColor: '#085809',
                        data: this.states.map(() =>
                            Math.round(Math.random() * 500)
                        ),
                    },
                    {
                        label: 'Consultas subsecuentes',
                        backgroundColor: '#1848ff',
                        borderColor: '#1848ff',
                        data: this.states.map(() =>
                            Math.round(Math.random() * 500)
                        ),
                    },
                ],
            }
            /* return {
                labels: this.states.map((state) => state.estado),
                datasets: [
                    {
                        label: 'Consultas de 1ra vez',
                        backgroundColor: '#085809',
                        data: this.noConsultasPrimeraVez,
                    },
                    {
                        label: 'Consultas subsecuentes',
                        backgroundColor: '#1848ff',
                        data: this.noConsultasSubsecuentes,
                    },
                ],
            } */
        },
        randomDataCollection() {
            let color1 = `rgb(${Math.round(Math.random() * 255)},${Math.round(
                Math.random() * 255
            )},${Math.round(Math.random() * 255)})`

            let bg1 = `rgba(${Math.round(Math.random() * 255)},${Math.round(
                Math.random() * 255
            )},${Math.round(Math.random() * 255)}, 0.3)`

            let color2 = `rgb(${Math.round(Math.random() * 255)},${Math.round(
                Math.random() * 255
            )},${Math.round(Math.random() * 255)})`

            let bg2 = `rgba(${Math.round(Math.random() * 255)},${Math.round(
                Math.random() * 255
            )},${Math.round(Math.random() * 255)}, 0.3)`

            return {
                labels: this.states.map((state) => state.estado),
                datasets: [
                    {
                        label: 'Consultas de 1ra vez',
                        backgroundColor: bg1,
                        borderColor: color1,
                        data: this.states.map(() =>
                            Math.round(Math.random() * 600)
                        ),
                    },
                    {
                        label: 'Consultas subsecuentes',
                        backgroundColor: bg2,
                        borderColor: color2,
                        data: this.states.map(() =>
                            Math.round(Math.random() * 500)
                        ),
                    },
                ],
            }
            /* return {
                labels: this.states.map((state) => state.estado),
                datasets: [
                    {
                        label: 'Consultas de 1ra vez',
                        backgroundColor: '#085809',
                        data: this.noConsultasPrimeraVez,
                    },
                    {
                        label: 'Consultas subsecuentes',
                        backgroundColor: '#1848ff',
                        data: this.noConsultasSubsecuentes,
                    },
                ],
            } */
        },
        randomDoughnutDataCollection() {
            return {
                labels: this.states.map((state) => state.estado),
                datasets: [
                    {
                        label: 'Consultas de 1ra vez',
                        backgroundColor: this.states.map(
                            () =>
                                `rgb(${Math.round(
                                    Math.random() * 255
                                )},${Math.round(
                                    Math.random() * 255
                                )},${Math.round(Math.random() * 255)})`
                        ),
                        data: this.states.map(() =>
                            Math.round(Math.random() * 600)
                        ),
                    },
                ],
            }
        },
        randomBubbleDataCollection() {
            return {
                labels: this.states.map((state) => state.estado),
                datasets: [
                    {
                        label: 'Consultas de 1ra vez',
                        backgroundColor: this.states.map(
                            () =>
                                `rgb(${Math.round(
                                    Math.random() * 255
                                )},${Math.round(
                                    Math.random() * 255
                                )},${Math.round(Math.random() * 255)})`
                        ),
                        data: this.states.map(() => {
                            return {
                                x: Math.round(Math.random() * 600),
                                y: Math.round(Math.random() * 600),
                                r: Math.round(Math.random() * 600),
                            }
                        }),
                    },
                ],
            }
        },
    },
    methods: {
        toggleOpen() {
            this.open = !this.open
        },
    },
}
</script>

<style scoped>
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
    right: 1060px;
}
.choroplethInnerInfo {
    top: 10%;
    right: 10%;
    width: 30%;
    height: 45%;
}
</style>
