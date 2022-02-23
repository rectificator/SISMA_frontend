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
            errors: {},
        }
    },
    methods: {
        validateForm() {
            this.errors['id_anio'] = 'id_anio' in this.info.info_registro
            this.errors['id_mes'] = 'id_mes' in this.info.info_registro
            this.errors['estado'] = 'estado' in this.info.info_registro
            this.errors['municipio'] = 'municipio' in this.info.info_registro
            this.errors['institucion'] =
                'institucion' in this.info.info_registro
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
            this.moveFieldFromObjectToThisInfoObject(
                acciones_comunitarias,
                'objetivo_actividad'
            )
            this.moveFieldFromObjectToThisInfoObject(
                acciones_comunitarias,
                'no_personas_alcanzadas'
            )
            this.moveFieldFromObjectToThisInfoObject(
                acciones_comunitarias,
                'no_actividades_realizadas'
            )
            this.moveFieldFromObjectToThisInfoObject(
                acciones_comunitarias,
                'tipo_actividad'
            )
        },
        moveFieldFromObjectToThisInfoObject(object, field) {
            this.info[this.formName][field] = object[field]
        },
    },
    mounted() {
        this.formRequiereModalidadAndPoblacionFields =
            formsThatRequireModalidadAndPoblacionFields.includes(this.formName)
        this.info[this.formName] = {}
    },
}
</script>
