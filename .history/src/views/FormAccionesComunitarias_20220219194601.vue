<template>
    <div class="mt-6 flex flex-col space-y-6">
        <label for="objetivo_actividad">Objetivo de la actividad</label>
        <input
            v-model="info.objetivo_actividad"
            type="text"
            name="objetivo_actividad"
            id="objetivo_actividad"
            @change="getData"
            class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
        />
        <label for="no_actividades_realizadas"
            >Número de actividades realizadas</label
        >
        <input
            v-model="info.no_actividades_realizadas"
            type="number"
            name="no_actividades_realizadas"
            id="no_actividades_realizadas"
            @change="getData"
            class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
        />
        <label for="no_personas_alcanzadas"
            >Número de perzonas alcanzadas</label
        >
        <input
            v-model="info.no_personas_alcanzadas"
            type="number"
            name="no_personas_alcanzadas"
            id="no_personas_alcanzadas"
            @change="getData"
            class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
        />
    </div>
</template>

<script>
export default {
    name: 'FormAccionesComunitarias',
    data() {
        return {
            info: {},
        }
    },
    methods: {
        getData() {
            this.$emit('changed', this.info)
        },
    },
}
</script>
