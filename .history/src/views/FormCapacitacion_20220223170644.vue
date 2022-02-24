<template>
    <div class="mt-6 flex flex-col space-y-6">
        <div>
            <label for="capacitaciones_realizadas"
                >Capacitaciones realizadas</label
            >
            <input
                required="true"
                v-model="info.capacitaciones_realizadas"
                type="number"
                :name="capacitaciones_realizadas"
                :id="capacitaciones_realizadas"
                @change="getData"
                min="0"
                step="1"
                onkeyup="this.value = this.value.replace(/[^\d]/, '')"
                title="Only Number"
                class="w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            />
        </div>
        <p class="mt-4 text-lg">Perzonas alcanzadas</p>
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
    name: 'FormCapacitacion',
    components: {},
    data() {
        return {
            info: {
                errors: {},
            },
            decimalNumberQuestions: [
                {
                    tag: 'personas_alcanzadas_f_5_9_anos',
                    label: 'Consultas subsecuentes',
                },
                {
                    tag: 'personas_alcanzadas_m_5_9_anos',
                    label: 'Personas detectadas y atendidas por depresion',
                },
                {
                    tag: 'personas_alcanzadas_nobinario_5_9_anos',
                    label: 'Personas detectadas y atendidas por ansiedad',
                },
                {
                    tag: 'personas_alcanzadas_f_10_14_anos',
                    label: 'Personas detectadas y atendidas por consumo de sustancias',
                },
                {
                    tag: 'personas_alcanzadas_m_10_14_anos',
                    label: 'Personas detectadas y atendidas por niños y adolescentes',
                },
                {
                    tag: 'personas_alcanzadas_nobinario_10_14_anos',
                    label: 'Personas detectadas y atendidas por demencia',
                },
                {
                    tag: 'personas_alcanzadas_f_15_19_anos',
                    label: 'Personas detectadas y atendidas por epilepsia',
                },
                {
                    tag: 'personas_alcanzadas_m_15_19_anos',
                    label: 'Personas detectadas y atendidas por psicosis',
                },
                { tag: 'personas_alcanzadas_nobinario_15_19_anos', label: '' },
                { tag: 'personas_alcanzadas_f_20_29_anos', label: '' },
                { tag: 'personas_alcanzadas_m_20_29_anos', label: '' },
                { tag: 'personas_alcanzadas_nobinario_20_29_anos', label: '' },
                { tag: 'personas_alcanzadas_f_30_49_anos', label: '' },
                { tag: 'personas_alcanzadas_m_30_49_anos', label: '' },
                { tag: 'personas_alcanzadas_nobinario_30_49_anos', label: '' },
                { tag: 'personas_alcanzadas_f_50_64_anos', label: '' },
                { tag: 'personas_alcanzadas_m_50_64_anos', label: '' },
                { tag: 'personas_alcanzadas_nobinario_50_64_anos', label: '' },
                { tag: 'personas_alcanzadas_f_65_mas_anos', label: '' },
                { tag: 'personas_alcanzadas_m_65_mas_anos', label: '' },
                { tag: 'personas_alcanzadas_nobinario_65_mas_anos', label: '' },
                { tag: 'total_personas_alcanzadas_f', label: '' },
                { tag: 'total_personas_alcanzadas_m', label: '' },
                { tag: 'total_personas_alcanzadas_nobinario', label: '' },
                { tag: 'total_personas_alcanzadas_general', label: '' },
                { tag: 'total_personas_alcanzadas_5_9_anos', label: '' },
                { tag: 'total_personas_alcanzadas_10_14_anos', label: '' },
                { tag: 'total_personas_alcanzadas_15_19_anos', label: '' },
                { tag: 'total_personas_alcanzadas_20_29_anos', label: '' },
                { tag: 'total_personas_alcanzadas_30_49_anos', label: '' },
                { tag: 'total_personas_alcanzadas_50_64_anos', label: '' },
                { tag: 'total_personas_alcanzadas_65_mas_anos', label: '' },
            ],
        }
    },
    methods: {
        getData() {
            this.addToError()
            this.$emit('change', this.info)
        },
        addToError() {
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
