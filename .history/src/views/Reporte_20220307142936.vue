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
            :states="states"
            :capacitacionSaludMental="capacitacionSaludMental"
            :capacitacionEnSuicidio="capacitacionEnSuicidio"
            :noBrigadistasDeApoyoEnSaludMental="
                noBrigadistasDeApoyoEnSaludMental
            "
            :noBrigadasDeApoyoEnSaludMental="noBrigadasDeApoyoEnSaludMental"
            :noTerapeutasDeApoyoEmocional="noTerapeutasDeApoyoEmocional"
            :noConsultasPrimeraVez="noConsultasPrimeraVez"
            :noConsultasSubsecuentes="noConsultasSubsecuentes"
        />
        <reporte-federal
            v-if="reportSelect == true"
            class="z-0 mt-20"
            :states="states"
            :personasAlcanzadasSuicidio="personasAlcanzadasSuicidio"
            :personasAlcanzadasAtencionSalud="personasAlcanzadasAtencionSalud"
            :personasAlcanzadasAccionesPrevencionSalud="
                personasAlcanzadasAccionesPrevencionSalud
            "
            :personasAlcanzadasAccionesComunitarias="
                personasAlcanzadasAccionesComunitarias
            "
            :actividadesRealizadasAccionesPrevencionSalud="
                actividadesRealizadasAccionesPrevencionSalud
            "
            :actividadesRealizadasAccionesComunitarias="
                actividadesRealizadasAccionesComunitarias
            "
            :capacitacionSaludMental="capacitacionSaludMental"
            :capacitacionesRealizadasSaludMental="
                capacitacionesRealizadasSaludMental
            "
            :capacitacionEnSuicidio="capacitacionEnSuicidio"
            :valoresPorDiagnostico="valoresPorDiagnostico"
            :reunionesDeTrabajo="reunionesDeTrabajo"
            :conveniosDeColaboracion="conveniosDeColaboracion"
            :beneficiosOtorgados="beneficiosOtorgados"
            :politicasPublicas="politicasPublicas"
            :noConsultasPrimeraVez="noConsultasPrimeraVez"
            :noConsultasSubsecuentes="noConsultasSubsecuentes"
        />
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
            jwt: '',
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
            states: [{ id: 0, estado: 'NULL' }],
            municipalities: [],
            acciones_comunitarias: [],
            acciones_prevencion_salud: [],
            atencion_salud: [],
            capacitacion: [],
            politicas_publicas: [],
            suicidio: [],
        }
    },
    computed: {
        generalData() {
            return new Array(32).fill(0)
        },
        capacitacionSaludMental() {
            let tagList = [
                'id',
                'id_info_registro',
                'id_modalidad',
                'tema_capacitacion',
                'constancia',
                'capacitaciones_realizadas',
            ]
            return this.getAndAddPropertieValuesThatIsNotInTheTagListFromFormObjectForEveryState(
                tagList,
                this.capacitacion
            )
        },
        capacitacionesRealizadasSaludMental() {
            return this.getPropertieFromFormObjectByEveryState(
                'capacitaciones_realizadas',
                this.capacitacion
            )
        },
        capacitacionEnSuicidio() {
            return this.getPropertieFromFormObjectByEveryState(
                'no_p_cursaron_curso_diplomado_suicidio',
                this.suicidio
            )
        },
        noBrigadistasDeApoyoEnSaludMental() {
            return this.getPropertieFromFormObjectByEveryState(
                'no_brigadistas_apoyo_salud_mental',
                this.suicidio
            )
        },
        noBrigadasDeApoyoEnSaludMental() {
            return this.getPropertieFromFormObjectByEveryState(
                'no_brigadas_apoyo_salud_mental',
                this.suicidio
            )
        },
        noTerapeutasDeApoyoEmocional() {
            return this.getPropertieFromFormObjectByEveryState(
                'no_terapeutas_grupos_apoyo_emocional',
                this.suicidio
            )
        },
        noConsultasPrimeraVez() {
            return this.getPropertieFromFormObjectByEveryState(
                'consultas_primera_vez',
                this.atencion_salud
            )
        },
        noConsultasSubsecuentes() {
            return this.getPropertieFromFormObjectByEveryState(
                'consultas_subsecuentes',
                this.atencion_salud
            )
        },
        personasAlcanzadasSuicidio() {
            return this.getPropertieFromFormObjectByEveryState(
                'no_p_alcanzadas_apoyo_salud_mental',
                this.suicidio
            )
        },
        personasAlcanzadasAtencionSalud() {
            let tagList = [
                'personas_detectadas_atendidas_por_depresion',
                'personas_detectadas_atendidas_por_ansiedad',
                'personas_detectadas_atendidas_por_consumo_de_sustancias',
                'personas_detectadas_atendidas_por_ninos_y_adolescentes',
                'personas_detectadas_atendidas_por_demencia',
                'personas_detectadas_atendidas_por_epilepsia',
                'personas_detectadas_atendidas_por_psicosis',
            ]
            return this.getAndAddPropertieValuesThatIsNotInTheTagListFromFormObjectForEveryState(
                tagList,
                this.atencion_salud
            )
        },
        personasAlcanzadasAccionesPrevencionSalud() {
            return this.getPropertieFromFormObjectByEveryState(
                'no_personas_alcanzadas',
                this.acciones_prevencion_salud
            )
        },
        personasAlcanzadasAccionesComunitarias() {
            return this.getPropertieFromFormObjectByEveryState(
                'no_personas_alcanzadas',
                this.acciones_comunitarias
            )
        },
        actividadesRealizadasAccionesPrevencionSalud() {
            return this.getPropertieFromFormObjectByEveryState(
                'no_actividades_realizadas',
                this.acciones_comunitarias
            )
        },
        actividadesRealizadasAccionesComunitarias() {
            return this.getPropertieFromFormObjectByEveryState(
                'no_actividades_realizadas',
                this.acciones_comunitarias
            )
        },
        valoresPorDiagnostico() {
            let depresion = this.getPropertieFromFormObjectByEveryState(
                '',
                this.atencion_salud
            )
            let tagList = [
                'id',
                'id_info_registro',
                'no_p_cursaron_curso_diplomado_suicidio',
                'no_brigadistas_apoyo_salud_mental',
                'no_brigadas_apoyo_salud_mental',
                'no_p_alcanzadas_apoyo_salud_mental',
                'no_terapeutas_grupos_apoyo_emocional',
                'tamizajes_aplicados_med_internos_f',
                'tamizajes_aplicados_med_internos_m',
                'tamizajes_aplicados_med_internos_no_binario',
                'tamizajes_aplicados_pasantes_ss_f',
                'tamizajes_aplicados_pasantes_ss__m',
                'tamizajes_aplicados_pasantes_ss_no_binario',
                'acc_prev_cap_salud_mental_adicc_med_internos_f',
                'acc_prev_cap_salud_mental_adicc_med_internos_m',
                'acc_prev_cap_salud_mental_adicc_med_internos_no_binario',
                'acc_prev_cap_salud_mental_adicc_med_pasantes_ss_f',
                'acc_prev_cap_salud_mental_adicc_med_pasantes_ss_m',
                'acc_prev_cap_salud_mental_adicc_med_pasantes_ss_no_binario',
                'no_med_internos_alcanzados_acc_prev_cap_f',
                'no_med_internos_alcanzados_acc_prev_cap_m',
                'no_med_internos_alcanzados_acc_prev_cap_no_binario',
                'no_med_pasantes_ss_alcanzados_acc_prev_cap_f',
                'no_med_pasantes_ss_alcanzados_acc_prev_cap_m',
                'no_med_pasantes_ss_alcanzados_acc_prev_cap_no_binario',
                'no_med_internos_atendidos_prog_nal_prev_suicidio_f',
                'no_med_internos_atendidos_prog_nal_prev_suicidio_m',
                'no_med_internos_atendidos_prog_nal_prev_suicidio_no_binario',
                'no_med_pasantes_ss_atendidos_prog_nal_prev_suicidio_f',
                'no_med_pasantes_ss_atendidos_prog_nal_prev_suicidio_m',
                'no_med_pasantes_ss_atendidos_prog_nal_prev_suicidio_no_binario',
                'no_suicidios_reportados_05_09_anios_f',
                'no_suicidios_reportados_05_09_anios_m',
                'no_suicidios_reportados_05_09_anios_no_binario',
                'no_suicidios_reportados_10_14_anios_f',
                'no_suicidios_reportados_10_14_anios_m',
                'no_suicidios_reportados_10_14_anios_no_binario',
                'no_suicidios_reportados_15_19_anios_f',
                'no_suicidios_reportados_15_19_anios_m',
                'no_suicidios_reportados_15_19_anios_no_binario',
                'no_suicidios_reportados_20_29_anios_f',
                'no_suicidios_reportados_20_29_anios_m',
                'no_suicidios_reportados_20_29_anios_no_binario',
                'no_suicidios_reportados_30_49_anios_f',
                'no_suicidios_reportados_30_49_anios_m',
                'no_suicidios_reportados_30_49_anios_no_binario',
                'no_suicidios_reportados_50_64_anios_f',
                'no_suicidios_reportados_50_64_anios_m',
                'no_suicidios_reportados_50_64_anios_no_binario',
                'no_suicidios_reportados_65_mas_anios_f',
                'no_suicidios_reportados_65_mas_anios_m',
                'no_suicidios_reportados_65_mas_anios_no_binario',
                'no_asistentes_grupos_apoyo_emocional_05_09_anios_f',
                'no_asistentes_grupos_apoyo_emocional_05_09_anios_m',
                'no_asistentes_grupos_apoyo_emocional_05_09_anios_no_binario',
                'no_asistentes_grupos_apoyo_emocional_10_14_anios_f',
                'no_asistentes_grupos_apoyo_emocional_10_14_anios_m',
                'no_asistentes_grupos_apoyo_emocional_10_14_anios_no_binario',
                'no_asistentes_grupos_apoyo_emocional_15_19_anios_f',
                'no_asistentes_grupos_apoyo_emocional_15_19_anios_m',
                'no_asistentes_grupos_apoyo_emocional_15_19_anios_no_binario',
                'no_asistentes_grupos_apoyo_emocional_20_29_anios_f',
                'no_asistentes_grupos_apoyo_emocional_20_29_anios_m',
                'no_asistentes_grupos_apoyo_emocional_20_29_anios_no_binario',
                'no_asistentes_grupos_apoyo_emocional_30_49_anios_f',
                'no_asistentes_grupos_apoyo_emocional_30_49_anios_m',
                'no_asistentes_grupos_apoyo_emocional_30_49_anios_no_binario',
                'no_asistentes_grupos_apoyo_emocional_50_64_anios_f',
                'no_asistentes_grupos_apoyo_emocional_50_64_anios_m',
                'no_asistentes_grupos_apoyo_emocional_50_64_anios_no_binario',
                'no_asistentes_grupos_apoyo_emocional_65_mas_anios_f',
                'no_asistentes_grupos_apoyo_emocional_65_mas_anios_m',
                'no_asistentes_grupos_apoyo_emocional_65_mas_anios_no_binario',
            ]
            let intento_suicidio =
                this.getAndAddPropertieValuesThatIsNotInTheTagListFromFormObjectForEveryState(
                    tagList,
                    this.suicidio
                )
            let ansiedad = this.getPropertieFromFormObjectByEveryState(
                '',
                this.atencion_salud
            )
            let consumo_sustancias =
                this.getPropertieFromFormObjectByEveryState(
                    '',
                    this.atencion_salud
                )
            let demencia = this.getPropertieFromFormObjectByEveryState(
                '',
                this.atencion_salud
            )
            let epilepsia = this.getPropertieFromFormObjectByEveryState(
                '',
                this.atencion_salud
            )
            let psicosis = this.getPropertieFromFormObjectByEveryState(
                '',
                this.atencion_salud
            )
            return {
                depresion,
                intento_suicidio,
                ansiedad,
                consumo_sustancias,
                demencia,
                epilepsia,
                psicosis,
            }
        },
        reunionesDeTrabajo() {
            return this.getPropertieFromFormObjectByEveryState(
                'reuniones_de_trabajo',
                this.politicas_publicas
            )
        },
        conveniosDeColaboracion() {
            return this.getPropertieFromFormObjectByEveryState(
                'convenios',
                this.politicas_publicas
            )
        },
        beneficiosOtorgados() {
            return this.getPropertieFromFormObjectByEveryState(
                'beneficios_otorgados',
                this.politicas_publicas
            )
        },
        politicasPublicas() {
            return this.getPropertieFromFormObjectByEveryState(
                'politicas_publicas',
                this.politicas_publicas
            )
        },
    },
    methods: {
        getAndAddPropertieValuesThatIsNotInTheTagListFromFormObjectForEveryState(
            tagList,
            formObjectList
        ) {
            let dataArray = new Array(32).fill(0)
            if (formObjectList != undefined && formObjectList.length > 0) {
                let auxList =
                    this.formObjectList.length > 0
                        ? this.formObjectList
                        : new Array(32).fill(0)

                this.deletePropertiesFromObject(tagList, auxList)

                this.forEveryStateExecute((state, stateIndex) => {
                    for (let formObject of auxList) {
                        for (const key in formObject) {
                            if (key != 'info_registro') {
                                let municipio = this.municipalityOf(formObject)
                                if (municipio.id_estado == state.id) {
                                    dataArray[stateIndex] += formObject[key]
                                }
                            }
                        }
                    }
                })
            }

            //console.log('DATA ARRAY: ', dataArray)

            return dataArray
        },
        deletePropertiesFromObject(deleteList, object) {
            for (let item of object) {
                for (let key of deleteList) {
                    delete item[key]
                }
            }
        },
        getPropertieFromFormObjectByEveryState(propertie, formObject) {
            let dataArray = new Array(32).fill(0)
            if (formObject != undefined && formObject.length > 0) {
                this.forEveryStateExecute((state, stateIndex) => {
                    for (let item of formObject) {
                        let municipio = this.municipalityOf(item)
                        if (municipio.id_estado == state.id) {
                            dataArray[stateIndex] += item[propertie]
                        }
                    }
                })
            }

            return dataArray
        },
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
    beforeCreate() {},
    created() {
        this.jwt = localStorage.jwt
        console.log('JWT', jwt)
        api.getFrom('sisma/estado').then((data) => {
            console.log('DATA: ', data)
            //this.states = data
            this.states = [
                { id: 2, estado: 'CDMX' },
                { id: 3, estado: 'Guerrero' },
                { id: 4, estado: 'México' },
                { id: 5, estado: 'Morelos' },
                { id: 6, estado: 'Sinaloa' },
                { id: 7, estado: 'Baja California' },
                { id: 8, estado: 'Sonora' },
                { id: 9, estado: 'Baja California Sur' },
                { id: 10, estado: 'Zacatecas' },
                { id: 11, estado: 'Durango' },
                { id: 12, estado: 'Chihuahua' },
                { id: 13, estado: 'Colima' },
                { id: 14, estado: 'Nayarit' },
                { id: 15, estado: 'Michoacán de Ocampo' },
                { id: 16, estado: 'Jalisco' },
                { id: 17, estado: 'Chiapas' },
                { id: 18, estado: 'Tabasco' },
                { id: 19, estado: 'Oaxaca' },
                { id: 21, estado: 'Guanajuato' },
                { id: 22, estado: 'Aguascalientes' },
                { id: 23, estado: 'Querétaro' },
                { id: 24, estado: 'San Luis Potosí' },
                { id: 25, estado: 'Tlaxcala' },
                { id: 26, estado: 'Puebla' },
                { id: 27, estado: 'Hidalgo' },
                { id: 28, estado: 'Veracruz de Ignacio de la Llave' },
                { id: 29, estado: 'Nuevo León' },
                { id: 30, estado: 'Coahuila de Zaragoza' },
                { id: 31, estado: 'Tamaulipas' },
                { id: 32, estado: 'Yucatán' },
                { id: 33, estado: 'Campeche' },
                { id: 34, estado: 'Quintana Roo' },
            ].sort((a, b) => a - b)
        })
        api.getFrom('sisma/municipio').then((data) => {
            //console.log('DATA: ', data)
            this.municipalities = data
        })
        api.getFrom('acciones_prevencion_salud', this.jwt).then((data) => {
            //console.log('DATA: ', data)
            this.acciones_prevencion_salud = data
        })
        api.getFrom('acciones_comunitarias', this.jwt).then((data) => {
            //console.log('DATA: ', data)
            this.acciones_comunitarias = data
        })
        api.getFrom('atencion_salud', this.jwt).then((data) => {
            //console.log('DATA: ', data)
            this.atencion_salud = data
        })
        api.getFrom('capacitacion', this.jwt).then((data) => {
            //console.log('DATA: ', data)
            this.capacitacion = data
        })
        api.getFrom('politicas_publicas', this.jwt).then((data) => {
            //console.log('DATA: ', data)
            this.politicas_publicas = data
        })
        api.getFrom('suicidio', this.jwt).then((data) => {
            //console.log('DATA: ', data)
            this.suicidio = data
        })
    },
}
</script>

<style scoped></style>
