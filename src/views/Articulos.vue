<template>
    <div>
        <div class="row">
            <div class="col-12 col-lg-4">
                <info-contacto/>
            </div>
            <div class="col-12 col-lg-8">
                <div class="row">
                    <div class="col-12">
                        <slider-art/>
                    </div>
                    <div class="col-12">
                        <articles/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InfoContacto from '@/components/empresa/InfoContacto'
import SliderArt from '@/components/articulos/SliderArt'
import Articles from '@/components/articulos/Articles'

export default {
    name: 'articulos',

    components: {
        InfoContacto,
        SliderArt,
        Articles
    }
}
</script>