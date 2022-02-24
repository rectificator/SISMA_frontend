<template>
    <div class="mt-6 flex flex-col space-y-6">
        <div
            v-for="question in decimalNumberQuestions"
            :key="decimalNumberQuestions.indexOf(question)"
        >
            <label :for="question.tag">{{ question.label }}</label>
            <input
                required="true"
                v-model="info[question.tag]"
                type="number"
                :name="question.tag"
                :id="question.tag"
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
            decimalNumberQuestions: [
                {
                    tag: 'consultas_primera_vez',
                    label: 'Consultas de primera vez',
                },
                {
                    tag: 'consultas_subsecuentes',
                    label: 'Consultas subsecuentes',
                },
                {
                    tag: 'personas_detectadas_atendidas_por_ depresion',
                    label: 'Personas detectadas y atendidas por depresion',
                },
                {
                    tag: 'personas_detectadas_atendidas_por_ansiedad',
                    label: 'Personas detectadas y atendidas por ansiedad',
                },
                {
                    tag: 'personas_detectadas_atendidas_por_consumo_de_sustancias',
                    label: 'Personas detectadas y atendidas por consumo de sustancias',
                },
                {
                    tag: 'personas_detectadas_atendidas_por_ninos_y_adolescentes',
                    label: 'Personas detectadas y atendidas por niños y adolescentes',
                },
                {
                    tag: 'personas_detectadas_atendidas_por_demencia',
                    label: 'Personas detectadas y atendidas por demencia',
                },
                {
                    tag: 'personas_detectadas_atendidas_por_epilepsia',
                    label: 'Personas detectadas y atendidas por epilepsia',
                },
                {
                    tag: 'personas_detectadas_atendidas_por_psicosis',
                    label: 'Personas detectadas y atendidas por psicosis',
                },
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
                questionIndex < this.decimalNumberQuestions.length;
                questionIndex++
            ) {
                this.addFieldToError(
                    this.decimalNumberQuestions[questionIndex].tag
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
