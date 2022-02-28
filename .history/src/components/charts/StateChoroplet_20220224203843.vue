<template>
    <choropleth-chart :chart-data="chartData" :options="options" />
</template>
<script>
import states_municipalities_topojson from '@/assets/json/states_municipalities_topojson.json'import Chart from 'chart.js'
import ChoropletChart from "@/components/charts/ChoropletChart";
import * as ChartGeo from 'chartjs-chart-geo'

export default {
   name: "StateChoroplet",
    components: {ChoropletChart},
    data() {
        return {
            states: ChartGeo.topojson.feature(
                states_municipalities_topojson,
                states_municipalities_topojson.objects.states
            ).features,
        }
    },
    props: ['options'],
    computed: {
        labels(){
            return this.states.map(state => state.properties.name)
        }
    },
    mounted() {
        // this.chartData is created in the mixin.
        // If you want to pass options please create a local options object
        console.log(this.states[0])
        this.renderChart(this.chartData, this.options)
    },
}
</script>
