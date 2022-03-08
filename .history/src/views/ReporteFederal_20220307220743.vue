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
                        href="#acciones_comunitarias"
                        @click="toggleOpen"
                        >Acciones comunitairas</a
                    >
                    <a
                        class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        href="#capacitacion_salud_mental"
                        @click="toggleOpen"
                        >Capacitación en salud mental y adicciones</a
                    >
                    <a
                        class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        href="#suicidio"
                        @click="toggleOpen"
                        >Capacitación en Suicidio</a
                    >
                    <a
                        class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        href="#acciones_prevencion_salud_mental"
                        @click="toggleOpen"
                        >Acciones de prevención en salud mental</a
                    >
                    <a
                        class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        href="#consultas"
                        @click="toggleOpen"
                        >Consultas</a
                    >
                    <a
                        class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        href="#resumen"
                        @click="toggleOpen"
                        >Resumen</a
                    >
                </div>
            </div>
        </aside>

        <section
            id="acciones_comunitarias"
            class="flex flex-col items-center pt-4"
        >
            <p
                class="block pt-4 py-2 mt-6 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                NÚMERO DE PERSONAS ALCANZADAS POR ESTADO EN ACCIONES
                COMUNITARIAS
            </p>

            <div
                class="relative overflow-hidden rounded-md border border-gray-400 w-11/12 choroplethContainer-lg"
            >
                <div class="choropleth">
                    <state-choropleth :dataset="accionesNacionales" />
                </div>
                <div class="absolute choroplethInnerInfo-lg">
                    <span
                        class="block text-center text-2xl pt-6 font-bold text-red-800"
                        >{{ totalNacionalAccionesComunitarias }}</span
                    >
                    <p class="block text-lg font-bold text-center">
                        PERSONAS ALCANZADAS EN
                    </p>
                    <p class="block text-lg font-bold text-center">
                        ACCIONES DE PREVENCIÓN EN SALUD
                    </p>
                    <span
                        class="block text-center text-2xl pt-6 font-bold text-red-800"
                        >{{ totalNacionalAccionesPrevencionSalud }}</span
                    >
                    <p class="block text-lg font-bold text-center">
                        PERSONAS ALCANZADAS EN
                    </p>
                    <p class="block text-lg font-bold text-center">
                        ACCIONES COMUNITARIAS
                    </p>
                    <span
                        class="block text-center text-2xl mt-4 pt-2 font-bold text-red-800 border-t-red-600"
                        >TOTAL
                    </span>
                    <span
                        class="block text-center text-2xl pt-2 font-bold text-red-800"
                        >{{ totalAccionesNacionales }}
                    </span>
                    <p class="block text-lg font-bold text-center text-red-800">
                        PERSONAS ALCANZADAS
                    </p>
                </div>
            </div>
            <div class="flex justify-around w-full">
                <div class="flex flex-grow-0">
                    <table class="inline-block mt-2 mr-6">
                        <tr class="">
                            <th class="w-c1 text-base border px-1 bg-red-300">
                                Estados
                            </th>
                            <th class="w-c2 text-base border px-1 bg-red-300">
                                Número de actividades
                            </th>
                        </tr>
                        <tr
                            v-for="(
                                item, index
                            ) in actividadesRealizadasPorEstadoAccionesPrevencionSalud"
                            :key="index"
                        >
                            <th v-if="index < 16" class="text-base border px-2">
                                {{ item.estado }}
                            </th>
                            <th v-if="index < 16" class="text-base border px-2">
                                {{ item.value }}
                            </th>
                        </tr>
                    </table>
                    <table class="inline-block mt-2">
                        <tr class="">
                            <th class="w-c1 text-base border px-1 bg-red-300">
                                Estados
                            </th>
                            <th class="w-c2 text-base border px-1 bg-red-300">
                                Número de actividades
                            </th>
                        </tr>
                        <tr
                            v-for="(
                                item, index
                            ) in actividadesRealizadasPorEstadoAccionesPrevencionSalud"
                            :key="index"
                        >
                            <th
                                v-if="index >= 16"
                                class="text-base border px-2"
                            >
                                {{ item.estado }}
                            </th>
                            <th
                                v-if="index >= 16"
                                class="text-base border px-2"
                            >
                                {{ item.value }}
                            </th>
                        </tr>
                    </table>
                </div>
                <div class="w-1/3 h-96 choroplethInnerInfo">
                    <span
                        class="block text-center text-2xl mt-4 pt-2 font-bold text-red-800 border-t-red-600"
                        >TOTAL
                    </span>
                    <p class="block text-lg font-bold text-center">
                        NÚMERO DE ACTIVIDADES
                    </p>
                    <span
                        class="block text-center text-2xl pt-2 font-bold text-red-800"
                        >{{ totalNacionalActividadesAccionesComunitarias }}
                    </span>
                    <p
                        class="block text-lg font-bold text-center text-red-800 border-b-red-600"
                    >
                        ACCIONES COMUNITARIAS
                    </p>
                </div>
            </div>
        </section>

        <section
            id="capacitacion_salud_mental"
            class="flex flex-col pt-24 items-center"
        >
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                NÚMERO DE PERSONAS CAPACITADAS EN MATERIA DE SALUD MENTAL Y
                ADICCIONES A NIVEL NACIONAL
            </p>

            <div
                class="relative overflow-hidden rounded-md border border-gray-400 w-11/12 choroplethContainer-lg"
            >
                <div class="choropleth">
                    <state-choropleth :dataset="capacitacionSaludMental" />
                </div>
                <div class="absolute choroplethInnerInfo-lg">
                    <span
                        class="block text-center text-2xl mt-4 pt-2 font-bold text-red-800 border-t-red-600"
                        >TOTAL
                    </span>
                    <span
                        class="block text-center text-2xl pt-2 font-bold text-red-800"
                        >{{ totalpersonasCapacitadasSaludMental }}
                    </span>
                    <p class="block text-lg font-bold text-center text-red-800">
                        PERSONAS CAPACITADAS
                    </p>
                </div>
            </div>
            <div class="flex justify-around w-full">
                <div class="flex flex-grow-0">
                    <table class="inline-block mt-2 mr-6">
                        <tr class="">
                            <th class="w-c1 text-base border px-1 bg-red-300">
                                Estados
                            </th>
                            <th class="w-c2 text-base border px-1 bg-red-300">
                                Número de capacitaciones
                            </th>
                        </tr>
                        <tr
                            v-for="(
                                item, index
                            ) in capacitacionesRealizadasSaludMentalPorEstado"
                            :key="index"
                        >
                            <th v-if="index < 16" class="text-base border px-2">
                                {{ item.estado }}
                            </th>
                            <th v-if="index < 16" class="text-base border px-2">
                                {{ item.value }}
                            </th>
                        </tr>
                    </table>
                    <table class="inline-block mt-2">
                        <tr class="">
                            <th class="w-c1 text-base border px-1 bg-red-300">
                                Estados
                            </th>
                            <th class="w-c2 text-base border px-1 bg-red-300">
                                Número de capacitaciones
                            </th>
                        </tr>
                        <tr
                            v-for="(
                                item, index
                            ) in capacitacionesRealizadasSaludMentalPorEstado"
                            :key="index"
                        >
                            <th
                                v-if="index >= 16"
                                class="text-base border px-2"
                            >
                                {{ item.estado }}
                            </th>
                            <th
                                v-if="index >= 16"
                                class="text-base border px-2"
                            >
                                {{ item.value }}
                            </th>
                        </tr>
                    </table>
                </div>
                <div class="w-1/3 h-96 choroplethInnerInfo">
                    <span
                        class="block text-center text-2xl mt-4 pt-2 font-bold text-red-800 border-t-red-600"
                        >TOTAL
                    </span>
                    <span
                        class="block text-center text-2xl pt-2 font-bold text-red-800"
                        >{{ totalNacionalCapacitacionesRealizadasSaludMental }}
                    </span>
                    <p
                        class="block text-lg font-bold text-center text-red-800 border-b-red-600"
                    >
                        CAPACITACIONES REALIZADAS
                    </p>
                </div>
            </div>
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
                        :dataset="personalCapacitadoEnGeneralPorEstado"
                    />
                </div>
                <div class="absolute choroplethInnerInfo">
                    <span
                        class="block text-center text-2xl pt-6 font-bold text-red-800"
                        >{{ totalPersonal1erNivelCapacitado }}</span
                    >
                    <p class="block text-lg font-bold text-center">
                        Recursos Humanos capacitados del 1er nivel de atención
                    </p>
                </div>
            </div>
        </section>

        <section id="suicidio" class="flex flex-col items-center pt-4">
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                CAPACITACION EN SUICIDIO A PERSONAL DE SALUD MENTAL.
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
                        :dataset="personasQueCursaronDiplomadoSuicidioPorEstado"
                    />
                </div>
                <div class="absolute choroplethInnerInfo">
                    <span
                        class="block text-center text-2xl pt-6 font-bold text-red-800"
                        >{{ totalNacionalPersonasQueCursaronDiplomadoSuicidio }}
                    </span>
                    <p class="block text-lg font-bold text-center">
                        Recursos Humanos capacitados
                    </p>
                </div>
            </div>
        </section>

        <section
            id="acciones_prevencion_salud_mental"
            class="flex flex-col pt-24 items-center"
        >
            <p
                class="block pt-4 py-2 mt-2 text-xl text-center font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                PERSONAS ALCANZADAS EN ACCIONES DE PREVENCIÓN EN SALUD MENTAL Y
                ADICCIONES A NIVEL NACIONAL
            </p>

            <div
                class="relative overflow-hidden rounded-md border border-gray-400 w-11/12 choroplethContainer-lg"
            >
                <div class="choropleth">
                    <state-choropleth
                        :dataset="personasAlcanzadasAccionesPrevencionSalud"
                    />
                </div>
                <div class="absolute choroplethInnerInfo-lg">
                    <p class="block text-lg font-bold text-center">
                        ACCIONES DE PREVENCIÓN A NIVEL NACIONAL
                    </p>
                    <span
                        class="block text-center text-2xl mt-4 pt-2 font-bold text-red-800 border-t-red-600"
                        >TOTAL
                    </span>
                    <span
                        class="block text-center text-2xl pt-2 font-bold text-red-800"
                        >{{
                            totalNacionalPersonasAlcanzadasAccionesPrevencionSalud
                        }}
                    </span>
                    <p class="block text-lg font-bold text-center text-red-800">
                        PERSONAS ALCANZADAS
                    </p>
                </div>
            </div>
            <div class="flex justify-around w-full">
                <div class="flex flex-grow-0">
                    <table class="inline-block mt-2 mr-6">
                        <tr class="">
                            <th class="w-20 text-base border px-1 bg-red-300">
                                Estados
                            </th>
                            <th class="text-base border px-1 bg-red-300">
                                Número de acciones
                            </th>
                        </tr>
                        <tr
                            v-for="(
                                item, index
                            ) in actividadesRealizadasPorEstadoAccionesPrevencionSalud"
                            :key="index"
                        >
                            <th
                                v-if="index < 16"
                                class="w-c1 text-base border px-2"
                            >
                                {{ item.estado }}
                            </th>
                            <th
                                v-if="index < 16"
                                class="w-c2 text-base border px-2"
                            >
                                {{ item.value }}
                            </th>
                        </tr>
                    </table>
                    <table class="inline-block mt-2">
                        <tr class="">
                            <th class="w-c1 text-base border px-1 bg-red-300">
                                Estados
                            </th>
                            <th class="w-c2 text-base border px-1 bg-red-300">
                                Número de acciones
                            </th>
                        </tr>
                        <tr
                            v-for="(
                                item, index
                            ) in actividadesRealizadasPorEstadoAccionesPrevencionSalud"
                            :key="index"
                        >
                            <th
                                v-if="index >= 16"
                                class="text-base border px-2"
                            >
                                {{ item.estado }}
                            </th>
                            <th
                                v-if="index >= 16"
                                class="text-base border px-2"
                            >
                                {{ item.value }}
                            </th>
                        </tr>
                    </table>
                </div>
                <div class="w-1/3 h-96 choroplethInnerInfo">
                    <span
                        class="block mt-32 text-center text-2xl pt-2 font-bold text-red-800 border-t-red-600"
                        >{{ totalNacionalAccionesPrevencionSalud }}
                    </span>
                    <p class="block text-lg font-bold text-center text-red-800">
                        ACCIONES DE PREVENCIÓN
                    </p>
                </div>
            </div>
        </section>
        <section id="consultas" class="flex flex-col pt-24 items-center">
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                DISTRIBUCIÓN POR DIAGNÓSTICO (CIJ, CAPAS, UNIVERSIDADES)
            </p>
            <div class="items-center w-auto consultasBarChartContainer">
                <bar-chart :chart-data="consultasDataCollection" />
            </div>
            <p
                class="block pt-0 py-2 mt-0 text-2xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                <span>Consultas de Primera Vez: </span>
                <span>{{ totalNoConsultasPrimeraVez }}</span>
            </p>
            <p
                class="block pt-4 py-2 mt-2 text-2xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                <span>Consultas subsecuentes: </span>
                <span>{{ totalNoConsultasSubsecuentes }}</span>
            </p>
        </section>

        <section id="resumen" class="flex flex-col pt-24 items-center">
            <div class="flex justify-around w-4/5">
                <div
                    class="bg-green-500 w-1/5 rounded-xl py-4 px-2 text-center font-bold text-white text-2xl"
                >
                    <div class="h-32"></div>
                    <span>{{ totalReunionesDeTrabajo }}</span>
                    <p>REUNIONES DE TRABAJO</p>
                </div>
                <div
                    class="bg-green-500 w-1/5 rounded-xl py-4 px-2 text-center font-bold text-white text-2xl"
                >
                    <div class="h-32"></div>
                    <span>{{ totalConveniosDeColaboracion }}</span>
                    <p>CONVENIOS DE COLABORACION</p>
                </div>
                <div
                    class="bg-green-500 w-1/5 rounded-xl py-4 px-2 text-center font-bold text-white text-2xl"
                >
                    <div class="h-32"></div>
                    <span>{{ totalBeneficiosOtorgados }}</span>
                    <p>BENEFICIOS OTORGADOS</p>
                </div>
                <div
                    class="bg-green-500 w-1/5 rounded-xl py-4 px-2 text-center font-bold text-white text-2xl"
                >
                    <div class="h-32"></div>
                    <span>{{ totalPoliticasPublicas }}</span>
                    <p>POLITICAS PUBLICAS</p>
                </div>
            </div>
        </section>
        <section id="" class="flex flex-col pt-24 items-center">
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                CAPACITACIONES POR ESTADO
            </p>

            <div class="w-2/3 h-30">
                <line-chart :chart-data="randomDataCollection" />
            </div>
        </section>

        <section id="" class="flex flex-col pt-24 items-center">
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                REFERENCIAS POR INTENTO DE SUICIDIO
            </p>

            <div class="w-2/3 h-30">
                <radar-chart :chart-data="randomDataCollection" />
            </div>
        </section>

        <section id="" class="flex flex-col pt-24 items-center">
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                CONSULTAS DE PRIMERA VEZ
            </p>

            <div class="w-2/3 h-30">
                <doughnut-chart :chart-data="randomDoughnutDataCollection" />
            </div>
        </section>

        <section id="" class="flex flex-col pt-24 items-center">
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                CONSULTAS SUBSECUENTES
            </p>

            <div class="w-2/3 h-30">
                <doughnut-chart :chart-data="randomDoughnutDataCollection" />
            </div>
        </section>

        <section id="" class="flex flex-col pt-24 items-center">
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                ACCIONES DE PREVENCIÓN POR MES
            </p>

            <div class="w-2/3 h-30">
                <polar-area-chart :chart-data="randomDoughnutDataCollection" />
            </div>
        </section>

        <section id="" class="flex flex-col pt-24 items-center">
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                CAPACITACIÓN POR ESTADO POR MES
            </p>

            <div class="w-2/3 h-30">
                <pie-chart :chart-data="randomDoughnutDataCollection" />
            </div>
        </section>

        <section id="" class="flex flex-col pt-24 items-center">
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                ACCIONES COMUNITARIAS
            </p>
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                PERSONAS ALCANZADAS VS ACTIVIDADES REALIZADAS POR ESTADO
            </p>

            <div class="w-2/3 h-30">
                <bubble-chart :chart-data="randomBubbleDataCollection" />
            </div>
        </section>

        <section id="" class="flex flex-col pt-24 items-center">
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                ACCIONES COMUNITARIAS
            </p>
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                PERSONAS ALCANZADAS VS ACTIVIDADES REALIZADAS
            </p>

            <div class="w-2/3 h-30">
                <scatter-chart :chart-data="randomScatterDataCollection" />
            </div>
        </section>

        <section id="consultas" class="flex flex-col pt-24 items-center">
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                CONSULTAS MENSUALES OTORGADAS DE 1ª Vez y Subsecuentes
            </p>

            <div class="w-2/3 h-30">
                <horizontal-bar-chart :chart-data="randomDataCollection" />
            </div>
        </section>
    </div>
