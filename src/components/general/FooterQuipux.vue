<template>
    <footer class="footer d-flex justify-content-center bg-light">
        <img src="@/assets/logo-sf.png" alt="logo" @click="toHome">
    </footer>
</template>

<script>
export default {
    name: 'footer-quipux',

    methods: {
        toHome() {
            this.$router.push('Home')
        }
    }
}
</script>