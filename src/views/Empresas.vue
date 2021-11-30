<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-5">
        <div class="container-fluid bg-white mt-2 ml-2">
          <div class="font-weight-bold">
            <h6>INFORMACIÓN DE LA EMPRESA</h6>
          </div>
          <div class="d-inline-block text-center pb-5">
            <h6 class="font-weight-bold">Nombre</h6>
            <p>Quipux S.A.S</p>
            <h6 class="font-weight-bold">Fecha de creación</h6>
            <p>1995/05/06</p>
            <h6 class="font-weight-bold">Dirección</h6>
            <div class="d-inline-block">
                <p>Carrera 43A No. 3 Sur-130</p>
                <p>Ed. Milla de Oro</p>
                <p>Distrito de negocios Torre 1</p>
                <p>Piso 12</p>
            </div>
            <div class="d-inline-block">
                {{ this.info.default.direccion[1] }}
            </div>
            <h6 class="font-weight-bold">Números de teléfono</h6>
            <div class="d-inline-block">
                <p>Fijo</p>
                <p>{{ this.info.default.telefonos[0].fijo }}</p>
                <p>Fax</p>
                <p>{{ this.info.default.telefonos[1].cel }}</p>
            </div>
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
  name: "empresas",

  data() {
    return {
      info: InfoContacto,
    };
  },
};
</script>