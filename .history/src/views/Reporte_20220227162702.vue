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
                            ? 'bg-green-700 hover:text-xl hover:bg-green-500 focus:bg-green-500 focus:text-white focus:outline-none focus:shadow-outline'
                            : 'bg-gray-700 hover:text-xl hover:bg-green-500 focus:bg-green-500 focus:text-white focus:outline-none focus:shadow-outline'
                    "
                    class="px-2 py-2 mt-2 mr-4 text-base font-semibold text-white"
                    @click="reportSelect = false"
                >
                    Reporte Estatal
                </button>
                <button
                    :class="
                        reportSelect == true
                            ? 'bg-blue-700 hover:text-xl hover:bg-blue-500 focus:bg-blue-500 focus:text-white focus:outline-none focus:shadow-outline'
                            : 'bg-gray-700 hover:text-xl hover:bg-blue-500 focus:bg-blue-500 focus:text-white focus:outline-none focus:shadow-outline'
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
            :capacitacionSaludMentalEstatalDataSet="
                capacitacionSaludMentalEstatalDataSet
            "
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
                    title: 'Logout',
                    to: { name: 'login' },
                },
                {
                    title: 'Reporte',
                    to: { name: 'reporte' },
                },
            ],
            states: [],
            acciones_comunitarias: [],
            acciones_prevencion_salud: [],
            atencion_salud: [],
            capacitacion: [],
            suicidio: [],
        }
    },
    computed: {
        capacitacionSaludMentalEstatalDataSet() {
            return new Array(32).fill(0)
        },
    },
    methods: {},
    created() {
        api.getFrom('sisma/estado').then((data) => {
            //console.log('DATA: ', data)
            this.states = data
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
