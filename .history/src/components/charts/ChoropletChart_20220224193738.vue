<script>
import states_municipalities_topojson from '@/assetes/states_municipalities_topojson.json'
import { Line, mixins } from 'vue-chartjs'
import ChartGeo from 'chartjs-chart-geo'
const { reactiveProp } = mixins

export default {
    extends: Line,
    mixins: [reactiveProp],
    data() {
        return {
            states: ChartGeo.topojson.feature(
                states_municipalities_topojson,
                states_municipalities_topojson.objects.states
            ).features,
        }
    },
    props: ['options'],
    mounted() {
        // this.chartData is created in the mixin.
        // If you want to pass options please create a local options object
        console.log(this.states)
        this.renderChart(this.chartData, this.options)
    },
}
</script>
