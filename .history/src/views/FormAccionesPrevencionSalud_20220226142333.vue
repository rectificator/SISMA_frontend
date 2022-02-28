<template>
    <div class="mt-6 flex flex-col space-y-6">
        <px-checkbox-group-tipo-accion
            :error="false"
            v-model="tipoAccionObjects"
        />
        <span v-show="false">{{ getTipoAccion(tipoAccionIds) }}</span>
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
        <div>
            <label for="comentarios_adicionales">Comentarios adicionales</label>
            <textarea
                required="true"
                v-model="info.comentarios_adicionales"
                name="comentarios_adicionales"
                id="comentarios_adicionales"
                rows="7"
                cols="70"
                @change="getData"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>
    </div>
</template>

<script>
import PxCheckboxGroupTipoAccion from '../components/PxCheckboxGroupTipoAccion.vue'

export default {
    name: 'FormAccionesPrevencionSalud',
    components: {
        PxCheckboxGroupTipoAccion,
    },
    data() {
        return {
            info: {
                errors: {},
            },
            tipoAccionObjects: [],
            updateControlValue: undefined,
        }
    },
    computed: {
        tipoAccionIds() {
            //console.log('TAO', this.tipoAccionObjects)
            return this.tipoAccionObjects.map((tipo_accion) => {
                return tipo_accion.id
            })
        },
    },
    methods: {
        getData() {
            this.addToError()
            this.$emit('change', this.info)
        },

        getTipoAccion(value) {
            console.log('APS: ', this.info)
            if (this.updateControlValue != value) {
                this.updateControlValue = value
                this.info.id_tipo_accion = value
                this.getData()
            }
        },
        addToError() {
            this.addFieldToError('objetivo_actividad')
            this.addFieldToError('no_personas_alcanzadas')
            this.addFieldToError('no_actividades_realizadas')
            this.addFieldToError('id_tipo_accion')
            this.addFieldToError('comentarios_adicionales')
        },
        addFieldToError(field) {
            let fieldInfo = this.info[field]
            this.info.errors[field] = fieldInfo != '' && fieldInfo != undefined
        },
    },
}
</script>