</template>

<script>
import BarChart from '@/components/charts/BarChart'
import { formatNumberWithCommas } from '@/utilities.js'
import HorizontalBarChart from '@/components/charts/HorizontalBarChart'
import LineChart from '@/components/charts/LineChart'
import RadarChart from '@/components/charts/RadarChart'
import DoughnutChart from '@/components/charts/DoughnutChart'
import PolarAreaChart from '@/components/charts/PolarAreaChart'
import PieChart from '@/components/charts/PieChart'
import BubbleChart from '@/components/charts/BubbleChart'
import ScatterChart from '@/components/charts/ScatterChart'
import StateChoropleth from '@/components/charts/StateChoropleth'
export default {
    name: 'Reporte',
    components: {
        BarChart,
        HorizontalBarChart,
        LineChart,
        RadarChart,
        DoughnutChart,
        PolarAreaChart,
        PieChart,
        BubbleChart,
        ScatterChart,
        StateChoropleth,
    },
    data() {
        return {
            brigadasGruposDataCollection: {
                labels: [
                    'DEMENCIA',
                    'PSICOTROPICOS',
                    'ABUSO DE SUSTANCIAS',
                    'CONTROL DE IMPULSOS',
                    'ALCOHOL',
                    'OPIACEOS',
                    'CANNABINOIDES',
                    'SEDANTES O HIPNOTICOS',
                    'COCAINA',
                    'CAFEINA',
                    'ALUCINOGENOS',
                    'TABACO',
                    'DISOLVENTES',
                    'MULTIPLES DROGAS',
                    'ESQUIZOFRENIA',
                    'PSICOSIS DELIRANTE',
                    'PSICOSIS AGUDA',
                    'AFECTIVO BIPOLAR',
                    'DEPRESIÓN',
                    'DISTIMIA',
                    'TRASTORNOS DEL HUMOR',
                    'FOBIA',
                    'ANSIEDAD',
                    'OBSESIVO COMPULSIVOS',
                    'ESTRÉS',
                    'SOMATIZACION',
                    'NEURASTENIA',
                    'ANOREXIA',
                    'INSOMNIO',
                    'FALTA DE DESEO SEXUAL',
                    'TRASTORNO DE LA PERSONALIDAD',
                    'RETRASO MENTAL',
                    'LENGUAJE',
                    'ACTIVIDAD Y ATENCION',
                    'NERVIOSISMO',
                    'NEGLIGENCIA ABANDONO',
                    'FUEGO NO CONTROLADO',
                    'REHABILITACIÓN POR CONSUMO',
                    'CICLO DE VIDA',
                    'ORIENTACION SEXUAL',
                    'TUMOR',
                ],
                datasets: [
                    {
                        label: 'No. Brigadas de apoyo en salud mental',
                        backgroundColor: '#085809',
                        data: new Array(41)
                            .fill(0)
                            .map(() => Math.random() * 11000),
                    },
                ],
            },
            open: false,
        }
    },
    props: {
        states: {
            type: Array,
            default: () => [{ id: 0, estado: 'NULL' }],
        },
        personasAlcanzadasSuicidio: {
            type: Array,
            default: () => new Array(32).fill(0),
        },
        personasAlcanzadasAtencionSalud: {
            type: Array,
            default: () => new Array(32).fill(0),
        },
        personasAlcanzadasAccionesPrevencionSalud: {
            type: Array,
            default: () => new Array(32).fill(0),
        },
        personasAlcanzadasAccionesComunitarias: {
            type: Array,
            default: () => new Array(32).fill(0),
        },
        actividadesRealizadasAccionesPrevencionSalud: {
            type: Array,
            default: () => new Array(32).fill(0),
        },
        acrividadesRealizadasAccionesComunitarias: {
            type: Array,
            default: () => new Array(32).fill(0),
        },
        capacitacionSaludMental: {
            type: Array,
            default: () => new Array(32).fill(0),
        },
        capacitacionesRealizadasSaludMental: {
            type: Array,
            default: () => new Array(32).fill(0),
        },
        capacitacionEnSuicidio: {
            type: Array,
            default: () => new Array(32).fill(0),
        },
        valoresPorDiagnostico: {
            type: Object,
            default: () => {},
        },
        reunionesDeTrabajo: {
            type: Array,
            default: () => new Array(32).fill(0),
        },
        conveniosDeColaboracion: {
            type: Array,
            default: () => new Array(32).map(() => Math.random()),
        },
        beneficiosOtorgados: {
            type: Array,
            default: () => new Array(32).map(() => Math.random()),
        },
        politicasPublicas: {
            type: Array,
            default: () => new Array(32).map(() => Math.random()),
        },
        noConsultasPrimeraVez: {
            type: Array,
            default: () => new Array(32).map(() => Math.random()),
        },
        noConsultasSubsecuentes: {
            type: Array,
            default: () => new Array(32).map(() => Math.random()),
        },
    },
    computed: {
        totalNacionalAccionesComunitarias() {
            return this.calculateTotalFromArray(
                this.personasAlcanzadasAccionesComunitarias
            )
        },
        totalNacionalAccionesPrevencionSalud() {
            return this.calculateTotalFromArray(
                this.personasAlcanzadasAccionesPrevencionSalud
            )
        },
        accionesNacionales() {
            return this.addArrays(
                this.personasAlcanzadasAtencionSalud,
                this.personasAlcanzadasAccionesComunitarias
            )
        },
        totalAccionesNacionales() {
            return (
                this.totalNacionalAccionesComunitarias +
                this.totalNacionalAccionesPrevencionSalud
            )
        },
        actividadesRealizadasPorEstadoAccionesPrevencionSalud() {
            return this.mapToStateValueDuoList(
                this.actividadesRealizadasAccionesPrevencionSalud
            )
        },
        actividadesRealizadasPorEstadoAccionesComunitarias() {
            return this.mapToStateValueDuoList(
                this.acrividadesRealizadasAccionesComunitarias
            )
        },

        totalNacionalActividadesAccionesPrevencionSalud() {
            return this.calculateTotalFromArray(
                this.actividadesRealizadasAccionesPrevencionSalud
            )
        },
        totalNacionalActividadesAccionesComunitarias() {
            return this.calculateTotalFromArray(
                this.acrividadesRealizadasAccionesComunitarias
            )
        },
        totalpersonasCapacitadasSaludMental() {
            return this.calculateTotalFromArray(this.capacitacionSaludMental)
        },
        personasCapacitadasSaludMentalPorEstado() {
            return this.mapToStateValueDuoList(this.capacitacionSaludMental)
        },
        capacitacionesRealizadasSaludMentalPorEstado() {
            return this.mapToStateValueDuoList(
                this.capacitacionesRealizadasSaludMental
            )
        },
        totalNacionalCapacitacionesRealizadasSaludMental() {
            return this.calculateTotalFromArray(
                this.capacitacionesRealizadasSaludMental
            )
        },
        personalCapacitadoEnGeneralPorEstado() {
            return this.addArrays(
                this.capacitacionSaludMental,
                this.capacitacionEnSuicidio
            )
        },
        totalPersonal1erNivelCapacitado() {
            return (
                this.totalNacionalPersonasQueCursaronDiplomadoSuicidio +
                this.totalNacionalCapacitacionesRealizadasSaludMental
            )
        },
        personasQueCursaronDiplomadoSuicidioPorEstado() {
            return this.mapToStateValueDuoList(this.capacitacionEnSuicidio)
        },
        totalNacionalPersonasQueCursaronDiplomadoSuicidio() {
            return this.calculateTotalFromArray(this.capacitacionEnSuicidio)
        },
        totalNacionalPersonasAlcanzadasAccionesPrevencionSalud() {
            return this.calculateTotalFromArray(
                this.personasAlcanzadasAccionesPrevencionSalud
            )
        },
        consultasDataCollection() {
            let dataValues = this.valoresParaLaDistribucionPorDiagnostico
            dataValues.map(()=>Math.round(Math.random() * 1500))
            return {
                labels: [
                    'DEPRESION',
                    'INTENTO DE SUICIDIO',
                    'ANSIEDAD',
                    'CONSUMO DE SUSTANCIAS',
                    'DEMENCIA',
                    'EPILEPSIA',
                    'PSICOSIS',
                ],
                datasets: [
                    {
                        label: 'CIJ, CAPAS, UNIVERSIDADES',
                        backgroundColor: '#f85809',
                        data: dataValues,
                    },
                ],
            }
        },
        valoresParaLaDistribucionPorDiagnostico() {
            let values = []

            for (let dignostico in this.valoresPorDiagnostico) {
                values.push(
                    this.calculateTotalFromArray(
                        this.valoresPorDiagnostico[dignostico]
                    )
                )
            }
            return values
        },
        totalReunionesDeTrabajo() {
            return this.calculateTotalFromArray(this.reunionesDeTrabajo)
        },
        totalConveniosDeColaboracion() {
            return this.calculateTotalFromArray(this.conveniosDeColaboracion)
        },
        totalBeneficiosOtorgados() {
            return this.calculateTotalFromArray(this.beneficiosOtorgados)
        },
        totalPoliticasPublicas() {
            return this.calculateTotalFromArray(this.politicasPublicas)
        },
        totalNoConsultasPrimeraVez() {
            return this.calculateTotalFromArray(this.noConsultasPrimeraVez)
        },
        totalNoConsultasSubsecuentes() {
            return this.calculateTotalFromArray(this.noConsultasSubsecuentes)
        },
        consultasPorPdecimiento() {
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

        ///////////////
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

            let labels = [
                'Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo',
                'Junio',
                'Julio',
                'Agosto',
                'Septiembre',
                'Octubre',
                'Noviembre',
                'Diciembre',
            ]

            return {
                labels: labels,
                datasets: [
                    {
                        label: 'Consultas de 1ra vez',
                        backgroundColor: bg1,
                        borderColor: color1,
                        data: labels.map(() => Math.round(Math.random() * 600)),
                    },
                    {
                        label: 'Consultas subsecuentes',
                        backgroundColor: bg2,
                        borderColor: color2,
                        data: labels.map(() => Math.round(Math.random() * 500)),
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
            let labels = [
                'Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo',
                'Junio',
                'Julio',
                'Agosto',
                'Septiembre',
                'Octubre',
                'Noviembre',
                'Diciembre',
            ]
            return {
                labels: labels,
                datasets: [
                    {
                        label: 'Consultas de 1ra vez',
                        backgroundColor: labels.map(
                            () =>
                                `rgb(${Math.round(
                                    Math.random() * 255
                                )},${Math.round(
                                    Math.random() * 255
                                )},${Math.round(Math.random() * 255)})`
                        ),
                        data: labels.map(() => Math.round(Math.random() * 600)),
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
                                r: Math.round(Math.random() * 20),
                            }
                        }),
                    },
                ],
            }
        },
        randomScatterDataCollection() {
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
                                x: Math.round(Math.random() * 800),
                                y: Math.round(Math.random() * 800),
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
        calculateTotalFromArray(numberArray) {
            if (numberArray[0] == undefined) {
                numberArray.fill(0)
            }
            let total = numberArray.reduce((a, b) => a + b)
            return formatNumberWithCommas(total)
        },
        mapToStateValueDuoList(numberArray) {
            if (numberArray[0] == undefined) {
                numberArray.fill(0)
            }
            return numberArray.map((value, index) => {
                return { estado: this.states[index].estado, value }
            })
        },
        addArrays(numberArray1, numberArray2) {
            let aux = new Array(32).fill(0)
            for (let index = 0; index < numberArray1.length; index++) {
                aux[index] = numberArray1[index] + numberArray2[index]
            }

            return aux
        },
    },
}
</script>

<style scoped>
.border-t-red-600 {
    border-top: 3px solid #bb0000;
}
.border-b-red-600 {
    border-bottom: 3px solid #bb0000;
}
.choroplethContainer {
    height: 600px;
    background: none;
}
.choroplethContainer-lg {
    height: 700px;
    background: none;
}
.choropleth {
    position: relative;
    display: inline-block;
    width: 6800px;
    height: 6800px;
    top: -2550px;
    right: 1060px;
}
.choroplethInnerInfo {
    top: 25%;
    right: 10%;
    width: 30%;
    height: 45%;
}
.choroplethInnerInfo-lg {
    top: 6%;
    right: 10%;
    width: 30%;
    height: 45%;
}

.w-c1 {
    width: 12rem;
}
.w-c2 {
    width: 8rem;
}
.consultasBarChartContainer {
    height: 35rem;
}
</style>
