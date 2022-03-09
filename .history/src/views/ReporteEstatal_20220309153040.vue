<template>
    <div class="">
        <!-- component -->
        <aside class="">
            <div :class="text-black" class="">
                <button class="" @click="open = !open">Menu</button>
                <div v-if="open" class="">
                    <a class="" href="#general" @click="toggleOpen"
                        >Datos generales</a
                    >
                    <a
                        class=""
                        href="#capacitacion_salud_mental"
                        @click="toggleOpen"
                        >Capacitación en salud mental</a
                    >
                    <a class="" href="#suicidio" @click="toggleOpen"
                        >Suicidio</a
                    >
                    <a class="" href="#brigadas_grupos" @click="toggleOpen"
                        >Brigadas y grupos de apoyo</a
                    >
                    <a class="" href="#consultas" @click="toggleOpen"
                        >Consultas</a
                    >
                </div>
            </div>
        </aside>
        <section id="general" class="">
            <p class="">Datos generales</p>
            <table class="">
                <tr class="">
                    <th class=""></th>
                    <th colspan="2" class="">Acciones comunitarias</th>
                    <th colspan="2" class="">Capacitación</th>
                    <th colspan="2" class="">Acciones de prevención</th>
                    <th class=""></th>
                    <th class=""></th>
                    <th class=""></th>
                </tr>
                <tr class="">
                    <th class="">Estado</th>
                    <th class="">Personas</th>
                    <th class="">Acciones</th>
                    <th class="">Personas</th>
                    <th class="">Acciones</th>
                    <th class="">Personas</th>
                    <th class="">Acciones</th>
                    <th class="">Atención</th>
                    <th class="">Suicidio</th>
                    <th class="">Políticas</th>
                </tr>
                <tr
                    v-for="(dataset, datasetIndex) in generalInfoWithStates"
                    :key="datasetIndex"
                    class=""
                >
                    <th
                        v-for="(data, dataIndex) in dataset"
                        :key="dataIndex"
                        :class="text-black"
                        class=""
                    >
                        {{ dataIndex != 0 ? Math.round(data) : data }}
                    </th>
                </tr>
            </table>
        </section>
        <section id="capacitacion_salud_mental" class="">
            <p class="">
                CAPACITACION EN SALUD MENTAL A PERSONAL DE 1er NIVEL DE
                ATENCIÓN.
            </p>
            <p class="">
                Guía de Intervención para la Atención de Trastornos Mentales,
                Neurológicos o por Consumo de Sustancias.
            </p>

            <div class="">
                <div class="">
                    <state-choropleth
                        :dataset="capacitacionSaludMentalPorEstado"
                        :background-color="choroplethRandomColor"
                    />
                </div>
                <div class="">
                    <span class="">{{ totalCapacitacionSaludMental }}</span>
                    <p class="">
                        Recursos Humanos capacitados del 1er nivel de atención
                    </p>
                </div>
            </div>
        </section>

        <section id="suicidio" class="">
            <p class="">CAPACITACION EN SUICIDIO A PERSONAL DE SALUD MENTAL</p>
            <p class="">
                CURSO DIPLOMADO DE ESPECIALIZACIÓN EN IDENTIFICACIÓN, VALORACIÓN
                E INTERVENCIÓN DE LA CONDUCTA SUICIDA.
            </p>
            <div class="">
                <div class="">
                    <state-choropleth
                        :dataset="capacitacionEnSuicidioPorEstado"
                        :background-color="choroplethRandomColor"
                    />
                </div>
                <div class="">
                    <span class="">{{ totalCapacitacionSuicidio }}</span>
                    <p class="">
                        Recursos Humanos capacitados en prevención del suicidio
                    </p>
                </div>
            </div>
        </section>

        <section id="brigadas_grupos" class="">
            <p class="">AVANCE BRIGADAS Y GRUPOS DE APOYO EN SALUD MENTAL</p>

            <div class="">
                <horizontal-bar-chart
                    :chart-data="avanceBrigadasGruposApoyoSaludMental"
                />
            </div>
        </section>

        <section id="consultas" class="">
            <p class="">CONSULTAS OTORGADAS DE 1ª Vez y Subsecuentes</p>

            <div class="">
                <horizontal-bar-chart :chart-data="consultasDataCollection" />
            </div>
        </section>

        <section id="" class="">
            <p class="">CAPACITACIONES POR ESTADO</p>

            <div class="">
                <line-chart :chart-data="randomDataCollection" />
            </div>
        </section>

        <section id="" class="">
            <p class="">REFERENCIAS POR INTENTO DE SUICIDIO</p>

            <div class="">
                <radar-chart :chart-data="randomDataCollection" />
            </div>
        </section>

        <section id="" class="">
            <p class="">CONSULTAS OTORGADAS DE 1ª Vez y Subsecuentes</p>

            <div class="">
                <doughnut-chart :chart-data="randomDoughnutDataCollection" />
            </div>
        </section>

        <section id="" class="">
            <p class="">Politicas públicas promedio</p>

            <div class="">
                <polar-area-chart :chart-data="randomDoughnutDataCollection" />
            </div>
        </section>

        <section id="" class="">
            <p class="">Capacitacion promedio</p>

            <div class="">
                <pie-chart :chart-data="randomDoughnutDataCollection" />
            </div>
        </section>

        <section id="" class="">
            <p class="">CONSULTAS OTORGADAS DE 1ª Vez y Subsecuentes</p>

            <div class="">
                <bubble-chart :chart-data="randomBubbleDataCollection" />
            </div>
        </section>

        <section id="" class="">
            <p class="">CONSULTAS OTORGADAS DE 1ª Vez y Subsecuentes</p>

            <div class="">
                <scatter-chart :chart-data="randomScatterDataCollection" />
            </div>
        </section>
        <section id="" class="">
            <p class="">CONSULTAS POR ESTADO</p>
            <p class="">1ª VEZ</p>
            <div class="">
                <div class="">
                    <state-choropleth
                        :dataset="capacitacionEnSuicidioPorEstado"
                        :background-color="choroplethRandomColor"
                    />
                </div>
                <div class="">
                    <span class="">{{ totalCapacitacionSuicidio }}</span>
                    <p class="">Consultas de 1ª vez</p>
                </div>
            </div>
        </section>
        <section id="" class="">
            <p class="">CONSULTAS POR ESTADO</p>
            <p class="">SUBSECUENTES</p>
            <div class="">
                <div class="">
                    <state-choropleth
                        :dataset="capacitacionEnSuicidioPorEstado"
                        :background-color="choroplethRandomColor"
                    />
                </div>
                <div class="">
                    <span class="">{{ totalCapacitacionSuicidio }}</span>
                    <p class="">Consultas subsecuentes</p>
                </div>
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
import ScatterChart from '@/components/charts/ScatterChart'
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
        ScatterChart,
        StateChoropleth,
    },
    data() {
        return {
            open: false,
            choroplethRed: [255, 0, 0],
            choroplethGreen: [0, 255, 0],
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
        choroplethRandomColor() {
            /*
                --blue: #007bff; -> (0,123,255)
                --indigo: #6610f2; -> (102,16,242)
                --purple: #6f42c1; -> (11,66,193)
                --pink: #e83e8c; -> (232,62,140)
                --red: #dc3545; -> (220,53,69)
                --orange: #fd7e14; -> (253,126,20)
                --yellow: #ffc107; -> (255,193,7)
                --green: #28a745; -> (40,167,69)
                --teal: #20c997; -> (32,201,151)
                --cyan: #17a2b8; -> (23,162,84)
                --gray: #6c757d; -> (108,117,125)
                --gray-dark: #343a40; -> (52,58,64)
                */
            let colorPalette = [
                [0, 123, 255],
                [102, 16, 242],
                [11, 66, 193],
                [232, 62, 140],
                [220, 53, 69],
                [253, 126, 20],
                [255, 193, 7],
                [40, 167, 69],
                [32, 201, 151],
                [23, 162, 84],
                [108, 117, 125],
                [52, 58, 64],
            ]

            return colorPalette[
                Math.round(Math.random() * (colorPalette.length - 1))
            ]
        },

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
            let labels = ['1ra Vez', 'Subsecuentes']
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
