<template>
    <div>
        <div
            class="fixed block w-full h-1/6 top-0 left-0 my-0 mx-auto py-4 px-6 bg-gray-100 z-50"
        >
            <px-header :links="links" />
            <div class="block flex justify-end bg-transparent">
                <button
                    :class="
                        reportSelect == false
                            ? 'rounded-lg bg-green-700 hover:text-xl hover:bg-green-500 focus:bg-green-500 focus:text-white focus:outline-none focus:shadow-outline'
                            : 'rounded-lg bg-gray-700 hover:text-xl hover:bg-green-500 focus:bg-green-500 focus:text-white focus:outline-none focus:shadow-outline'
                    "
                    class="px-2 py-2 mt-2 mr-4 text-base font-semibold text-white"
                    @click="reportSelect = false"
                >
                    Reporte Estatal
                </button>
                <button
                    :class="
                        reportSelect == true
                            ? 'rounded-lg bg-blue-700 hover:text-xl hover:bg-blue-500 focus:bg-blue-500 focus:text-white focus:outline-none focus:shadow-outline'
                            : 'rounded-lg bg-gray-700 hover:text-xl hover:bg-blue-500 focus:bg-blue-500 focus:text-white focus:outline-none focus:shadow-outline'
                    "
                    class="px-2 py-2 mt-2 text-base font-semibold text-white"
                    @click="reportSelect = true"
                >
                    Reporte Federal
                </button>
            </div>
        </div>

        <reporte-estatal
            v-if="reportSelect == false"
            class="z-0 mt-20"
            :capacitacionSaludMentalPorEstado="capacitacionSaludMentalPorEstado"
            :capacitacionEnSuicidioPorEstado="capacitacionEnSuicidioPorEstado"
        />
        <reporte-federal v-if="reportSelect == true" class="z-0 mt-20" />
    </div>
</template>

<script>
import api from '@/api'
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
                    title: 'Reporte',
                    to: { name: 'reporte' },
                },
                {
                    title: 'Logout',
                    to: { name: 'login' },
                },
            ],
            states: [],
            municipalities: [],
            acciones_comunitarias: [],
            acciones_prevencion_salud: [],
            atencion_salud: [],
            capacitacion: [],
            suicidio: [],
        }
    },
    computed: {
        generalData() {
            return new Array(32).fill(0)
        },
        capacitacionSaludMentalPorEstado() {
            let dataArray = new Array(32).fill(0)

            let capacitacionAux =
                this.capacitacion.length > 0
                    ? this.capacitacion
                    : new Array(32).fill(0)

            if (capacitacionAux != undefined && capacitacionAux.length > 0) {
                let ignoreTagList = [
                    'capacitaciones_realizadas',
                    'constancia',
                    'id',
                    'id_info_registro',
                    'id_modalidad',
                    'modalidad',
                    'poblacion',
                    'tema_capacitacion',
                ]

                for (let capacitacion of capacitacionAux) {
                    for (let key of ignoreTagList) {
                        delete capacitacion[key]
                    }
                }

                this.forEveryStateExecute((state, stateIndex) => {
                    for (let capacitacion of capacitacionAux) {
                        for (const key in capacitacion) {
                            if (key != 'info_registro') {
                                let municipio =
                                    this.municipalityOf(capacitacion)
                                if (municipio.id_estado == state.id) {
                                    dataArray[stateIndex] += capacitacion[key]
                                }
                            }
                        }
                    }
                })
            }

            //console.log('DATA ARRAY: ', dataArray)

            return dataArray
        },
        capacitacionEnSuicidioPorEstado() {
            let dataArray = new Array(32).fill(0)
            if (this.suicidio != undefined && this.suicidio.length > 0) {
                this.forEveryStateExecute((state, stateIndex) => {
                    for (let suicidio of this.suicidio) {
                        let municipio = this.municipalityOf(suicidio)
                        if (municipio.id_estado == state.id) {
                            dataArray[stateIndex] +=
                                suicidio.no_p_cursaron_curso_diplomado_suicidio
                        }
                    }
                })
            }

            return dataArray
        },
    },
    methods: {
        municipalityOf(form) {
            return this.municipalities.find((municipality) => {
                return municipality.municipio == form.info_registro.municipio
            })
        },
        forEveryStateExecute(task) {
            for (
                let stateIndex = 0;
                stateIndex < this.states.length;
                stateIndex++
            ) {
                let state = this.states[stateIndex]
                task(state, stateIndex)
            }
        },
    },
    created() {
        api.getFrom('sisma/estado').then((data) => {
            //console.log('DATA: ', data)
            this.states = data
        })
        api.getFrom('sisma/municipio').then((data) => {
            //console.log('DATA: ', data)
            this.municipalities = data
        })
        api.getFrom('acciones_prevencion_salud').then((data) => {
            //console.log('DATA: ', data)
            this.acciones_prevencion_salud = data
        })
        api.getFrom('acciones_comunitarias').then((data) => {
            //console.log('DATA: ', data)
            this.acciones_comunitarias = data
        })
        api.getFrom('atencion_salud').then((data) => {
            //console.log('DATA: ', data)
            this.atencion_salud = data
        })
        api.getFrom('capacitacion').then((data) => {
            //console.log('DATA: ', data)
            this.capacitacion = data
        })
        api.getFrom('suicidio').then((data) => {
            //console.log('DATA: ', data)
            this.suicidio = data
        })
    },
}
</script>

<style scoped></style>
