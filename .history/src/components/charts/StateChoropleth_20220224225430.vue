<template>
    <choropleth-chart :chart-data="chartData" :options="options" />
</template>
<script>
import states_municipalities_topojson from '@/assets/json/states_municipalities_topojson.json'
import ChoroplethChart from './ChoroplethChart.vue'
import * as ChartGeo from 'chartjs-chart-geo'

export default {
    name: 'StateChoropleth',
    components: { ChoroplethChart },
    data() {
        return {
            states: ChartGeo.topojson.feature(
                states_municipalities_topojson,
                states_municipalities_topojson.objects.states
            ).features,
            options: {
                showOutline: true,
                showGraticule: true,
                legend: {
                    display: true,
                },
                scale: {
                    projection: 'gnomonic',
                },
                geo: {
                    colorScale: {
                        display: true,
                    },
                },
            },
        }
    },
    computed: {
        labels() {
            return this.states.map((state) => state.properties.state_name)
        },
        statesData() {
            return this.states.map((state) => ({
                feature: state,
                value: Math.random(),
            }))
        },
        datasets() {
            return [
                {
                    label: 'States',
                    backgroundColor: (context) => {
                        if (context.dataIndex == null) {
                            return null
                        }
                        const value = context.dataset.data[context.dataIndex]
                        return `rgb(0, 0, ${value.value * 255})`
                    },
                    showOutline: true,
                    data: this.statesData,
                },
            ]
        },
        chartData() {
            return {
                labels: this.labels,
                datasets: this.datasets,
            }
        },
    },
}
</script>
