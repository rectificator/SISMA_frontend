<script>
import { Scatter, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    extends: Scatter,
    mixins: [reactiveProp],
    props: {
        options: {
            type: Object,
            default: () => {},
        },
        ChartData: {
            type: Object,
            default: () => {},
        },
    },
    mounted() {
        // this.chartData is created in the mixin.
        // If you want to pass options please create a local options object
        this.renderChart(this.chartData, this.options)
    },
}
</script>
