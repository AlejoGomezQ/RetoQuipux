<template>
    <div class="container-fluid">
        <header-quipux/>
        <router-view/>
        <footer-quipux/>
    </div>
</template>

<script>
import HeaderQuipux from '@/components/general/HeaderQuipux'
import FooterQuipux from '@/components/general/FooterQuipux'


export default {
    name: 'main-layout',

    components: {
        HeaderQuipux,
        FooterQuipux
        
    }
}
</script>