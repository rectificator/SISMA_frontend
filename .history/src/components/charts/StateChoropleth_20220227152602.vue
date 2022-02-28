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
                showGraticule: false,
                legend: {
                    display: false,
                },
                scale: {
                    projection: 'mercator',
                },
                geo: {
                    colorScale: {
                        display: false,
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
            const arr = [
                1, 5, 3, 5, 2, 6, 8, 3, 5, 4, 2, 3, 4, 5, 6, 2, 5, 4, 6, 7, 8,
                5, 4, 3, 2, 4, 9, 7, 5, 6, 4, 6,
            ]
            const max = arr.reduce((a, b) => {
                return Math.max(a, b)
            })
            const norm = arr.map((val) => val / max)
            console.log('MAX: ', max)
            console.log('Normalized ARRAY: ', norm)
            return this.states.map((state) => ({
                feature: state,
                value: norm[this.states.indexOf(state)],
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
        normalizeDataArray(dataArray) {
            const max = dataArray.reduce((a, b) => {
                return Math.max(a, b)
            })
            return dataArray.map((val) => val / max)
        },
    },
}
</script>
