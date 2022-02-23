<template>
    <form :action="apiBaseUrl" method="post" class="flex">
        <px-select></px-select>
        <button
            type="submit"
            class="w-full mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
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
