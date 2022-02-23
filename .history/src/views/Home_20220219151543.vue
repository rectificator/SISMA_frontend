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
import PxSelectModalidad from '@/components/PxSelectModalidad'
import PxAutoCompleteMes from '@/components/PxAutoCompleteMes'
import PxAutoCompleteEstado from '@/components/PxAutoCompleteEstado'
import PxAutoCompleteMuncicipio from '@/components/PxAutoCompleteMuncicipio'
import PxAutoCompleteInstitucion from '@/components/PxAutoCompleteInstitucion'
import config from '@/config'
export default {
    name: 'Home',
    components: {
        PxSelectModalidad,
        PxAutoCompleteEstado,
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
