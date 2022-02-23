<template>
    <div>
        <div class="bg-black text-white">
            <p>{{ form }}</p>
        </div>
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
            <px-select-poblacion
                @select-value="getPoblacion"
            ></px-select-poblacion>
            <px-select-tipo-actividad
                @select-value="getTipoActividad"
            ></px-select-tipo-actividad>
            <px-select-modalidad
                @select-value="getModalidad"
            ></px-select-modalidad>
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
export default {
    name: 'SismaForms',
    data() {
        return {
            info: {},
            form: this.$route.params.form,
        }
    },
}
</script>
