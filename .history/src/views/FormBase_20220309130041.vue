<template>
    <div class="px-6">
        <div class="fixed block pt-4 px-2 pr-6 bg-red-100 z-50">
            <px-header :links="links" />
            <div
                class="w-full shadow bg-redSisma text-white font-bold text-lg py-2 px-4 mt-2"
            >
                <p>{{ formName }}</p>
            </div>
        </div>
        <div class="relative block">
            <form
                @submit.prevent="submitForm"
                class="absolute w-full flex flex-col space-y-6 px-4 mt-40 z-0"
            >
                <form-agregar-usuario
                    v-if="formRoute == availableForms.agregar_usuario"
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
    </div>
</template>

<script>
import PxHeader from '@/components/PxHeader'
import FormAgregarUsuario from '@/views/FormAgregarUsuario'
import config from '@/config'

export default {
    name: 'FormBase',
    components: {
        PxHeader,
        FormAgregarUsuario,
    },
    data() {
        return {
            jwt: '',
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
            mesObjects: [],
            poblacionObjects: [],
            availableForms: {
                agregar_usuario: 'agregar_usuario',
            },
            formsThatRequireModalidadAndPoblacionFields: [],
            updateMesControl: undefined,
            updatePoblacionControl: undefined,
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
        }
    },
    computed: {},
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
            /* this.addFieldToError('id_anio')
            this.addFieldToError('id_mes')
            this.addFieldToError('id_estado')
            this.addFieldToError('id_municipio')
            this.addFieldToError('id_institucion') */
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
            //console.log('ERRORS: ', this.errors)
            if (this.validate == true) {
                delete this.info[this.formRoute].errors
                let res = await fetch(`${this.apiBaseUrl}${this.formRoute}`, {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        api: 123,
                        Authorization: `Bearer ${this.jwt}`,
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
                alert('Aun hay campos sin información')
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
    created() {},
    mounted() {
        this.jwt = localStorage.jwt

        this.info[this.formRoute] = {}
    },
}
</script>
