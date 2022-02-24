<template>
    <div class="mt-6 flex flex-col space-y-6">
        <px-binary-select
            info="constancia"
            label="¿Se otorgó constancia?"
            :error="false"
            @select-value="getConstancia"
        />
        <div>
            <label for="capacitaciones_realizadas"
                >Capacitaciones realizadas</label
            >
            <input
                required="true"
                v-model="info.capacitaciones_realizadas"
                type="number"
                name="capacitaciones_realizadas"
                id="capacitaciones_realizadas"
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
import PxBinarySelect from '@/components/PxBinarySelect'
export default {
    name: 'FormCapacitacion',
    components: {
        PxBinarySelect,
    },
    data() {
        return {
            info: {
                errors: {},
            },
            decimalNumberQuestions: [
                {
                    tag: 'personas_alcanzadas_f_5_9_anos',
                    label: 'Femenino 5-9 años',
                },
                {
                    tag: 'personas_alcanzadas_m_5_9_anos',
                    label: 'Masculino 5-9 años',
                },
                {
                    tag: 'personas_alcanzadas_nobinario_5_9_anos',
                    label: 'No binario 5-9 años',
                },
                {
                    tag: 'personas_alcanzadas_f_10_14_anos',
                    label: 'Femenino 10-14 años',
                },
                {
                    tag: 'personas_alcanzadas_m_10_14_anos',
                    label: 'Masculino 10-14 años',
                },
                {
                    tag: 'personas_alcanzadas_nobinario_10_14_anos',
                    label: 'No binario 10-14 años',
                },
                {
                    tag: 'personas_alcanzadas_f_15_19_anos',
                    label: 'Femenino 15-19 años',
                },
                {
                    tag: 'personas_alcanzadas_m_15_19_anos',
                    label: 'Masculino 15-19 años',
                },
                {
                    tag: 'personas_alcanzadas_nobinario_15_19_anos',
                    label: 'No binario 15-19 años',
                },
                {
                    tag: 'personas_alcanzadas_f_20_29_anos',
                    label: 'Femenino 20-29 años',
                },
                {
                    tag: 'personas_alcanzadas_m_20_29_anos',
                    label: 'Masculino 20-29 años',
                },
                {
                    tag: 'personas_alcanzadas_nobinario_20_29_anos',
                    label: 'No binario 20-29 años',
                },
                {
                    tag: 'personas_alcanzadas_f_30_49_anos',
                    label: 'Femenino 30-49 años',
                },
                {
                    tag: 'personas_alcanzadas_m_30_49_anos',
                    label: 'Masculino 30-49 años',
                },
                {
                    tag: 'personas_alcanzadas_nobinario_30_49_anos',
                    label: 'No binario 30-49 años',
                },
                {
                    tag: 'personas_alcanzadas_f_50_64_anos',
                    label: 'Femenino 50-64 años',
                },
                {
                    tag: 'personas_alcanzadas_m_50_64_anos',
                    label: 'Masculino 50-64 años',
                },
                {
                    tag: 'personas_alcanzadas_nobinario_50_64_anos',
                    label: 'No binario 50-64 años',
                },
                {
                    tag: 'personas_alcanzadas_f_65_mas_anos',
                    label: 'Femenino 65 y más años',
                },
                {
                    tag: 'personas_alcanzadas_m_65_mas_anos',
                    label: 'Masculino 65 y más años',
                },
                {
                    tag: 'personas_alcanzadas_nobinario_65_mas_anos',
                    label: 'No binario 65 y más años',
                },
            ],
        }
    },
    methods: {
        getData() {
            this.addToError()
            this.$emit('change', this.info)
        },
        getConstancia(value) {
            this.info.constancia = value
            this.getData()
        },
        addToError() {
            this.addFieldToError('constancia')
            this.addFieldToError('capacitaciones_realizadas')
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
