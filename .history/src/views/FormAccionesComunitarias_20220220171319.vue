<template>
    <div class="mt-6 flex flex-col space-y-6">
        <px-select-tipo-actividad @select-value="getTipoActividad" />
        <div>
            <label for="objetivo_actividad">Objetivo de la actividad</label>
            <input
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
            info: {errors: this.errors},
            errors = {},
        }
    },
    methods: {
        getData() {
            this.validateForm()
            this.$emit('change', this.info)
        },

        getTipoActividad(value) {
            //console.log('INFO: ', this.info)
            this.info.tipo_actividad = value
            this.getData()
        },
        validateForm() {
            this.validateField('objetivo_actividad')
            this.validateField('no_personas_alcanzadas')
            this.validateField('no_actividades_realizadas')
            this.validateField('tipo_actividad')
        },
        validateField(field) {
            this.erraseUndefinedField(field)
            this.errors[field] = field in this.info
        },
        erraseUndefinedField(field) {
            if (field in this.info) {
                if (this.info[field] == undefined || this.info[field] == '') {
                    delete this.info[field]
                }
            }
        },
    },
}
</script>
