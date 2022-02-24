<template>
    <div class="mt-6 flex flex-col space-y-6">
        <div
            v-for="question in decimalNumberQuestionLabels"
            :key="decimalNumberQuestionLabels.indexOf(question)"
        >
            <label :for="question">Número de actividades realizadas</label>
            <input
                required="true"
                v-model="info[question]"
                type="number"
                :name="question"
                :id="question"
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
export default {
    name: 'FormAtencionSalud',
    components: {},
    data() {
        return {
            info: {
                errors: {},
            },
            decimalNumberQuestionLabels: [
                'consultas_primera_vez',
                'consultas_subsecuentes',
                'personas_detectadas_atendidas_por_ depresion',
                'personas_detectadas_atendidas_por_ansiedad',
                'personas_detectadas_atendidas_por_consumo_de_sustancias',
                'personas_detectadas_atendidas_por_ninos_y_adolescentes',
                'personas_detectadas_atendidas_por_demencia',
                'personas_detectadas_atendidas_por_epilepsia',
                'personas_detectadas_atendidas_por_psicosis',
            ],
        }
    },
    methods: {
        getData() {
            this.addToError()
            this.$emit('change', this.info)
        },
        addToError() {
            this.addFieldToError('objetivo_actividad')
            this.addFieldToError('no_personas_alcanzadas')
            this.addFieldToError('no_actividades_realizadas')
            this.addFieldToError('id_tipo_actividad')
            for (
                let questionIndex = 0;
                questionIndex < this.decimalNumberQuestionLabels.length;
                questionIndex++
            ) {
                this.addFieldToError(
                    this.decimalNumberQuestionLabels[questionIndex]
                )
            }
        },
        addFieldToError(field) {
            let fieldInfo = this.info[field]
            this.info.errors[field] = fieldInfo != '' && fieldInfo != undefined
        },
    },
}
</script>
