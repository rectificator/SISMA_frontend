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
    props: {
        dataset: {
            type: Array,
            default: () => new Array(32).fill(0).map(() => Math.random()),
        },
        backgroundColor: {
            type: Array,
            default: () => [0, 0, 255],
        },
    },
    computed: {
        labels() {
            /* console.log(
                'ESTADOS: ',
                this.states.map((state) => state.properties.state_name)
            ) */
            return this.states.map((state) => {
                if (state.properties.state_name != 'Distrito Federal') {
                    return state.properties.state_name
                } else {
                    state.properties.state_name = 'CDMX'
                    return state.properties.state_name
                }
            })
        },
        statesData() {
            let norm = this.normalizeDataArray(this.dataset)
            //Arreglo provisional para cuando  el valor es 0
            norm = norm.map((value) => (value == 0 ? Math.random() : value))
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
                        let color = (color = `rgb(${
                            value.value * this.backgroundColor[0]
                        }, ${value.value * this.backgroundColor[1]}, ${
                            value.value * this.backgroundColor[2]
                        })`)
                        return color
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
    methods: {
        normalizeDataArray(dataArray) {
            const max = dataArray.reduce((a, b) => {
                return Math.max(a, b)
            })
            return dataArray.map((val) => val / max)
        },
    },
}
</script>
