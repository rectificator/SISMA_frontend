<template>
    <div>
        <label for="objetivo_actividad">Objetivo de la actividad</label>
        <input
            v-model="info.objetivo_actividad"
            type="text"
            name="objetivo_actividad"
            id="objetivo_actividad"
        />
        <label for="no_actividades_realizadas"
            >Número de actividades realizadas</label
        >
        <input
            v-model="info.no_actividades_realizadas"
            type="number"
            name="no_actividades_realizadas"
            id="no_actividades_realizadas"
        />
        <label for="no_personas_alcanzadas"
            >Número de perzonas alcanzadas</label
        >
        <input
            v-model="info.no_personas_alcanzadas"
            type="number"
            name="no_personas_alcanzadas"
            id="no_personas_alcanzadas"
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
}
</script>
