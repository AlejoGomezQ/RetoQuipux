<template>
    <div class="container">
        <sidebar/>
        <header-quipux/>
        <router-view/>
        <footer-quipux/>
    </div>
</template>

<script>
import Sidebar from '@/components/general/Sidebar'
import HeaderQuipux from '@/components/general/HeaderQuipux'
import FooterQuipux from '@/components/general/FooterQuipux'


export default {
    name: 'main-layout',

    components: {
        Sidebar,
        HeaderQuipux,
        FooterQuipux
        
        
    }
}
</script>