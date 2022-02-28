<template>
    <div class="py-4">
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
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                NÚMERO DE PERSONAS ALCANZADAS POR ESTADO EN ACCIONES
                COMUNITARIAS A NIVEL INSTITUCIONAL
            </p>
            <p
                class="block pb-4 py-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                2° TRIMESTRE 2021 ABRIL, MAYO, JULIO
            </p>

            <div
                class="relative overflow-hidden rounded-md border border-gray-400 w-11/12 choroplethContainer-lg"
            >
                <div class="choropleth">
                    <state-choropleth />
                </div>
                <div class="absolute choroplethInnerInfo-lg">
                    <span
                        class="block text-center text-2xl pt-6 font-bold text-red-800"
                        >290,210</span
                    >
                    <p class="block text-lg font-bold text-center">
                        PERSONAS ALCANZADAS EN LOS ESTADOS
                    </p>
                    <span
                        class="block text-center text-2xl pt-6 font-bold text-red-800"
                        >14,705
                    </span>
                    <p class="block text-lg font-bold text-center">
                        PERSONAS ALCANZADAS EN ACCIONES NACIONALES
                    </p>
                    <span
                        class="block text-center text-2xl mt-4 pt-2 font-bold text-red-800 border-t-red-600"
                        >TOTAL
                    </span>
                    <span
                        class="block text-center text-2xl pt-2 font-bold text-red-800"
                        >304,915
                    </span>
                    <p class="block text-lg font-bold text-center text-red-800">
                        PERSONAS ALCANZADAS
                    </p>
                </div>
            </div>
            <div class="flex justify-around w-full">
                <div class="flex-grow-0">
                    <table class="inline-block mt-2 mr-6">
                        <tr class="">
                            <th class="text-base border px-1 bg-red-300">
                                Estados
                            </th>
                            <th class="text-base border px-1 bg-red-300">
                                Número de actividades
                            </th>
                        </tr>
                        <tr>
                            <th class="text-base border px-2">
                                San Luis Potosí
                            </th>
                            <th class="text-base border px-2">235</th>
                        </tr>
                    </table>
                    <table class="inline-block mt-2">
                        <tr class="">
                            <th class="text-base border px-1 bg-red-300">
                                Estados
                            </th>
                            <th class="text-base border px-1 bg-red-300">
                                Número de actividades
                            </th>
                        </tr>
                        <tr>
                            <th class="text-base border px-2">
                                San Luis Potosí
                            </th>
                            <th class="text-base border px-2">348</th>
                        </tr>
                    </table>
                </div>
                <div class="w-1/3 h-96 choroplethInnerInfo">
                    <span
                        class="block text-center text-2xl pt-6 font-bold text-red-800"
                        >290,210</span
                    >
                    <p class="block text-lg font-bold text-center">
                        PERSONAS ALCANZADAS EN LOS ESTADOS
                    </p>
                    <span
                        class="block text-center text-2xl pt-6 font-bold text-red-800"
                        >14,705
                    </span>
                    <p class="block text-lg font-bold text-center">
                        PERSONAS ALCANZADAS EN ACCIONES NACIONALES
                    </p>
                    <span
                        class="block text-center text-2xl mt-4 pt-2 font-bold text-red-800 border-t-red-600"
                        >TOTAL
                    </span>
                    <span
                        class="block text-center text-2xl pt-2 font-bold text-red-800"
                        >304,915
                    </span>
                    <p class="block text-lg font-bold text-center text-red-800">
                        PERSONAS ALCANZADAS
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
            <p
                class="block pb-4 py-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                2º TRIMESTRE 2021 ABRIL MAYO Y JULIO
            </p>
            <div
                class="relative overflow-hidden rounded-md border border-gray-400 w-11/12 choroplethContainer-lg"
            >
                <div class="choropleth">
                    <state-choropleth />
                </div>
                <div class="absolute choroplethInnerInfo-lg">
                    <span
                        class="block text-center text-2xl pt-6 font-bold text-red-800"
                        >290,210</span
                    >
                    <p class="block text-lg font-bold text-center">
                        PERSONAS ALCANZADAS EN LOS ESTADOS
                    </p>
                    <span
                        class="block text-center text-2xl pt-6 font-bold text-red-800"
                        >14,705
                    </span>
                    <p class="block text-lg font-bold text-center">
                        PERSONAS ALCANZADAS EN ACCIONES NACIONALES
                    </p>
                    <span
                        class="block text-center text-2xl mt-4 pt-2 font-bold text-red-800 border-t-red-600"
                        >TOTAL
                    </span>
                    <span
                        class="block text-center text-2xl pt-2 font-bold text-red-800"
                        >304,915
                    </span>
                    <p class="block text-lg font-bold text-center text-red-800">
                        PERSONAS ALCANZADAS
                    </p>
                </div>
            </div>
            <div class="flex justify-around w-full">
                <div class="flex-grow-0">
                    <table class="inline-block mt-2 mr-6">
                        <tr class="">
                            <th class="text-base border px-1 bg-red-300">
                                Estados
                            </th>
                            <th class="text-base border px-1 bg-red-300">
                                Número de actividades
                            </th>
                        </tr>
                        <tr>
                            <th class="text-base border px-2">
                                San Luis Potosí
                            </th>
                            <th class="text-base border px-2">235</th>
                        </tr>
                    </table>
                    <table class="inline-block mt-2">
                        <tr class="">
                            <th class="text-base border px-1 bg-red-300">
                                Estados
                            </th>
                            <th class="text-base border px-1 bg-red-300">
                                Número de actividades
                            </th>
                        </tr>
                        <tr>
                            <th class="text-base border px-2">
                                San Luis Potosí
                            </th>
                            <th class="text-base border px-2">348</th>
                        </tr>
                    </table>
                </div>
                <div class="w-1/3 h-96 choroplethInnerInfo">
                    <span
                        class="block text-center text-2xl pt-6 font-bold text-red-800"
                        >290,210</span
                    >
                    <p class="block text-lg font-bold text-center">
                        PERSONAS ALCANZADAS EN LOS ESTADOS
                    </p>
                    <span
                        class="block text-center text-2xl pt-6 font-bold text-red-800"
                        >14,705
                    </span>
                    <p class="block text-lg font-bold text-center">
                        PERSONAS ALCANZADAS EN ACCIONES NACIONALES
                    </p>
                    <span
                        class="block text-center text-2xl mt-4 pt-2 font-bold text-red-800 border-t-red-600"
                        >TOTAL
                    </span>
                    <span
                        class="block text-center text-2xl pt-2 font-bold text-red-800"
                        >304,915
                    </span>
                    <p class="block text-lg font-bold text-center text-red-800">
                        PERSONAS ALCANZADAS
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
                    <state-choropleth />
                </div>
                <div class="absolute choroplethInnerInfo">
                    <span
                        class="block text-center text-2xl pt-6 font-bold text-red-800"
                        >45,497</span
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
                    <state-choropleth />
                </div>
                <div class="absolute choroplethInnerInfo">
                    <span
                        class="block text-center text-2xl pt-6 font-bold text-red-800"
                        >1,596</span
                    >
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
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                PERSONAS ALCANZADAS EN ACCIONES DE PREVENCIÓN EN SALUD MENTAL Y
                ADICCIONES A NIVEL NACIONA
            </p>

            <div
                class="relative overflow-hidden rounded-md border border-gray-400 w-11/12 choroplethContainer-lg"
            >
                <div class="choropleth">
                    <state-choropleth />
                </div>
                <div class="absolute choroplethInnerInfo-lg">
                    <span
                        class="block text-center text-2xl pt-6 font-bold text-red-800"
                        >1,482,651</span
                    >
                    <p class="block text-lg font-bold text-center">
                        PERSONAS ALCANZADAS POR ESTADO
                    </p>
                    <span
                        class="block text-center text-2xl pt-6 font-bold text-red-800"
                        >1,118,204
                    </span>
                    <p class="block text-lg font-bold text-center">
                        PERSONAS ALCANZADAAS EN ACCIONES A NIVEL NACIONAL
                    </p>
                    <span
                        class="block text-center text-2xl mt-4 pt-2 font-bold text-red-800 border-t-red-600"
                        >TOTAL
                    </span>
                    <span
                        class="block text-center text-2xl pt-2 font-bold text-red-800"
                        >2,546,855
                    </span>
                    <p class="block text-lg font-bold text-center text-red-800">
                        PERSONAS ALCANZADAS
                    </p>
                </div>
            </div>
            <div class="flex justify-around w-full">
                <div class="flex-grow-0">
                    <table class="inline-block mt-2 mr-6">
                        <tr class="">
                            <th class="text-base border px-1 bg-red-300">
                                Estados
                            </th>
                            <th class="text-base border px-1 bg-red-300">
                                Número de actividades
                            </th>
                        </tr>
                        <tr>
                            <th class="text-base border px-2">
                                San Luis Potosí
                            </th>
                            <th class="text-base border px-2">235</th>
                        </tr>
                    </table>
                    <table class="inline-block mt-2">
                        <tr class="">
                            <th class="text-base border px-1 bg-red-300">
                                Estados
                            </th>
                            <th class="text-base border px-1 bg-red-300">
                                Número de actividades
                            </th>
                        </tr>
                        <tr>
                            <th class="text-base border px-2">
                                San Luis Potosí
                            </th>
                            <th class="text-base border px-2">348</th>
                        </tr>
                    </table>
                </div>
                <div class="w-1/3 h-96 choroplethInnerInfo">
                    <span
                        class="block text-center text-2xl pt-6 font-bold text-red-800"
                        >290,210</span
                    >
                    <p class="block text-lg font-bold text-center">
                        PERSONAS ALCANZADAS EN LOS ESTADOS
                    </p>
                    <span
                        class="block text-center text-2xl pt-6 font-bold text-red-800"
                        >14,705
                    </span>
                    <p class="block text-lg font-bold text-center">
                        PERSONAS ALCANZADAS EN ACCIONES NACIONALES
                    </p>
                    <span
                        class="block text-center text-2xl mt-4 pt-2 font-bold text-red-800 border-t-red-600"
                        >TOTAL
                    </span>
                    <span
                        class="block text-center text-2xl pt-2 font-bold text-red-800"
                        >304,915
                    </span>
                    <p class="block text-lg font-bold text-center text-red-800">
                        PERSONAS ALCANZADAS
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
            <div class="w-2/3 h-30">
                <bar-chart :chart-data="consultasDataCollection" />
            </div>
            <p
                class="block pt-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-transparent rounded-lg"
            >
                DISTRIBUCIÓN POR DIAGNÓSTICO CAPAS
            </p>

            <div class="w-2/3 h-30">
                <horizontal-bar-chart
                    :chart-data="brigadasGruposDataCollection"
                />
            </div>
        </section>

        <section id="resumen" class="flex flex-col pt-24 items-center">
            <div class="flex justify-around w-4/5">
                <div
                    class="bg-green-500 w-1/5 rounded-xl py-4 px-2 text-center font-bold text-white"
                >
                    <div class="h-32"></div>
                    <span>251</span>
                    <p>REUNIONES DE TRABAJO</p>
                </div>
                <div
                    class="bg-green-500 w-1/5 rounded-xl py-4 px-2 text-center font-bold text-white"
                >
                    <div class="h-32"></div>
                    <span>25</span>
                    <p>CONVENIOS DE COLABORACION</p>
                </div>
                <div
                    class="bg-green-500 w-1/5 rounded-xl py-4 px-2 text-center font-bold text-white"
                >
                    <div class="h-32"></div>
                    <span>1206</span>
                    <p>BENEFICIOS OTORGADOS</p>
                </div>
                <div
                    class="bg-green-500 w-1/5 rounded-xl py-4 px-2 text-center font-bold text-white"
                >
                    <div class="h-32"></div>
                    <span>2</span>
                    <p>POLITICAS PUBLICAS</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import HorizontalBarChart from '@/components/charts/HorizontalBarChart'
import BarChart from '@/components/charts/BarChart'
import StateChoropleth from '@/components/charts/StateChoropleth'
export default {
    name: 'Reporte',
    components: {
        BarChart,
        HorizontalBarChart,
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
            consultasDataCollection: {
                labels: [
                    'DEPRESION',
                    'INTENTO DE SUICIDIO',
                    'ANSIEDAD',
                    'SUSTANCIAS',
                    'TMNA',
                    'DEMENCIA',
                    'EPILEPSIA',
                    'PSICOSIS',
                ],
                datasets: [
                    {
                        label: 'CIJ, CAPAS, UNIVERSIDADES',
                        backgroundColor: '#f85809',
                        data: new Array(8)
                            .fill(0)
                            .map(() => Math.random() * 60000),
                    },
                ],
            },
            open: false,
        }
    },
    methods: {
        toggleOpen() {
            this.open = !this.open
        },
    },
}
</script>

<style scoped>
.border-t-red-600 {
    border-top: 3px solid #bb0000;
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
</style>
