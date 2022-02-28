<script>
import states_municipalities_topojson from '@/assetes/states_municipalities_topojson.json'
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    extends: Line,
    mixins: [reactiveProp],
    data(){
        return {
            topojson: states_municipalities_topojson
        }
    },
    props: ['options'],
    mounted() {
        // this.chartData is created in the mixin.
        // If you want to pass options please create a local options object
        this.renderChart(this.chartData, this.options)
    },
}
</script>