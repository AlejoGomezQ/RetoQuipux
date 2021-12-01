<template>
    <div>
        <div>
            <img alt="">
        </div>
    </div>
</template>

<script>
import * as ListItems from '@/jsonfiles/articulos.json'

export default {
    name: 'item',

    data() {
        return {
            item: ListItems
        }
    },
}
</script>