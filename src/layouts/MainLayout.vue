<template>
    <div class="d-flex">
        <toggle-menu/>
        <div class="w-100">
            <header class="d-block">
                <header-quipux/>
            </header>
            <div class="view">
                <router-view/>
            </div>
            <footer>
                <footer-quipux/>
            </footer>
        </div>
    </div>
</template>

<script>
import ToggleMenu from '../components/general/ToggleMenu'
import HeaderQuipux from '@/components/general/HeaderQuipux'
import FooterQuipux from '@/components/general/FooterQuipux'

export default {
    name: 'main-layout',

    components: {
        ToggleMenu,
        HeaderQuipux,
        FooterQuipux
    }
}
</script>

<style scoped>
</style>