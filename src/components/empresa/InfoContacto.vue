<template>
  <div class="row bg-white ml-4 mt-4 pt-5">
    <div class="col-12 col-lg-6">
      <div class="mt-2 ml-2">
        <h6 class="text-align-start pt-3">INFORMACIÓN DEL CONTACTO</h6>
      </div>
      <div class="right">
        <div class="mt-5 text-center">
          <div class="mb-5">
            <h6>Dirección</h6>
            <p>{{ this.contact.default.direccion[0] }}</p>
            <p>{{ this.contact.default.direccion[1] }}</p>
          </div>
          <div class="mb-5">
            <h6>Correo electrónico</h6>
            <p>{{ this.contact.default.email }}</p>
          </div>
          <div class="mb-5">
            <h6>Sitio Web</h6>
            <p>{{ this.contact.default.sitioweb }}</p>
          </div>
          <div class="mb-5">
            <h6>Red social</h6>
            <p>{{ this.contact.default.redsocial[0] }}</p>
            <p>{{ this.contact.default.redsocial[1] }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-6 mt-5 text-center">
      <div class="mt-4 mb-5">
        <h6>Dirección de correspondencia de correo</h6>
        <p>{{ this.contact.default.correspondencia[0] }}</p>
        <p>{{ this.contact.default.correspondencia[1] }}</p>
      </div>
      <div class="mb-5">
        <h6>Números de teléfono</h6>
        <p>Fijo</p>
        <p>{{ this.contact.default.telefonos[0].fijo }}</p>
        <p>Celular</p>
        <p>{{ this.contact.default.telefonos[1].fijo }}</p>
      </div>
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
.row {
  height: 97%;
}
h6 {
  font-weight: bold;
}

h6,
p {
  font-family: sans-serif;
  font-size: 13px;
  line-height: 60%;
}

.right {
  border-right: 1px solid #000;
  height: 88%;
}
</style>