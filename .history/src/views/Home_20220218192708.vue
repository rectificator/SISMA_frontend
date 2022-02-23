<template>
    <form :action="apiBaseUrl" method="post" class="">
        <px-select></px-select>
        <button
            type="submit"
            
        >
            Sign in
        </button>
    </form>
</template>

<script>
import PxSelect from '@/components/PxSelect'
import config from '@/config'
export default {
    name: 'Home',
    components: {
        PxSelect,
    },

    data() {
        return {
            apiBaseUrl: config.apiBaseUrl,
        }
    },
}
</script>
