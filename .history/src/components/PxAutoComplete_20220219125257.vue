<template>
    <div>
        <input type="text" name="" id="" />
        <ul>
            <li v-for="item in requestedInfo"></li>
        </ul>
    </div>
</template>

<script>
import api from '@/api'
export default {
    name: 'PXAutoComplete',
    data() {
        return {
            requestedInfo: [],
            info: 'tipo'
        }
    },
    created() {
        api.getFrom('sisma/tipo_actividad').then((data) => {
            //console.log('DATA: ', data)
            this.requestedInfo = data
        })
    },
}
</script>
