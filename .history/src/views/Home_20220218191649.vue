<template>
    <form :action="apiBaseUrl" method="post">
        <px-select></px-select>
        <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
            <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
            >
                <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
            </svg>
        </div>
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
