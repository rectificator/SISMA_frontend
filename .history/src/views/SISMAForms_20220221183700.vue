<template>
    <div>
        <div class="bg-black text-white font-bold text-lg py-2 px-4">
            <p>{{ formName }}</p>
        </div>
        <form
            @submit.prevent="submitForm"
            class="mt-6 flex flex-col space-y-6 px-4"
        >
            <px-select-anio
                :error="validateAttempts > 0 ? !errors.anio : false"
                @select-value="getAnio"
            ></px-select-anio>
            <px-select-mes
                :error="validateAttempts > 0 ? !errors.mes : false"
                @select-value="getMes"
            ></px-select-mes>
            <px-auto-complete-estado
                :error="validateAttempts > 0 ? !errors.estado : false"
                @select-value="getEstado"
            />
            <px-auto-complete-municipio
                :error="validateAttempts > 0 ? !errors.municipio : false"
                @select-value="getMunicipio"
            />
            <px-auto-complete-institucion
                :error="validateAttempts > 0 ? !errors.institucion : false"
                @select-value="getInstitucion"
            />

            <px-select-poblacion
                v-if="formRequiereModalidadAndPoblacionFields"
                :error="validateAttempts > 0 ? !errors.poblacion : false"
                @select-value="getPoblacion"
            />
            <px-select-modalidad
                v-if="formRequiereModalidadAndPoblacionFields"
                :error="validateAttempts > 0 ? !errors.modalidad : false"
                @select-value="getModalidad"
            />

            <form-acciones-comunitarias
                v-if="formRoute == 'acciones_comunitarias'"
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
                info_registro: { registrada_por: 0 },
            },
            formRoute: this.$route.params.form,
            formName: this.$route.params.name,
            formRequiereModalidadAndPoblacionFields: false,
            errors: {},
            validate: false,
            validateAttempts: 0,
        }
    },
    methods: {
        validateForm() {
            this.addToError()
            this.validateAttempts++
            delete this.info[this.formRoute].errors
            console.log('INFO: ', this.info)
            if (
                Object.keys(this.info[this.formRoute]).length != 0 ||
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
                        this.validate = false
                        break
                    }
                }
            }
        },
        addToError() {
            this.addFieldToError('id_anio')
            this.addFieldToError('id_mes')
            this.addFieldToError('estado')
            this.addFieldToError('id_municipio')
            this.addFieldToError('id_institucion')
            if (this.formRequiereModalidadAndPoblacionFields) {
                this.addFieldToError('id_poblacion')
                this.addFieldToError('id_modalidad')
            }
        },
        addFieldToError(field) {
            //this.errors[field] = field in this.info.info_registro
            this.$set(
                this.errors,
                field,
                field in this.info.info_registro ||
                    field in this.info[this.formRoute]
            )
        },
        async submitForm() {
            this.validateForm()
            if (this.validate == true) {
                delete this.info[this.formRoute].errors
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
            this.info.info_registro.id_anio = anio.id
            //console.log('ANIO: ', 'anio' in this.info.info_registro);
            //console.log('INFO: ', this.info.info_registro)
        },

        getMes(mes) {
            //console.log('INFO: ', this.info)
            this.info.info_registro.id_mes = mes.id
        },

        getEstado(value) {
            //console.log('INFO: ', this.info)
            this.info.info_registro.estado = value
        },

        getMunicipio(value) {
            //console.log('INFO: ', this.info)
            this.info.info_registro.id_municipio = value.id
        },

        getInstitucion(value) {
            //console.log('INFO: ', this.info)
            this.info.info_registro.id_institucion = value.id
        },

        getPoblacion(value) {
            //console.log('INFO: ', this.info)
            this.info[this.formRoute].id_poblacion = value.id
        },

        getModalidad(modalidad) {
            //console.log('INFO: ', this.info)
            this.info[this.formRoute].id_modalidad = modalidad
        },
        getAccionesComunitarias(data) {
            //console.log('AC: ', acciones_comunitarias)
            let acciones_comunitarias = data
            this.errors = { ...this.errors, ...acciones_comunitarias.errors }

            this.info[this.formRoute] = {
                ...this.info[this.formRoute],
                ...acciones_comunitarias,
            }
        },
    },
    mounted() {
        this.formRequiereModalidadAndPoblacionFields =
            formsThatRequireModalidadAndPoblacionFields.includes(this.formRoute)
        this.info[this.formRoute] = {}
    },
}
</script>
