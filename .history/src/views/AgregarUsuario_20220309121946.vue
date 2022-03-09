<template>
    <div class="mt-6 flex flex-col space-y-6">
        <div>
            <label for="nombre_usuario">Nombre de usuario</label>
            <input
                required="true"
                v-model="info.nombre_usuario"
                type="text"
                name="nombre_usuario"
                id="nombre_usuario"
                @change="getData"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>

        <div>
            <label for="nombre_publico">Nombre público</label>
            <input
                required="true"
                v-model="info.nombre_publico"
                type="text"
                name="nombre_publico"
                id="nombre_publico"
                @change="getData"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>
        <div>
            <label for="correo">Correo electrónico</label>
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
            <label for="privilegios">Privilegios</label>
            <input
                required="true"
                v-model="info.privilegios"
                type="number"
                name="privilegios"
                id="privilegios"
                @change="getData"
                min="0"
                step="1"
                onkeyup="this.value = this.value.replace(/[^\d]/, '')"
                title="Only Number"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>

        <div>
            <label for="password">Password</label>
            <input
                required="true"
                v-model="info.password"
                type="password"
                autocomplete="current-password"
                name="password"
                id="password"
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
export default {
    name: 'FormAccionesPrevencionSalud',
    components: {},
    data() {
        return {
            info: {
                errors: {},
            },
            tipoAccionObjects: [],
            updateControlValue: undefined,
        }
    },
    computed: {},
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
            this.addFieldToError('nombre_usuario')
            this.addFieldToError('nombre_publico')
            this.addFieldToError('apellido_paterno')
            this.addFieldToError('privilegios')
            this.addFieldToError('password')
            this.addFieldToError('profesion')
            this.addFieldToError('nivel_escolaridad')
            this.addFieldToError('anios_servicio')
            this.addFieldToError('unidad_medica_adscripcion')
            this.addFieldToError('cargo_asignado')
            this.addFieldToError('fecha_capacitacion')
            this.addFieldToError('correo')
            this.addFieldToError('telefono')
            this.addFieldToError('presupuesto')
        },
        addFieldToError(field) {
            let fieldInfo = this.info[field]
            this.info.errors[field] = fieldInfo != '' && fieldInfo != undefined
        },
    },
}
</script>
