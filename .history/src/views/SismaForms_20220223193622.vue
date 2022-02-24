<template>
    <div>
        <px-header :links="links" />
        <div class="bg-black text-white font-bold text-lg py-2 px-4">
            <p>{{ formName }}</p>
        </div>
        <form
            @submit.prevent="submitForm"
            class="mt-6 flex flex-col space-y-6 px-4"
        >
            <px-select-anio
                :error="validateAttempts > 0 ? !errors.id_anio : false"
                @select-value="getAnio"
            />

            <px-checkbox-group-mes
                :error="validateAttempts > 0 ? !errors.id_mes : false"
                v-model="mesObjects"
            ></px-checkbox-group-mes>
            <span v-show="false">{{ getMeses(mesIds) }}</span>

            <px-auto-complete-estado
                :error="validateAttempts > 0 ? !errors.id_estado : false"
                @select-value="getEstado"
            />

            <px-auto-complete-municipio
                :error="validateAttempts > 0 ? !errors.id_municipio : false"
                @select-value="getMunicipio"
            />

            <px-auto-complete-institucion
                :error="validateAttempts > 0 ? !errors.id_institucion : false"
                @select-value="getInstitucion"
            />

            <px-select-poblacion
                v-if="formRequiereModalidadAndPoblacionFields"
                :error="validateAttempts > 0 ? !errors.id_poblacion : false"
                @select-value="getPoblacion"
            />

            <px-select-modalidad
                v-if="formRequiereModalidadAndPoblacionFields"
                :error="validateAttempts > 0 ? !errors.id_modalidad : false"
                @select-value="getModalidad"
            />

            <form-acciones-comunitarias
                v-if="formRoute == availableForms.acciones_comunitarias"
                @change="getComplementaryFormData"
            />

            <form-acciones-prevencion-salud
                v-if="formRoute == availableForms.acciones_prevencion_salud"
                @change="getComplementaryFormData"
            />

            <form-atencion-salud
                v-if="formRoute == availableForms.atencion_salud"
                @change="getComplementaryFormData"
            />

            <form-capacitacion
                v-if="formRoute == availableForms.capacitacion"
                @change="getComplementaryFormData"
            />

            <form-suicidio
                v-if="formRoute == availableForms.suicidio"
                @change="getComplementaryFormData"
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
import PxHeader from '@/components/PxHeader'
import PxSelectAnio from '@/components/PxSelectAnio'
import PxCheckboxGroupMes from '@/components/PxCheckboxGroupMes'
import PxAutoCompleteEstado from '@/components/PxAutoCompleteEstado'
import PxAutoCompleteMunicipio from '@/components/PxAutoCompleteMunicipio'
import PxAutoCompleteInstitucion from '@/components/PxAutoCompleteInstitucion'
import PxSelectPoblacion from '@/components/PxSelectPoblacion'
import PxSelectModalidad from '@/components/PxSelectModalidad'
import FormAccionesComunitarias from '@/views/FormAccionesComunitarias'
import FormAccionesPrevencionSalud from '@/views/FormAccionesPrevencionSalud'
import FormAtencionSalud from '@/views/FormAtencionSalud'
import FormCapacitacion from '@/views/FormCapacitacion'
import FormSuicidio from '@/views/FormSuicidio'
import config from '@/config'

export default {
    name: 'SismaForms',
    components: {
        PxHeader,
        PxSelectAnio,
        PxCheckboxGroupMes,
        PxAutoCompleteEstado,
        PxAutoCompleteMunicipio,
        PxAutoCompleteInstitucion,
        PxSelectPoblacion,
        PxSelectModalidad,
        FormAccionesComunitarias,
        FormAccionesPrevencionSalud,
        FormAtencionSalud,
        FormCapacitacion,
        FormSuicidio,
    },
    data() {
        return {
            apiBaseUrl: config.apiBaseUrl,
            info: {
                info_registro: { registrada_por: 47 },
            },
            formRoute: this.$route.params.form,
            formName: this.$route.params.name,
            formRequiereModalidadAndPoblacionFields: false,
            errors: {},
            validate: false,
            validateAttempts: 0,
            mesObjects: [],
            availableForms: {
                acciones_comunitarias: 'acciones_comunitarias',
                acciones_prevencion_salud: 'acciones_prevencion_salud',
                atencion_salud: 'atencion_salud',
                capacitacion: 'capacitacion',
                suicidio: 'suicidio',
            },
            formsThatRequireModalidadAndPoblacionFields: [],
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
        }
    },
    computed: {
        mesIds() {
            return this.mesObjects.map((mes) => {
                return mes.id
            })
        },
    },
    methods: {
        validateForm() {
            this.addToError()
            this.validateAttempts++
            delete this.info[this.formRoute].errors
            //console.log('INFO: ', this.info)
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
            this.addFieldToError('id_estado')
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
                this.fieldValueIsNotEmpty(field, this.info.info_registro) ||
                    this.fieldValueIsNotEmpty(field, this.info[this.formRoute])
            )
        },
        fieldIsInObject(field, object) {
            return field in object
        },
        fieldValueIsNotEmpty(field, object) {
            let fieldInObject = this.fieldIsInObject(field, object)
            if (fieldInObject) {
                let fieldIsNotUndefined = object[field] != undefined
                let fieldIsNotEmptyArray = object[field] != []
                let fieldIsNotEmptyString = object[field] != ''
                let fieldIsNotNull = object[field] != null
                return (
                    fieldIsNotUndefined &&
                    fieldIsNotEmptyArray &&
                    fieldIsNotEmptyString &&
                    fieldIsNotNull
                )
            } else {
                return fieldInObject
            }
        },
        async submitForm(event) {
            this.validateForm()
            if (this.validate == true) {
                delete this.info[this.formRoute].errors
                let res = await fetch(`${this.apiBaseUrl}${this.formRoute}`, {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.info),
                })
                res.json().then((data) => console.log(data))
                event.target.reset()
                this.$router.push({
                    name: 'home',
                    replace: true,
                })
            } else {
                console.log('Aun hay campos sin información')
            }
        },

        getAnio(anio) {
            this.info.info_registro.id_anio = anio.id
        },

        getMeses(meses) {
            //console.log('INFO: ', this.info)
            this.info.info_registro.id_mes = meses
            this.log(this.info.info_registro.id_mes)
        },

        getEstado(value) {
            //console.log('INFO: ', this.info)
            this.info.info_registro.id_estado = value.id
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
            this.info[this.formRoute].id_poblacion = value
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
        getComplementaryFormData(data) {
            //console.log('AC: ', acciones_comunitarias)
            let complementaryFormData = data
            this.errors = { ...this.errors, ...complementaryFormData.errors }

            this.info[this.formRoute] = {
                ...this.info[this.formRoute],
                ...complementaryFormData,
            }
        },
        log(...values) {
            console.log(...values)
        },
    },
    created() {
        this.formsThatRequireModalidadAndPoblacionFields = [
            this.availableForms.acciones_comunitarias,
            this.availableForms.acciones_prevencion_salud,
            this.availableForms.capacitacion,
        ]
    },
    mounted() {
        this.formRequiereModalidadAndPoblacionFields =
            this.formsThatRequireModalidadAndPoblacionFields.includes(
                this.formRoute
            )
        this.info[this.formRoute] = {}
    },
}
</script>
