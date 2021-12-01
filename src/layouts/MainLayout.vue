<template>
    <div class="d-flex">
        <toggle-menu/>
        <div class="body">
            <header>
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