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
                type="mail"
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
            <label for="password">Repeat your password</label>
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
