<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-5">
        <div class="container-fluid bg-white mt-2 ml-2">
          <div>
            <h6>INFORMACIÓN DE LA EMPRESA</h6>
          </div>
          <div class="d-inline-block text-center">
            <h6 >Nombre</h6>
            <p>Quipux S.A.S</p>
            <h6 >Fecha de creación</h6>
            <p>1995/05/06</p>
            <h6 >Dirección</h6>
            <div class="d-inline-block">
                <p>Carrera 43A No. 3 Sur-130</p>
                <p>Ed. Milla de Oro</p>
                <p>Distrito de negocios Torre 1</p>
                <p>Piso 12</p>
            </div>
            <div class="d-inline-block">
                {{ this.info.default.direccion[1] }}
            </div>
            <h6>Números de teléfono</h6>
            <div class="d-inline-block">
                <p>Fijo</p>
                <p>{{ this.info.default.telefonos[0].fijo }}</p>
                <p>Fax</p>
                <p>{{ this.info.default.telefonos[1].cel }}</p>
            </div>
                <h6>Sitio Web</h6>
                <p><a href="www.quipux.com/site">www.quipux.com/site</a></p>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-7"></div>
    </div>
  </div>
</template>

<script>
import * as InfoContacto from "@/jsonfiles/info-contacto.json";

export default {
    name: 'info-empresa',

    data() {
    return {
      info: InfoContacto,
    };
  },
}
</script>

<style>
h6 {
    font-weight: bold;
}

h6, p {
    font-size: 12px;
}
</style>