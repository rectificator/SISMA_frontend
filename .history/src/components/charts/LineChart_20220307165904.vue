<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    extends: Line,
    mixins: [reactiveProp],
    props: {
        options: {
            type: Object,
            default: () => {},
        },
        chartData: {
            type: Object,
            default: () => {
                return {
                    labels: this.states.map((state) => state.estado),
                    datasets: [
                        {
                            label: 'No. de terapeutas de grupos de apoyo emocional',
                            backgroundColor: '#068889',
                            data: this.noBrigadistasDeApoyoEnSaludMental,
                        },
                        {
                            label: 'No. Brigadas de apoyo en salud mental',
                            backgroundColor: '#f0f050',
                            data: this.noBrigadasDeApoyoEnSaludMental,
                        },
                        {
                            label: 'No. brigadistas de apoyo en salud mental',
                            backgroundColor: '#900970',
                            data: this.noTerapeutasDeApoyoEmocional,
                        },
                    ],
                }
            },
        },
    },
    mounted() {
        // this.chartData is created in the mixin.
        // If you want to pass options please create a local options object
        this.renderChart(this.chartData, this.options)
    },
}
</script>
