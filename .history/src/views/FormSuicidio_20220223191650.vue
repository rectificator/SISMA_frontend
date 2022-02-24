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
                    tag: 'no_personas_cursaron_curso_diplomado_suicidio',
                    label: 'Número de personas que cursaron el "Curso-Diplomado de Suicidio"',
                },
                {
                    tag: 'no_brigadistas_apoyo_salud_mental',
                    label: 'Número de brigadistas de apoyo en salud mental',
                },
                {
                    tag: 'no_brigadas_apoyo_salud_mental',
                    label: 'Número de brigadas de apoyo en salud mental',
                },
                {
                    tag: 'no_personas_alcanzadas_apoyo_salud_mental',
                    label: 'Número de personas alcanzadas de apoyo en salud mental',
                },
                {
                    tag: 'no_terapeutas_grupos_apoyo_emocional',
                    label: 'Número de terapeutas de grupos de apoyo en salud mental',
                },
                {
                    tag: 'tamizajes_aplicados_medicos_internos_femenino',
                    label: 'Tamizajes aplicados a médicos internos (Femenino)',
                },
                {
                    tag: 'tamizajes_aplicados_medicos_internos_masculino',
                    label: 'Tamizajes aplicados a médicos internos(Masculino)',
                },
                {
                    tag: 'tamizajes_aplicados_medicos_internos_no_binario',
                    label: 'Tamizajes aplicados a médicos internos (No binario)',
                },
                {
                    tag: 'tamizajes_aplicados_pasantes_servicio_social_femenino',
                    label: 'Tamizajes aplicados a médicos pasanted de servicio social (Femenino)',
                },
                {
                    tag: 'tamizajes_aplicados_pasantes_servicio_social__masculino',
                    label: 'Tamizajes aplicados a médicos pasanted de servicio socia(Masculino)',
                },
                {
                    tag: 'tamizajes_aplicados_pasantes_servicio_social_no_binario',
                    label: 'Tamizajes aplicados a médicos pasanted de servicio social (No binario)',
                },
                {
                    tag: 'acciones_prevencion_capacitacion_salud_mental_adicciones_medicos_internos_femenino',
                    label: 'Acciones de prevención y capacitaciónen salud mental y adicciones para médicos (Femenino)',
                },
                {
                    tag: 'acciones_prevencion_capacitacion_salud_mental_adicciones_medicos_internos_masculino',
                    label: 'Acciones de prevención y capacitaciónen salud mental y adicciones para médicos(Masculino)',
                },
                {
                    tag: 'acciones_prevencion_capacitacion_salud_mental_adicciones_medicos_internos_no_binario',
                    label: 'Acciones de prevención y capacitaciónen salud mental y adicciones para médicos (No binario)',
                },
                {
                    tag: 'acciones_prevencion_capacitacion_salud_mental_adicciones_medicos_pasantes_servicio_social_femenino',
                    label: 'Acciones de prevención y capacitaciónen salud mental y adicciones para médicos (Femenino)',
                },
                {
                    tag: 'acciones_prevencion_capacitacion_salud_mental_adicciones_medicos_pasantes_servicio_social_masculino',
                    label: 'Acciones de prevención y capacitaciónen salud mental y adicciones para médicos(Masculino)',
                },
                {
                    tag: 'acciones_prevencion_capacitacion_salud_mental_adicciones_medicos_pasantes_servicio_social_no_binario',
                    label: 'Acciones de prevención y capacitaciónen salud mental y adicciones para médicos (No binario)',
                },
                {
                    tag: 'no_medicos_internos_alcanzados_acciones_prevencion_capacitacion_femenino',
                    label: 'Número de médicos internos alcanzados por acciones de prevención y capacitación (Femenino)',
                },
                {
                    tag: 'no_medicos_internos_alcanzados_acciones_prevencion_capacitacion_masculino',
                    label: 'Número de médicos internos alcanzados por acciones de prevención y capacitación(Masculino)',
                },
                {
                    tag: 'no_medicos_internos_alcanzados_acciones_prevencion_capacitacion_no_binario',
                    label: 'Número de médicos internos alcanzados por acciones de prevención y capacitación (No binario)',
                },
                {
                    tag: 'no_medicos_pasantes_servicio_social_alcanzados_acciones_prevencion_capacitacion_femenino',
                    label: 'Número de médicos pasantes de servicio soscial alcanzados por acciones de prevención y capacitación (Femenino)',
                },
                {
                    tag: 'no_medicos_pasantes_servicio_social_alcanzados_acciones_prevencion_capacitacion_masculino',
                    label: 'Número de médicos pasantes de servicio soscial alcanzados por acciones de prevención y capacitación(Masculino)',
                },
                {
                    tag: 'no_medicos_pasantes_servicio_social_alcanzados_acciones_prevencion_capacitacion_no_binario',
                    label: 'Número de médicos pasantes de servicio soscial alcanzados por acciones de prevención y capacitación (No binario)',
                },
                {
                    tag: 'no_medicos_internos_atendidos_programa_nacional_prevencion_suicidio_femenino',
                    label: 'Número de médicos internos atendidos por el programa nacional para la prevención del suicidio (Femenino)',
                },
                {
                    tag: 'no_medicos_internos_atendidos_programa_nacional_prevencion_suicidio_masculino',
                    label: 'Número de médicos internos atendidos por el programa nacional para la prevención del suicidio(Masculino)',
                },
                {
                    tag: 'no_medicos_internos_atendidos_programa_nacional_prevencion_suicidio_no_binario',
                    label: 'Número de médicos internos atendidos por el programa nacional para la prevención del suicidio (No binario)',
                },
                {
                    tag: 'no_medicos_pasantes_servicio_social_atendidos_programa_nacional_prevencion_suicidio_femenino',
                    label: 'Número de médicos pasantes del servicio social atendidos por el programa nacional para la prevención del suicidio (Femenino)',
                },
                {
                    tag: 'no_medicos_pasantes_servicio_social_atendidos_programa_nacional_prevencion_suicidio_masculino',
                    label: 'Número de médicos pasantes del servicio social atendidos por el programa nacional para la prevención del suicidio(Masculino)',
                },
                {
                    tag: 'no_medicos_pasantes_servicio_social_atendidos_programa_nacional_prevencion_suicidio_no_binario',
                    label: 'Número de médicos pasantes del servicio social atendidos por el programa nacional para la prevención del suicidio (No binario)',
                },
                {
                    tag: 'no_personas_atendidas_intento_suicidio_05_09_anios_femenino',
                    label: 'Número de personas atendidas por intento de suicidio 5-9 años (Femenino)',
                },
                {
                    tag: 'no_personas_atendidas_intento_suicidio_05_09_anios_masculino',
                    label: 'Número de personas atendidas por intento de suicidio 5-9 años(Masculino)',
                },
                {
                    tag: 'no_personas_atendidas_intento_suicidio_05_09_anios_no_binario',
                    label: 'Número de personas atendidas por intento de suicidio 5-9 años (No binario)',
                },
                {
                    tag: 'no_personas_atendidas_intento_suicidio_10_14_anios_femenino',
                    label: 'Número de personas atendidas por intento de suicidio 10-14 años (Femenino)',
                },
                {
                    tag: 'no_personas_atendidas_intento_suicidio_10_14_anios_masculino',
                    label: 'Número de personas atendidas por intento de suicidio 10-14 años(Masculino)',
                },
                {
                    tag: 'no_personas_atendidas_intento_suicidio_10_14_anios_no_binario',
                    label: 'Número de personas atendidas por intento de suicidio 10-14 años (No binario)',
                },
                {
                    tag: 'no_personas_atendidas_intento_suicidio_15_19_anios_femenino',
                    label: 'Número de personas atendidas por intento de suicidio 15-19 años (Femenino)',
                },
                {
                    tag: 'no_personas_atendidas_intento_suicidio_15_19_anios_masculino',
                    label: 'Número de personas atendidas por intento de suicidio 15-19 años(Masculino)',
                },
                {
                    tag: 'no_personas_atendidas_intento_suicidio_15_19_anios_no_binario',
                    label: 'Número de personas atendidas por intento de suicidio 15-19 años (No binario)',
                },
                {
                    tag: 'no_personas_atendidas_intento_suicidio_20_29_anios_femenino',
                    label: 'Número de personas atendidas por intento de suicidio 20-29 años (Femenino)',
                },
                {
                    tag: 'no_personas_atendidas_intento_suicidio_20_29_anios_masculino',
                    label: 'Número de personas atendidas por intento de suicidio 20-29 años(Masculino)',
                },
                {
                    tag: 'no_personas_atendidas_intento_suicidio_20_29_anios_no_binario',
                    label: 'Número de personas atendidas por intento de suicidio 20-29 años (No binario)',
                },
                {
                    tag: 'no_personas_atendidas_intento_suicidio_30_49_anios_femenino',
                    label: 'Número de personas atendidas por intento de suicidio 30-49 años (Femenino)',
                },
                {
                    tag: 'no_personas_atendidas_intento_suicidio_30_49_anios_masculino',
                    label: 'Número de personas atendidas por intento de suicidio 30-49 años(Masculino)',
                },
                {
                    tag: 'no_personas_atendidas_intento_suicidio_30_49_anios_no_binario',
                    label: 'Número de personas atendidas por intento de suicidio 30-49 años (No binario)',
                },
                {
                    tag: 'no_personas_atendidas_intento_suicidio_50_64_anios_femenino',
                    label: 'Número de personas atendidas por intento de suicidio 50-64 años (Femenino)',
                },
                {
                    tag: 'no_personas_atendidas_intento_suicidio_50_64_anios_masculino',
                    label: 'Número de personas atendidas por intento de suicidio 50-64 años(Masculino)',
                },
                {
                    tag: 'no_personas_atendidas_intento_suicidio_50_64_anios_no_binario',
                    label: 'Número de personas atendidas por intento de suicidio 50-64 años (No binario)',
                },
                {
                    tag: 'no_personas_atendidas_intento_suicidio_65_mas_anios_femenino',
                    label: 'Número de personas atendidas por intento de suicidio 65 y más años (Femenino)',
                },
                {
                    tag: 'no_personas_atendidas_intento_suicidio_65_mas_anios_masculino',
                    label: 'Número de personas atendidas por intento de suicidio 65 y más años(Masculino)',
                },
                {
                    tag: 'no_personas_atendidas_intento_suicidio_65_mas_anios_no_binario',
                    label: 'Número de personas atendidas por intento de suicidio 65 y más años (No binario)',
                },
                {
                    tag: 'no_referencias_intento_suicidio_05_09_anios_femenino',
                    label: 'Número de referencias por intento de suicidio 5-9 años (Femenino)',
                },
                {
                    tag: 'no_referencias_intento_suicidio_05_09_anios_masculino',
                    label: 'Número de referencias por intento de suicidio 5-9 años(Masculino)',
                },
                {
                    tag: 'no_referencias_intento_suicidio_05_09_anios_no_binario',
                    label: 'Número de referencias por intento de suicidio 5-9 años (No binario)',
                },
                {
                    tag: 'no_referencias_intento_suicidio_10_14_anios_femenino',
                    label: 'Número de referencias por intento de suicidio 10-14 años (Femenino)',
                },
                {
                    tag: 'no_referencias_intento_suicidio_10_14_anios_masculino',
                    label: 'Número de referencias por intento de suicidio 10-14 años(Masculino)',
                },
                {
                    tag: 'no_referencias_intento_suicidio_10_14_anios_no_binario',
                    label: 'Número de referencias por intento de suicidio 10-14 años (No binario)',
                },
                {
                    tag: 'no_referencias_intento_suicidio_15_19_anios_femenino',
                    label: 'Número de referencias por intento de suicidio 15-19 años (Femenino)',
                },
                {
                    tag: 'no_referencias_intento_suicidio_15_19_anios_masculino',
                    label: 'Número de referencias por intento de suicidio 15-19 años(Masculino)',
                },
                {
                    tag: 'no_referencias_intento_suicidio_15_19_anios_no_binario',
                    label: 'Número de referencias por intento de suicidio 15-19 años (No binario)',
                },
                {
                    tag: 'no_referencias_intento_suicidio_20_29_anios_femenino',
                    label: 'Número de referencias por intento de suicidio 20-29 años (Femenino)',
                },
                {
                    tag: 'no_referencias_intento_suicidio_20_29_anios_masculino',
                    label: 'Número de referencias por intento de suicidio 20-29 años(Masculino)',
                },
                {
                    tag: 'no_referencias_intento_suicidio_20_29_anios_no_binario',
                    label: 'Número de referencias por intento de suicidio 20-29 años (No binario)',
                },
                {
                    tag: 'no_referencias_intento_suicidio_30_49_anios_femenino',
                    label: 'Número de referencias por intento de suicidio 30-49 años (Femenino)',
                },
                {
                    tag: 'no_referencias_intento_suicidio_30_49_anios_masculino',
                    label: 'Número de referencias por intento de suicidio 30-49 años(Masculino)',
                },
                {
                    tag: 'no_referencias_intento_suicidio_30_49_anios_no_binario',
                    label: 'Número de referencias por intento de suicidio 30-49 años (No binario)',
                },
                {
                    tag: 'no_referencias_intento_suicidio_50_64_anios_femenino',
                    label: 'Número de referencias por intento de suicidio 50-64 años (Femenino)',
                },
                {
                    tag: 'no_referencias_intento_suicidio_50_64_anios_masculino',
                    label: 'Número de referencias por intento de suicidio 50-64 años(Masculino)',
                },
                {
                    tag: 'no_referencias_intento_suicidio_50_64_anios_no_binario',
                    label: 'Número de referencias por intento de suicidio 50-64 años (No binario)',
                },
                {
                    tag: 'no_referencias_intento_suicidio_65_mas_anios_femenino',
                    label: 'Número de referencias por intento de suicidio 65 y más años (Femenino)',
                },
                {
                    tag: 'no_referencias_intento_suicidio_65_mas_anios_masculino',
                    label: 'Número de referencias por intento de suicidio 65 y más años(Masculino)',
                },
                {
                    tag: 'no_referencias_intento_suicidio_65_mas_anios_no_binario',
                    label: 'Número de referencias por intento de suicidio 65 y más años (No binario)',
                },
                {
                    tag: 'no_suicidios_reportados_05_09_anios_femenino',
                    label: 'Número de suicidios reportados 5-9 años (Femenino)',
                },
                {
                    tag: 'no_suicidios_reportados_05_09_anios_masculino',
                    label: 'Número de suicidios reportados 5-9 años(Masculino)',
                },
                {
                    tag: 'no_suicidios_reportados_05_09_anios_no_binario',
                    label: 'Número de suicidios reportados 5-9 años (No binario)',
                },
                {
                    tag: 'no_suicidios_reportados_10_14_anios_femenino',
                    label: 'Número de suicidios reportados 10-14 años (Femenino)',
                },
                {
                    tag: 'no_suicidios_reportados_10_14_anios_masculino',
                    label: 'Número de suicidios reportados 10-14 años(Masculino)',
                },
                {
                    tag: 'no_suicidios_reportados_10_14_anios_no_binario',
                    label: 'Número de suicidios reportados 10-14 años (No binario)',
                },
                {
                    tag: 'no_suicidios_reportados_15_19_anios_femenino',
                    label: 'Número de suicidios reportados 15-19 años (Femenino)',
                },
                {
                    tag: 'no_suicidios_reportados_15_19_anios_masculino',
                    label: 'Número de suicidios reportados 15-19 años(Masculino)',
                },
                {
                    tag: 'no_suicidios_reportados_15_19_anios_no_binario',
                    label: 'Número de suicidios reportados 15-19 años (No binario)',
                },
                {
                    tag: 'no_suicidios_reportados_20_29_anios_femenino',
                    label: 'Número de suicidios reportados 20-29 años (Femenino)',
                },
                {
                    tag: 'no_suicidios_reportados_20_29_anios_masculino',
                    label: 'Número de suicidios reportados 20-29 años(Masculino)',
                },
                {
                    tag: 'no_suicidios_reportados_20_29_anios_no_binario',
                    label: 'Número de suicidios reportados 20-29 años (No binario)',
                },
                {
                    tag: 'no_suicidios_reportados_30_49_anios_femenino',
                    label: 'Número de suicidios reportados 30-49 años (Femenino)',
                },
                {
                    tag: 'no_suicidios_reportados_30_49_anios_masculino',
                    label: 'Número de suicidios reportados 30-49 años(Masculino)',
                },
                {
                    tag: 'no_suicidios_reportados_30_49_anios_no_binario',
                    label: 'Número de suicidios reportados 30-49 años (No binario)',
                },
                {
                    tag: 'no_suicidios_reportados_50_64_anios_femenino',
                    label: 'Número de suicidios reportados 50-64 años (Femenino)',
                },
                {
                    tag: 'no_suicidios_reportados_50_64_anios_masculino',
                    label: 'Número de suicidios reportados 50-64 años(Masculino)',
                },
                {
                    tag: 'no_suicidios_reportados_50_64_anios_no_binario',
                    label: 'Número de suicidios reportados 50-64 años (No binario)',
                },
                {
                    tag: 'no_suicidios_reportados_65_mas_anios_femenino',
                    label: 'Número de suicidios reportados 65 y más años (Femenino)',
                },
                {
                    tag: 'no_suicidios_reportados_65_mas_anios_masculino',
                    label: 'Número de suicidios reportados 65 y más años(Masculino)',
                },
                {
                    tag: 'no_suicidios_reportados_65_mas_anios_no_binario',
                    label: 'Número de suicidios reportados 65 y más años (No binario)',
                },
                {
                    tag: 'no_asistentes_grupos_apoyo_emocional_05_09_anios_femenino',
                    label: 'Número de asistentes a grupos de apoyo emocional 5-9 años (Femenino)',
                },
                {
                    tag: 'no_asistentes_grupos_apoyo_emocional_05_09_anios_masculino',
                    label: 'Número de asistentes a grupos de apoyo emocional 5-9 años(Masculino)',
                },
                {
                    tag: 'no_asistentes_grupos_apoyo_emocional_05_09_anios_no_binario',
                    label: 'Número de asistentes a grupos de apoyo emocional 5-9 años (No binario)',
                },
                {
                    tag: 'no_asistentes_grupos_apoyo_emocional_10_14_anios_femenino',
                    label: 'Número de asistentes a grupos de apoyo emocional 10-14 años (Femenino)',
                },
                {
                    tag: 'no_asistentes_grupos_apoyo_emocional_10_14_anios_masculino',
                    label: 'Número de asistentes a grupos de apoyo emocional 10-14 años(Masculino)',
                },
                {
                    tag: 'no_asistentes_grupos_apoyo_emocional_10_14_anios_no_binario',
                    label: 'Número de asistentes a grupos de apoyo emocional 10-14 años (No binario)',
                },
                {
                    tag: 'no_asistentes_grupos_apoyo_emocional_15_19_anios_femenino',
                    label: 'Número de asistentes a grupos de apoyo emocional 15-19 años (Femenino)',
                },
                {
                    tag: 'no_asistentes_grupos_apoyo_emocional_15_19_anios_masculino',
                    label: 'Número de asistentes a grupos de apoyo emocional 15-19 años(Masculino)',
                },
                {
                    tag: 'no_asistentes_grupos_apoyo_emocional_15_19_anios_no_binario',
                    label: 'Número de asistentes a grupos de apoyo emocional 15-19 años (No binario)',
                },
                {
                    tag: 'no_asistentes_grupos_apoyo_emocional_20_29_anios_femenino',
                    label: 'Número de asistentes a grupos de apoyo emocional 20-29 años (Femenino)',
                },
                {
                    tag: 'no_asistentes_grupos_apoyo_emocional_20_29_anios_masculino',
                    label: 'Número de asistentes a grupos de apoyo emocional 20-29 años(Masculino)',
                },
                {
                    tag: 'no_asistentes_grupos_apoyo_emocional_20_29_anios_no_binario',
                    label: 'Número de asistentes a grupos de apoyo emocional 20-29 años (No binario)',
                },
                {
                    tag: 'no_asistentes_grupos_apoyo_emocional_30_49_anios_femenino',
                    label: 'Número de asistentes a grupos de apoyo emocional 30-49 años (Femenino)',
                },
                {
                    tag: 'no_asistentes_grupos_apoyo_emocional_30_49_anios_masculino',
                    label: 'Número de asistentes a grupos de apoyo emocional 30-49 años(Masculino)',
                },
                {
                    tag: 'no_asistentes_grupos_apoyo_emocional_30_49_anios_no_binario',
                    label: 'Número de asistentes a grupos de apoyo emocional 30-49 años (No binario)',
                },
                {
                    tag: 'no_asistentes_grupos_apoyo_emocional_50_64_anios_femenino',
                    label: 'Número de asistentes a grupos de apoyo emocional 50-64 años (Femenino)',
                },
                {
                    tag: 'no_asistentes_grupos_apoyo_emocional_50_64_anios_masculino',
                    label: 'Número de asistentes a grupos de apoyo emocional 50-64 años(Masculino)',
                },
                {
                    tag: 'no_asistentes_grupos_apoyo_emocional_50_64_anios_no_binario',
                    label: 'Número de asistentes a grupos de apoyo emocional 50-64 años (No binario)',
                },
                {
                    tag: 'no_asistentes_grupos_apoyo_emocional_65_mas_anios_femenino',
                    label: 'Número de asistentes a grupos de apoyo emocional 65 y más años (Femenino)',
                },
                {
                    tag: 'no_asistentes_grupos_apoyo_emocional_65_mas_anios_masculino',
                    label: 'Número de asistentes a grupos de apoyo emocional 65 y más años(Masculino)',
                },
                {
                    tag: 'no_asistentes_grupos_apoyo_emocional_65_mas_anios_no_binario',
                    label: 'Número de asistentes a grupos de apoyo emocional 65 y más años (No binario)',
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
