<template>
    <div v-show="imageVisible === index" class="carousel-slider">
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: 'slider-art',

    props: [
        'imageVisible',
        'index'
    ]
}
</script>

<style scoped>

</style>