<template>
    <form @submit.prevent="submitForm" class="mt-9">
        <px-select-modalidad @select-value="getModalidad"></px-select-modalidad>
        <px-auto-complete-estado
            @select-value="getEstado"
        ></px-auto-complete-estado>
        <button type="submit">Sign in</button>
    </form>
</template>

<script>
import PxSelectAnio from '@/components/PxSelectAnio'
import PxSelectMes from '@/components/PxSelectMes'
import PxAutoCompleteEstado from '@/components/PxAutoCompleteEstado'
import PxAutoCompleteMuncicipio from '@/components/PxAutoCompleteMuncicipio'
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
        PxAutoCompleteMuncicipio,
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

        getModalidad(id_modalidad) {
            console.log('INFO: ', this.info)
            this.info.id_modalidad = id_modalidad
        },
        getEstado(value) {
            console.log('INFO: ', this.info)
            this.info.auto_complete = value
        },
    },
}
</script>
