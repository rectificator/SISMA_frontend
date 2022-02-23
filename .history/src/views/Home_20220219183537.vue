<template>
    <form
        @submit.prevent="submitForm"
        class="mt-6 flex flex-col space-y-6 px-4"
    >
        <px-select-anio @select-value="getAnio"></px-select-anio>
        <px-select-mes @select-value="getMes"></px-select-mes>
        <px-auto-complete-estado
            @select-value="getEstado"
        ></px-auto-complete-estado>
        <px-auto-complete-municipio
            @select-value="getMunicipio"
        ></px-auto-complete-municipio>
        <px-auto-complete-institucion
            @select-value="getInstitucion"
        ></px-auto-complete-institucion>
        <px-select-poblacion @select-value="getPoblacion"></px-select-poblacion>
        <px-select-tipo-actividad
            @select-value="getTipoActividad"
        ></px-select-tipo-actividad>
        <px-select-modalidad @select-value="getModalidad"></px-select-modalidad>
        <button
            type="submit"
            class="px-4 py-2 border border-gray-400 hover:border-gray-500 self-center"
        >
            Sign in
        </button>
    </form>
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
import config from '@/config'
export default {
    name: 'Home',
    components: {
        PxSelectAnio,
        PxSelectMes,
        PxAutoCompleteEstado,
        PxAutoCompleteMunicipio,
        PxAutoCompleteInstitucion,
        PxSelectPoblacion,
        PxSelectTipoActividad,
        PxSelectModalidad,
    },

    data() {
        return {
            apiBaseUrl: config.apiBaseUrl,
            info: {},
        }
    },

    methods: {
        async submitForm() {
            const res = await fetch(`${this.apiBaseUrl}acciones_comunitarias`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                // pass in the information from our form
                body: JSON.stringify(this.info),
            })
            res.json().then((data) => console.log(data))
        },

        getAnio(id_anio) {
            console.log('INFO: ', this.info)
            this.info.id_anio = id_anio
        },

        getMes(id_mes) {
            console.log('INFO: ', this.info)
            this.info.id_mes = id_mes
        },

        getEstado(value) {
            console.log('INFO: ', this.info)
            this.info.estado = value
        },

        getMunicipio(value) {
            console.log('INFO: ', this.info)
            this.info.auto_complete = value
        },

        getInstitucion(value) {
            console.log('INFO: ', this.info)
            this.info.institucion = value
        },

        getPoblacion(value) {
            console.log('INFO: ', this.info)
            this.info.poblacion = value
        },

        getTipoActividad(value) {
            console.log('INFO: ', this.info)
            this.info.tipo_actividad = value
        },

        getModalidad(id_modalidad) {
            console.log('INFO: ', this.info)
            this.info.id_modalidad = id_modalidad
        },
    },
}
</script>
