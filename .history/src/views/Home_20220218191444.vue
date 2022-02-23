<template>
    <form :action="config.apiBaseUrl" method="post">
        <px-select></px-select>
    </form>
</template>

<script>
import PxSelect from '@/components/PxSelect'
import config from '@/config'
export default {
    name: 'Home',
    components: {
        PxSelect,
    }
}
</script>
