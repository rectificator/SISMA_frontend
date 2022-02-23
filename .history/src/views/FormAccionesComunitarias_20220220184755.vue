<template>
    <div class="mt-6 flex flex-col space-y-6">
        <px-select-tipo-actividad @select-value="getTipoActividad" />
        <div>
            <label for="objetivo_actividad">Objetivo de la actividad</label>
            <input
                required="true"
                v-model="info.objetivo_actividad"
                type="text"
                name="objetivo_actividad"
                id="objetivo_actividad"
                @change="getData"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>
        <div>
            <label for="no_actividades_realizadas"
                >Número de actividades realizadas</label
            >
            <input
                required="true"
                v-model="info.no_actividades_realizadas"
                type="number"
                name="no_actividades_realizadas"
                id="no_actividades_realizadas"
                @change="getData"
                min="0"
                step="1"
                onkeyup="this.value = this.value.replace(/[^\d]/, '')"
                title="Only Number"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>
        <div>
            <label for="no_personas_alcanzadas"
                >Número de perzonas alcanzadas</label
            >
            <input
                required="true"
                v-model="info.no_personas_alcanzadas"
                type="number"
                name="no_personas_alcanzadas"
                id="no_personas_alcanzadas"
                @change="getData"
                min="0"
                step="1"
                onkeyup="this.value = this.value.replace(/[^\d]/, '')"
                title="Only Number"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>
    </div>
</template>

<script>
import PxSelectTipoActividad from '@/components/PxSelectTipoActividad'

export default {
    name: 'FormAccionesComunitarias',
    components: {
        PxSelectTipoActividad,
    },
    data() {
        return {
            info: {
                errors: {},
            },
        }
    },
    methods: {
        getData() {
            this.addToError()
            this.$emit('change', this.info)
        },

        getTipoActividad(value) {
            //console.log('INFO: ', this.info)
            this.info.tipo_actividad = value
            this.getData()
        },
        addToError() {
            this.addFieldToError('objetivo_actividad')
            this.addFieldToError('no_personas_alcanzadas')
            this.addFieldToError('no_actividades_realizadas')
            this.addFieldToError('tipo_actividad')
        },
        addFieldToError(field) {
            console.log(this.info.errors);
            this.info.errors[field] = field in this.info
        },
    },
}
</script>
