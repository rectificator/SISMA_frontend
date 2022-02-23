<template>
    <select
        :id="info"
        :ref="info"
        v-on:change="selectItem"
        class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
    >
        <option value="" disabled selected hidden>Selecciona una opción</option>
        <option v-for="item in requestedInfo" :key="item.id">
            {{ item.modalidad }}
        </option>
    </select>
</template>

<script>
import api from '@/api'
export default {
    name: 'PxSelect',

    data() {
        return {
            requestedInfo: [],
            info: 'modalidad',
        }
    },

    props:{
        info: {{
            type: String,
            default: ''
        }}
    }

    created() {
        api.getFrom('sisma/modalidad').then((data) => {
            //console.log('DATA: ', data)
            this.requestedInfo = data
        })
    },

    methods: {
        selectItem() {
            //console.log('REFS: ', this.$refs)
            this.$emit('select-value', this.$refs[this.info].value)
        },
    },
}
</script>
