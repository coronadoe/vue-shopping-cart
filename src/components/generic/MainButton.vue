<template>
    <button class="btn" > {{ text }} </button>
</template>

<script>
    export default {
        name: 'MainButton',

        props: {
            text: String
        },

        methods: {
            onClick() {
                this.$emit('btn-click');
            }
        }
    }
</script>

<style scoped>
    .btn {
        cursor: pointer;
        border-radius: 5px;
        padding: 10px 20px;
        border: none;
    }
</style>