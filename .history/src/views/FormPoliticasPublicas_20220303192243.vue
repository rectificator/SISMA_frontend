<template>
    <div class="mt-6 flex flex-col space-y-6">
        <div>
            <label for="reuniones_de_trabajo">Reuniones de trabajo</label>
            <input
                required="true"
                v-model="info.reuniones_de_trabajo"
                type="number"
                name="reuniones_de_trabajo"
                id="reuniones_de_trabajo"
                @change="getData"
                min="0"
                step="1"
                onkeyup="this.value = this.value.replace(/[^\d]/, '')"
                title="Only Number"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>
        <div>
            <label for="politicas_publicas">Políticas públicas</label>
            <input
                required="true"
                v-model="info.politicas_publicas"
                type="number"
                name="politicas_publicas"
                id="politicas_publicas"
                @change="getData"
                min="0"
                step="1"
                onkeyup="this.value = this.value.replace(/[^\d]/, '')"
                title="Only Number"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>
        <div>
            <label for="convenios">Convenios</label>
            <input
                required="true"
                v-model="info.convenios"
                type="number"
                name="convenios"
                id="convenios"
                @change="getData"
                min="0"
                step="1"
                onkeyup="this.value = this.value.replace(/[^\d]/, '')"
                title="Only Number"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>
        <div>
            <label for="instituciones_participantes_en_el_convenio"
                >Instituciones participantes en el convenio</label
            >
            <input
                required="true"
                v-model="info.instituciones_participantes_en_el_convenio"
                type="text"
                name="instituciones_participantes_en_el_convenio"
                id="instituciones_participantes_en_el_convenio"
                @change="getData"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>
        <div>
            <label for="programa_aplicado">Programa aplicado</label>
            <input
                required="true"
                v-model="info.programa_aplicado"
                type="text"
                name="programa_aplicado"
                id="programa_aplicado"
                @change="getData"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>
        <div>
            <label for="beneficios_otorgados">Beneficios otorgados</label>
            <input
                required="true"
                v-model="info.beneficios_otorgados"
                type="number"
                name="beneficios_otorgados"
                id="beneficios_otorgados"
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
export default {
    name: 'FormAccionesPrevencionSalud',
    components: {},
    data() {
        return {
            info: {
                errors: {},
            },
            updateControlValue: undefined,
        }
    },
    computed: {},
    methods: {
        getData() {
            this.addToError()
            this.$emit('change', this.info)
        },
        addToError() {
            this.addFieldToError('reuniones_de_trabajo')
            this.addFieldToError('politicas_publicas')
            this.addFieldToError('convenios')
            this.addFieldToError('instituciones_participantes_en_el_convenio')
            this.addFieldToError('programa_aplicado')
            this.addFieldToError('beneficios_otorgados')
            this.addFieldToError('comentarios_adicionales')
        },
        addFieldToError(field) {
            let fieldInfo = this.info[field]
            this.info.errors[field] = fieldInfo != '' && fieldInfo != undefined
        },
    },
}
</script>
