<template>
    <div class="mt-6 flex flex-col space-y-6">
        <div>
            <label for="nombre">Nombre</label>
            <input
                required="true"
                v-model="info.nombre"
                type="text"
                name="nombre"
                id="nombre"
                @change="getData"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>

        <div>
            <label for="apellido_materno">Apellido materno</label>
            <input
                required="true"
                v-model="info.apellido_materno"
                type="text"
                name="apellido_materno"
                id="apellido_materno"
                @change="getData"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>
        <div>
            <label for="apellido_paterno">Apellido paterno</label>
            <input
                required="true"
                v-model="info.apellido_paterno"
                type="text"
                name="apellido_paterno"
                id="apellido_paterno"
                @change="getData"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>

        <div>
            <label for="edad">Edad</label>
            <input
                required="true"
                v-model="info.edad"
                type="number"
                name="edad"
                id="edad"
                @change="getData"
                min="0"
                step="1"
                onkeyup="this.value = this.value.replace(/[^\d]/, '')"
                title="Only Number"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>

        <div>
            <label for="sexo">Sexo</label>
            <input
                required="true"
                v-model="info.sexo"
                type="text"
                name="sexo"
                id="sexo"
                @change="getData"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>

        <div>
            <label for="profesion">Profesión</label>
            <input
                required="true"
                v-model="info.profesion"
                type="text"
                name="profesion"
                id="profesion"
                @change="getData"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>
        <div>
            <label for="nivel_escolaridad">Nivel de escolaridad</label>
            <input
                required="true"
                v-model="info.nivel_escolaridad"
                type="text"
                name="nivel_escolaridad"
                id="nivel_escolaridad"
                @change="getData"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>

        <div>
            <label for="anios_servicio">Años de servicio</label>
            <input
                required="true"
                v-model="info.anios_servicio"
                type="number"
                name="anios_servicio"
                id="anios_servicio"
                @change="getData"
                min="0"
                step="1"
                onkeyup="this.value = this.value.replace(/[^\d]/, '')"
                title="Only Number"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>

        <div>
            <label for="institucion">Institución</label>
            <input
                required="true"
                v-model="info.institucion"
                type="text"
                name="institucion"
                id="institucion"
                @change="getData"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>

        <div>
            <label for="unidad_medica_adscripcion"
                >Unidad médica de adscripción</label
            >
            <input
                required="true"
                v-model="info.unidad_medica_adscripcion"
                type="text"
                name="unidad_medica_adscripcion"
                id="unidad_medica_adscripcion"
                @change="getData"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>

        <div>
            <label for="cargo_asignado">Cargo asignado</label>
            <input
                required="true"
                v-model="info.cargo_asignado"
                type="text"
                name="cargo_asignado"
                id="cargo_asignado"
                @change="getData"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>

        <div>
            <label for="fecha_capacitacion">Fecha de capacitación</label>
            <input
                required="true"
                v-model="info.fecha_capacitacion"
                type="text"
                name="fecha_capacitacion"
                id="fecha_capacitacion"
                @change="getData"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>

        <div>
            <label for="correo">Correo</label>
            <input
                required="true"
                v-model="info.correo"
                type="text"
                name="correo"
                id="correo"
                @change="getData"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>

        <div>
            <label for="telefono">Teléfono</label>
            <input
                required="true"
                v-model="info.telefono"
                type="text"
                name="telefono"
                id="telefono"
                @change="getData"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>

        <div>
            <label for="presupuesto">Presupuesto</label>
            <input
                required="true"
                v-model="info.presupuesto"
                type="text"
                name="presupuesto"
                id="presupuesto"
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
            //console.log('APS: ', this.info)
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
