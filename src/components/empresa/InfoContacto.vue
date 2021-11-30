<template>
    <div class="row">
            <div class="col-12 col-lg-6">
                <div class="container-fluid bg-white mt-2 ml-2">
                    <h6 class="text-align-start">INFORMACIÓN DEL CONTACTO</h6>
                </div>
                <div class="d-inline-block">
                    <h6>Dirección</h6>
                    <p>{{ this.contact.default.direccion[0] }}</p>
                </div>
            </div>
            <div class="col-12 col-lg-6">

            </div>
    </div>
</template>

<script>
import * as infoContact from '@/jsonfiles/info-contacto.json'

export default {
    name: 'info-contacto',

    data() {
        return {
            contact: infoContact
        }
    }
}
</script>

<style scoped>

</style>