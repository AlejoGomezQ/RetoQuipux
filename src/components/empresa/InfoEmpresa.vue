<template>
    <div class="row bg-white mt-4 ml-4 p-0">
      <div class="col-12 col-lg-5">
        <div class="info-empresa ">
          <div>
            <h6 class="text-align-start">INFORMACIÓN DE LA EMPRESA</h6>
          </div>
          <div class="mt-5">
            <div class="text-center">
              <div class="mb-5">
                <h6>Nombre</h6>
                <p >Quipux S.A.S</p>
              </div>
              <div class="mb-5">
                <h6>Fecha de creación</h6>
                <p >1995/05/06</p>
              </div>
              <div class="mb-5">
                <h6>Dirección</h6>
                <p>Carrera 43A No. 3 Sur-130</p>
                <p>Ed. Milla de Oro</p>
                <p>Distrito de negocios Torre 1</p>
                <p>Piso 12</p>
                <p>{{ this.info.default.direccion[1] }}</p>
              </div>
              <div class="mb-5">
                <h6>Números de teléfono</h6>
                <p>Fijo</p>
                <p>{{ this.info.default.telefonos[0].fijo }}</p>
                <p>Fax</p>
                <p>{{ this.info.default.telefonos[1].cel }}</p>
              </div>
              <div>
                <h6>Sitio Web</h6>
              <p><a href="www.quipux.com/site">www.quipux.com/site</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import * as InfoContacto from "@/jsonfiles/info-contacto.json";

export default {
  name: "info-empresa",

  data() {
    return {
      info: InfoContacto,
    };
  },
};
</script>

<style scoped>
.info-empresa {
  width: max-content;
  padding: 5em;
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
</style>