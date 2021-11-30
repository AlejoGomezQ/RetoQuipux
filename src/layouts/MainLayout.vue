<template>
    <div>
        <toggle-menu/>
        <header-quipux/>
        <router-view/>
        <footer-quipux/>
    </div>
</template>

<script>
import ToggleMenu from '@/components/general/ToggleMenu'
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