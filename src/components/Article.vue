<template>
    <div>
        
    </div>
</template>

<script>
export default {
    name: 'article',

    props: {
        image: {
            required: true,
            type: String
        },
        title: {
            required: true,
            type: String
        },
        description: {
            required: true,
            type: String
        }
    }
}
</script>