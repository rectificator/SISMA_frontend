<template>
    <div>
        <div class="bg-black text-white text-lg">
            <p>{{ formName }}</p>
        </div>
        <form
            @submit.prevent="submitForm"
            class="mt-6 flex flex-col space-y-6 px-4"
        >
            <px-select-anio
                :error="errorField"
                @select-value="getAnio"
            ></px-select-anio>
            <px-select-mes
                :error="errorField"
                @select-value="getMes"
            ></px-select-mes>
            <px-auto-complete-estado
                :error="errorField"
                @select-value="getEstado"
            />
            <px-auto-complete-municipio
                :error="errorField"
                @select-value="getMunicipio"
            />
            <px-auto-complete-institucion
                :error="errorField"
                @select-value="getInstitucion"
            />

            <px-select-poblacion
                v-if="formRequiereModalidadAndPoblacionFields"
                :error="errorField"
                @select-value="getPoblacion"
            />
            <px-select-modalidad
                v-if="formRequiereModalidadAndPoblacionFields"
                :error="errorField"
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
            validate: false,
            errorField: false,
        }
    },
    methods: {
        validateForm() {
            this.addToError()
            delete this.info[this.formName].errors
            console.log('INFO: ', this.info)
            if (
                Object.keys(this.info[this.formName]).length != 0 ||
                Object.keys(this.info.info_registro).length != 0
            ) {
                let errorKeys = Object.keys(this.errors)
                for (
                    let keyIndex = 0;
                    keyIndex < errorKeys.length;
                    keyIndex++
                ) {
                    this.validate = true
                    let key = errorKeys[keyIndex]
                    if (this.errors[key] == false) {
                        this.errorField = true
                        this.validate = false
                        break
                    }
                }
                console.log('VAL: ', this.validate)
                console.log('ERRORS: ', this.errors)
            }
        },
        addToError() {
            this.addFieldToError('anio')
            this.addFieldToError('mes')
            this.addFieldToError('estado')
            this.addFieldToError('municipio')
            this.addFieldToError('institucion')
        },
        addFieldToError(field) {
            this.errors[field] = field in this.info.info_registro
        },
        async submitForm() {
            this.validateForm()
            if (this.validate == true) {
                delete this.info[this.formName].errors
                let res = await fetch(
                    `${this.apiBaseUrl}acciones_comunitarias`,
                    {
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(this.info),
                    }
                )
                res.json().then((data) => console.log(data))
            } else {
                console.log('Aun hay campos sin información')
            }
        },

        getAnio(anio) {
            this.info.info_registro.anio = anio
            //console.log('ANIO: ', 'anio' in this.info.info_registro);
            //console.log('INFO: ', this.info.info_registro)
        },

        getMes(mes) {
            //console.log('INFO: ', this.info)
            this.info.info_registro.mes = mes
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

        getModalidad(modalidad) {
            //console.log('INFO: ', this.info)
            this.info[this.formName].modalidad = modalidad
        },
        getAccionesComunitarias(data) {
            //console.log('AC: ', acciones_comunitarias)
            let acciones_comunitarias = data
            this.errors = { ...this.errors, ...acciones_comunitarias.errors }

            this.info[this.formName] = {
                ...this.info[this.formName],
                ...acciones_comunitarias,
            }
        },
    },
    mounted() {
        this.formRequiereModalidadAndPoblacionFields =
            formsThatRequireModalidadAndPoblacionFields.includes(this.formName)
        this.info[this.formName] = {}
    },
}
</script>
