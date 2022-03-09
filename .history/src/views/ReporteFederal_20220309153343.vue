<template>
    <div class="">
        <!-- component -->
        <aside class="">
            <div :class="text-black" class="">
                <button class="" @click="open = !open">Menu</button>
                <div v-if="open" class="">
                    <a
                        class=""
                        href="#acciones_comunitarias"
                        @click="toggleOpen"
                        >Acciones comunitairas</a
                    >
                    <a
                        class=""
                        href="#capacitacion_salud_mental"
                        @click="toggleOpen"
                        >Capacitación en salud mental y adicciones</a
                    >
                    <a class="" href="#suicidio" @click="toggleOpen"
                        >Capacitación en Suicidio</a
                    >
                    <a
                        class=""
                        href="#acciones_prevencion_salud_mental"
                        @click="toggleOpen"
                        >Acciones de prevención en salud mental</a
                    >
                    <a class="" href="#consultas" @click="toggleOpen"
                        >Consultas</a
                    >
                    <a class="" href="#resumen" @click="toggleOpen">Resumen</a>
                </div>
            </div>
        </aside>

        <section id="acciones_comunitarias" class="">
            <p class="">
                NÚMERO DE PERSONAS ALCANZADAS POR ESTADO EN ACCIONES
                COMUNITARIAS
            </p>

            <div class="">
                <div class="">
                    <state-choropleth
                        :dataset="
                            randomizeList(
                                accionesNacionales.map(() => Math.random())
                            )
                        "
                        :background-color="choroplethRandomColor"
                    />
                </div>
                <div class="">
                    <span class="">{{
                        totalNacionalAccionesComunitarias
                    }}</span>
                    <p class="">PERSONAS ALCANZADAS EN</p>
                    <p class="">ACCIONES DE PREVENCIÓN EN SALUD</p>
                    <span class="">{{
                        totalNacionalAccionesPrevencionSalud
                    }}</span>
                    <p class="">PERSONAS ALCANZADAS EN</p>
                    <p class="">ACCIONES COMUNITARIAS</p>
                    <span class="">TOTAL </span>
                    <span class="">{{ totalAccionesNacionales }} </span>
                    <p class="">PERSONAS ALCANZADAS</p>
                </div>
            </div>
            <div class="">
                <div class="">
                    <table class="">
                        <tr class="">
                            <th class="">Estados</th>
                            <th class="">Número de actividades</th>
                        </tr>
                        <tr
                            v-for="(
                                item, index
                            ) in actividadesRealizadasPorEstadoAccionesPrevencionSalud"
                            :key="index"
                        >
                            <th v-if="index < 16" class="">
                                {{ item.estado }}
                            </th>
                            <th v-if="index < 16" class="">
                                {{ item.value }}
                            </th>
                        </tr>
                    </table>
                    <table class="">
                        <tr class="">
                            <th class="">Estados</th>
                            <th class="">Número de actividades</th>
                        </tr>
                        <tr
                            v-for="(
                                item, index
                            ) in actividadesRealizadasPorEstadoAccionesPrevencionSalud"
                            :key="index"
                        >
                            <th v-if="index >= 16" class="">
                                {{ item.estado }}
                            </th>
                            <th v-if="index >= 16" class="">
                                {{ item.value }}
                            </th>
                        </tr>
                    </table>
                </div>
                <div class="">
                    <span class="">TOTAL </span>
                    <p class="">NÚMERO DE ACTIVIDADES</p>
                    <span class=""
                        >{{ totalNacionalActividadesAccionesComunitarias }}
                    </span>
                    <p class="">ACCIONES COMUNITARIAS</p>
                </div>
            </div>
        </section>

        <section id="capacitacion_salud_mental" class="">
            <p class="">
                NÚMERO DE PERSONAS CAPACITADAS EN MATERIA DE SALUD MENTAL Y
                ADICCIONES A NIVEL NACIONAL
            </p>

            <div class="">
                <div class="">
                    <state-choropleth
                        :dataset="randomizeList(capacitacionSaludMental)"
                        :background-color="choroplethRandomColor"
                    />
                </div>
                <div class="">
                    <span class="">TOTAL </span>
                    <span class=""
                        >{{ totalpersonasCapacitadasSaludMental }}
                    </span>
                    <p class="">PERSONAS CAPACITADAS</p>
                </div>
            </div>
            <div class="">
                <div class="">
                    <table class="">
                        <tr class="">
                            <th class="">Estados</th>
                            <th class="">Número de capacitaciones</th>
                        </tr>
                        <tr
                            v-for="(
                                item, index
                            ) in capacitacionesRealizadasSaludMentalPorEstado"
                            :key="index"
                        >
                            <th v-if="index < 16" class="">
                                {{ item.estado }}
                            </th>
                            <th v-if="index < 16" class="">
                                {{ item.value }}
                            </th>
                        </tr>
                    </table>
                    <table class="">
                        <tr class="">
                            <th class="">Estados</th>
                            <th class="">Número de capacitaciones</th>
                        </tr>
                        <tr
                            v-for="(
                                item, index
                            ) in capacitacionesRealizadasSaludMentalPorEstado"
                            :key="index"
                        >
                            <th v-if="index >= 16" class="">
                                {{ item.estado }}
                            </th>
                            <th v-if="index >= 16" class="">
                                {{ item.value }}
                            </th>
                        </tr>
                    </table>
                </div>
                <div class="">
                    <span class="">TOTAL </span>
                    <span class=""
                        >{{ totalNacionalCapacitacionesRealizadasSaludMental }}
                    </span>
                    <p class="">CAPACITACIONES REALIZADAS</p>
                </div>
            </div>
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
                        :dataset="
                            randomizeList(personalCapacitadoEnGeneralPorEstado)
                        "
                        :background-color="choroplethRandomColor"
                    />
                </div>
                <div class="">
                    <span class="">{{ totalPersonal1erNivelCapacitado }}</span>
                    <p class="">
                        Recursos Humanos capacitados del 1er nivel de atención
                    </p>
                </div>
            </div>
        </section>

        <section id="suicidio" class="">
            <p class="">CAPACITACION EN SUICIDIO A PERSONAL DE SALUD MENTAL.</p>
            <p class="">
                CURSO DIPLOMADO DE ESPECIALIZACIÓN EN IDENTIFICACIÓN, VALORACIÓN
                E INTERVENCIÓN DE LA CONDUCTA SUICIDA.
            </p>

            <div class="">
                <div class="">
                    <state-choropleth
                        :dataset="
                            randomizeList(
                                personasQueCursaronDiplomadoSuicidioPorEstado
                            )
                        "
                        :background-color="choroplethRandomColor"
                    />
                </div>
                <div class="">
                    <span class=""
                        >{{ totalNacionalPersonasQueCursaronDiplomadoSuicidio }}
                    </span>
                    <p class="">Recursos Humanos capacitados</p>
                </div>
            </div>
        </section>

        <section id="acciones_prevencion_salud_mental" class="">
            <p class="">
                PERSONAS ALCANZADAS EN ACCIONES DE PREVENCIÓN EN SALUD MENTAL Y
                ADICCIONES A NIVEL NACIONAL
            </p>

            <div class="">
                <div class="">
                    <state-choropleth
                        :dataset="
                            randomizeList(
                                personasAlcanzadasAccionesPrevencionSalud
                            )
                        "
                        :background-color="choroplethRandomColor"
                    />
                </div>
                <div class="">
                    <p class="">ACCIONES DE PREVENCIÓN A NIVEL NACIONAL</p>
                    <span class="">TOTAL </span>
                    <span class=""
                        >{{
                            totalNacionalPersonasAlcanzadasAccionesPrevencionSalud
                        }}
                    </span>
                    <p class="">PERSONAS ALCANZADAS</p>
                </div>
            </div>
            <div class="">
                <div class="">
                    <table class="">
                        <tr class="">
                            <th class="">Estados</th>
                            <th class="">Número de acciones</th>
                        </tr>
                        <tr
                            v-for="(
                                item, index
                            ) in actividadesRealizadasPorEstadoAccionesPrevencionSalud"
                            :key="index"
                        >
                            <th v-if="index < 16" class="">
                                {{ item.estado }}
                            </th>
                            <th v-if="index < 16" class="">
                                {{ item.value }}
                            </th>
                        </tr>
                    </table>
                    <table class="">
                        <tr class="">
                            <th class="">Estados</th>
                            <th class="">Número de acciones</th>
                        </tr>
                        <tr
                            v-for="(
                                item, index
                            ) in actividadesRealizadasPorEstadoAccionesPrevencionSalud"
                            :key="index"
                        >
                            <th v-if="index >= 16" class="">
                                {{ item.estado }}
                            </th>
                            <th v-if="index >= 16" class="">
                                {{ item.value }}
                            </th>
                        </tr>
                    </table>
                </div>
                <div class="">
                    <span class=""
                        >{{ totalNacionalAccionesPrevencionSalud }}
                    </span>
                    <p class="">ACCIONES DE PREVENCIÓN</p>
                </div>
            </div>
        </section>
        <section id="consultas" class="">
            <p class="">
                DISTRIBUCIÓN POR DIAGNÓSTICO (CIJ, CAPAS, UNIVERSIDADES)
            </p>
            <div class="">
                <bar-chart :chart-data="consultasDataCollection" />
            </div>
            <p class="">
                <span>Consultas de Primera Vez: </span>
                <span>{{ totalNoConsultasPrimeraVez }}</span>
            </p>
            <p class="">
                <span>Consultas subsecuentes: </span>
                <span>{{ totalNoConsultasSubsecuentes }}</span>
            </p>
        </section>

        <section id="resumen" class="">
            <div class="">
                <div class="">
                    <div class=""></div>
                    <span>{{ totalReunionesDeTrabajo }}</span>
                    <p>REUNIONES DE TRABAJO</p>
                </div>
                <div class="">
                    <div class=""></div>
                    <span>{{ totalConveniosDeColaboracion }}</span>
                    <p>CONVENIOS DE COLABORACION</p>
                </div>
                <div class="">
                    <div class=""></div>
                    <span>{{ totalBeneficiosOtorgados }}</span>
                    <p>BENEFICIOS OTORGADOS</p>
                </div>
                <div class="">
                    <div class=""></div>
                    <span>{{ totalPoliticasPublicas }}</span>
                    <p>POLITICAS PUBLICAS</p>
                </div>
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
            <p class="">CONSULTAS DE PRIMERA VEZ</p>

            <div class="">
                <doughnut-chart :chart-data="randomDoughnutDataCollection" />
            </div>
        </section>

        <section id="" class="">
            <p class="">CONSULTAS SUBSECUENTES</p>

            <div class="">
                <doughnut-chart :chart-data="randomDoughnutDataCollection" />
            </div>
        </section>

        <section id="" class="">
            <p class="">ACCIONES DE PREVENCIÓN POR MES</p>

            <div class="">
                <polar-area-chart :chart-data="randomDoughnutDataCollection" />
            </div>
        </section>

        <section id="" class="">
            <p class="">CAPACITACIÓN POR ESTADO POR MES</p>

            <div class="">
                <pie-chart :chart-data="randomDoughnutDataCollection" />
            </div>
        </section>

        <section id="" class="">
            <p class="">ACCIONES COMUNITARIAS</p>
            <p class="">
                PERSONAS ALCANZADAS VS ACTIVIDADES REALIZADAS POR ESTADO
            </p>

            <div class="">
                <bubble-chart :chart-data="randomBubbleDataCollection" />
            </div>
        </section>

        <section id="" class="">
            <p class="">ACCIONES COMUNITARIAS</p>
            <p class="">PERSONAS ALCANZADAS VS ACTIVIDADES REALIZADAS</p>

            <div class="">
                <scatter-chart :chart-data="randomScatterDataCollection" />
            </div>
        </section>

        <section id="consultas" class="">
            <p class="">
                CONSULTAS MENSUALES OTORGADAS DE 1ª Vez y Subsecuentes
            </p>

            <div class="">
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
            default: () =>
                new Array(32)
                    .fill(0)
                    .map(() => Math.round(Math.random() * 320)),
        },
        personasAlcanzadasAtencionSalud: {
            type: Array,
            default: () =>
                new Array(32)
                    .fill(0)
                    .map(() => Math.round(Math.random() * 320)),
        },
        personasAlcanzadasAccionesPrevencionSalud: {
            type: Array,
            default: () =>
                new Array(32)
                    .fill(0)
                    .map(() => Math.round(Math.random() * 320)),
        },
        personasAlcanzadasAccionesComunitarias: {
            type: Array,
            default: () =>
                new Array(32)
                    .fill(0)
                    .map(() => Math.round(Math.random() * 320)),
        },
        actividadesRealizadasAccionesPrevencionSalud: {
            type: Array,
            default: () =>
                new Array(32)
                    .fill(0)
                    .map(() => Math.round(Math.random() * 320)),
        },
        acrividadesRealizadasAccionesComunitarias: {
            type: Array,
            default: () =>
                new Array(32)
                    .fill(0)
                    .map(() => Math.round(Math.random() * 320)),
        },
        capacitacionSaludMental: {
            type: Array,
            default: () =>
                new Array(32)
                    .fill(0)
                    .map(() => Math.round(Math.random() * 320)),
        },
        capacitacionesRealizadasSaludMental: {
            type: Array,
            default: () =>
                new Array(32)
                    .fill(0)
                    .map(() => Math.round(Math.random() * 320)),
        },
        capacitacionEnSuicidio: {
            type: Array,
            default: () =>
                new Array(32)
                    .fill(0)
                    .map(() => Math.round(Math.random() * 320)),
        },
        valoresPorDiagnostico: {
            type: Object,
            default: () => {},
        },
        reunionesDeTrabajo: {
            type: Array,
            default: () =>
                new Array(32)
                    .fill(0)
                    .map(() => Math.round(Math.random() * 320)),
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
            return this.randomizeTotal(
                this.calculateTotalFromArray(
                    this.personasAlcanzadasAccionesComunitarias
                )
            )
        },
        totalNacionalAccionesPrevencionSalud() {
            return this.randomizeTotal(
                this.calculateTotalFromArray(
                    this.personasAlcanzadasAccionesPrevencionSalud
                )
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
                this.randomizeList(
                    this.actividadesRealizadasAccionesPrevencionSalud
                )
            )
        },
        actividadesRealizadasPorEstadoAccionesComunitarias() {
            return this.mapToStateValueDuoList(
                this.randomizeList(
                    this.acrividadesRealizadasAccionesComunitarias
                )
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
            return this.mapToStateValueDuoList(
                this.randomizeList(this.capacitacionSaludMental)
            )
        },
        capacitacionesRealizadasSaludMentalPorEstado() {
            return this.mapToStateValueDuoList(
                this.randomizeList(this.capacitacionesRealizadasSaludMental)
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
            return this.mapToStateValueDuoList(
                this.randomizeList(this.capacitacionEnSuicidio)
            )
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
            dataValues = dataValues.map(() => Math.round(Math.random() * 1500))
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
            //let total = numberArray.reduce((a, b) => a + b)
            //return formatNumberWithCommas(total)
            return formatNumberWithCommas(Math.round(Math.random() * 400))
        },
        mapToStateValueDuoList(numberArray) {
            if (numberArray[0] == undefined) {
                numberArray.fill(0)
            }
            return numberArray.map((value, index) => {
                if (this.states[index].estado != undefined) {
                    return { estado: this.states[index].estado, value }
                }
            })
        },
        addArrays(numberArray1, numberArray2) {
            let aux = new Array(32).fill(0)
            for (let index = 0; index < numberArray1.length; index++) {
                aux[index] = numberArray1[index] + numberArray2[index]
            }

            return aux
        },
        randomizeTotal(num = 0) {
            return Math.round(num * Math.random()) * 300
        },
        randomizeList(arrayList = []) {
            return arrayList.map(() => Math.round(Math.random() * 350))
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
