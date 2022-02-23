<template>
    <div>
        <div class="bg-black text-white text-lg">
            <p>{{ formName }}</p>
        </div>
        <form
            @submit.prevent="submitForm"
            class="mt-6 flex flex-col space-y-6 px-4"
        >
            <px-select-anio @select-value="getAnio"></px-select-anio>
            <px-select-mes @select-value="getMes"></px-select-mes>
            <px-auto-complete-estado @select-value="getEstado" />
            <px-auto-complete-municipio @select-value="getMunicipio" />
            <px-auto-complete-institucion @select-value="getInstitucion" />
            <px-select-tipo-actividad @select-value="getTipoActividad" />
            <px-select-poblacion
                v-if="formRequiereModalidadAndPoblacionFields"
                @select-value="getPoblacion"
            />
            <px-select-modalidad
                v-if="formRequiereModalidadAndPoblacionFields"
                @select-value="getModalidad"
            />

            <form-acciones-comunitarias
                v-if="formName == 'acciones_comunitarias'"
                @change="getAccionesComunitarias"
            />

            <button
                type="submit"
                class="px-4 py-2 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none self-center"
            >
                Enviar
            </button>
        </form>
    </div>
</template>

<script>
import PxSelectAnio from '@/components/PxSelectAnio'
import PxSelectMes from '@/components/PxSelectMes'
import PxAutoCompleteEstado from '@/components/PxAutoCompleteEstado'
import PxAutoCompleteMunicipio from '@/components/PxAutoCompleteMunicipio'
import PxAutoCompleteInstitucion from '@/components/PxAutoCompleteInstitucion'
import PxSelectPoblacion from '@/components/PxSelectPoblacion'
import PxSelectTipoActividad from '@/components/PxSelectTipoActividad'
import PxSelectModalidad from '@/components/PxSelectModalidad'
import FormAccionesComunitarias from '@/views/FormAccionesComunitarias'
import config from '@/config'

const availableForms = {
    acciones_comunitarias: 'acciones_comunitarias',
}
const formsThatRequireModalidadAndPoblacionFields = [
    availableForms.acciones_comunitarias,
]

export default {
    name: 'SismaForms',
    components: {
        PxSelectAnio,
        PxSelectMes,
        PxAutoCompleteEstado,
        PxAutoCompleteMunicipio,
        PxAutoCompleteInstitucion,
        PxSelectPoblacion,
        PxSelectTipoActividad,
        PxSelectModalidad,
        FormAccionesComunitarias,
    },
    data() {
        return {
            apiBaseUrl: config.apiBaseUrl,
            info: {
                info_registro: {},
            },
            formName: this.$route.params.form,
            formRequiereModalidadAndPoblacionFields: false,
            errors: [],
        }
    },
    methods: {
        validateForm() {
            let info_refistro_v = 'info_registro' in this.info
            console.log('Validate: ', info_refistro_v.toString())
        },
        async submitForm() {
            this.validateForm()
            const res = await fetch(`${this.apiBaseUrl}acciones_comunitarias`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.info),
            })
            res.json().then((data) => console.log(data))
        },

        getAnio(id_anio) {
            //console.log('INFO: ', this.info)
            this.info.info_registro.id_anio = id_anio
        },

        getMes(id_mes) {
            //console.log('INFO: ', this.info)
            this.info.info_registro.id_mes = id_mes
        },

        getEstado(value) {
            //console.log('INFO: ', this.info)
            this.info.info_registro.estado = value
        },

        getMunicipio(value) {
            //console.log('INFO: ', this.info)
            this.info.info_registro.municipio = value
        },

        getInstitucion(value) {
            //console.log('INFO: ', this.info)
            this.info.info_registro.institucion = value
        },

        getTipoActividad(value) {
            //console.log('INFO: ', this.info)
            this.info.info_registro.tipo_actividad = value
        },

        getPoblacion(value) {
            //console.log('INFO: ', this.info)
            this.info[this.formName].poblacion = value
        },

        getModalidad(id_modalidad) {
            //console.log('INFO: ', this.info)
            this.info[this.formName].id_modalidad = id_modalidad
        },
        getAccionesComunitarias(acciones_comunitarias) {
            //console.log('AC: ', acciones_comunitarias)
            this.info[this.formName].objetivo_actividad =
                acciones_comunitarias.objetivo_actividad
            this.info[this.formName].no_personas_alcanzadas =
                acciones_comunitarias.no_personas_alcanzadas
            this.info[this.formName].no_actividades_realizadas =
                acciones_comunitarias.no_actividades_realizadas
        },
    },
    mounted() {
        this.formRequiereModalidadAndPoblacionFields =
            formsThatRequireModalidadAndPoblacionFields.includes(this.formName)
        this.info[this.formName] = {}
    },
}
</script>
