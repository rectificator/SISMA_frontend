<script>
import { HorizontalBar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    extends: HorizontalBar,
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
                            backgroundColor: '#860809',
                            data: this.noBrigadistasDeApoyoEnSaludMental,
                        },
                        {
                            label: 'No. Brigadas de apoyo en salud mental',
                            backgroundColor: '#003399',
                            data: this.noBrigadasDeApoyoEnSaludMental,
                        },
                        {
                            label: 'No. brigadistas de apoyo en salud mental',
                            backgroundColor: '#38e859',
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
