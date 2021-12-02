<template>
    <div class="d-flex flex-wrap justify-content-center w-50">
        <div class="item-container text-center">
            <div class="mb-3">
                <img :src="image" :alt="title">
            </div>
            <h6 class="font-weight-bold">{{ title }}</h6>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>


export default {
    name: 'articles',

    props: {
        image: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
h6, p{
    font-size: 12px;
    color: #666;
    width: 130px;
}

img {
    border-radius: 50%;
    border: 1px solid #444
}
</style>