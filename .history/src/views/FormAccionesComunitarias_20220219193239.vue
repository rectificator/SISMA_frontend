<template>
    <div>
        <label for="objetivo_actividad">Objetivo de la actividad</label>
        <input type="text" name="objetivo_actividad" id="objetivo_actividad" />
        <label for="no_actividades_realizadas"
            >Número de actividades realizadas</label
        >
        <input
            type="number"
            name="no_actividades_realizadas"
            id="no_actividades_realizadas"
        />
        <label for="no_personas_alcanzadas"
            >Número de perzonas alcanzadas</label
        >
        <input
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
