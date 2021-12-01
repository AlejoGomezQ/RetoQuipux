<template>
  <div class="row">
    <div class="right col-12 col-lg-6">
      <div class="bg-white mt-2 ml-2">
        <h6 class="text-align-start bg-light">INFORMACIÓN DEL CONTACTO</h6>
      </div>
      <div class="d-inline-block">
        <h6>Dirección</h6>
        <p>{{ this.contact.default.direccion[0] }}</p>
        <p>{{ this.contact.default.direccion[1] }}</p>
        <div class="d-inline-block">
          <h6>Correo electrónico</h6>
          <p>{{ this.contact.default.email }}</p>
        </div>
        <h6>Sitio Web</h6>
        <p>{{ this.contact.default.sitioweb }}</p>
        <h6>Red social</h6>
        <p>{{ this.contact.default.redsocial[0] }}</p>
        <p>{{ this.contact.default.redsocial[1] }}</p>
      </div>
    </div>
    <div class="col-12 col-lg-6">
        <h6>Dirección de correspondencia de correo</h6>
        <p>{{ this.contact.default.correspondencia[0] }}</p>
        <p>{{ this.contact.default.correspondencia[1] }}</p>
        <h6>Números de teléfono</h6>
        <p>Fijo</p>
        <p>{{ this.contact.default.telefonos[0].fijo }}</p>
        <p>Celular</p>
        <p>{{ this.contact.default.telefonos[1].fijo }}</p>
    </div>
  </div>
</template>

<script>
import * as infoContact from "@/jsonfiles/info-contacto.json";

export default {
  name: "info-contacto",

  data() {
    return {
      contact: infoContact,
    };
  },
};
</script>

<style scoped>
</style>