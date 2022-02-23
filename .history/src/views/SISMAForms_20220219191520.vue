<template>
    <div class="bg-black text-white">
        <p>{{ form }}</p>
    </div>
</template>

<script>
export default {
    name: 'SismaForms',
    data() {
        return {
            info: {},
            form: this.$route.params.form,
        }
    },
}
</script>
