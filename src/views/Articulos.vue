<template>
  <div class="m-5bg-light">
    <div class="row">
      <div class="col-12 col-lg-4">
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
      </div>
      <div class="col-12 col-lg-8">
        <div class="row">
          <div class="col-12">
            <carousel @next="next" @previous="previous">
              <slider-art
                v-for="(item, index) in this.item.default"
                :key="index"
                :index="index"
                :imageVisible="imageVisible"
              >
                <img :src="item.imagen" :alt="item.titulo"/>
              </slider-art>
            </carousel>
          </div>
          <div class="col-12">
            <articles />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as infoContact from "@/jsonfiles/info-contacto.json";
import * as ListItems from "@/jsonfiles/articulos.json";

import InfoContacto from "@/components/empresa/InfoContacto";
import SliderArt from "@/components/articulos/SliderArt";
import Articles from "@/components/articulos/Articles";
import Carousel from "@/components/articulos/Carousel";

export default {
  name: "articulos",

  components: {
    InfoContacto,
    SliderArt,
    Articles,
    Carousel,
  },

  data() {
    return {
      contact: infoContact,
      item: ListItems,
      imageVisible: 0,
    };
  },

  computed: {
    itemLength() {
      return this.item.default.length;
    },
  },

  methods: {
    next() {
      if (this.imageVisible >= this.itemLength - 1) this.imageVisible = 0;
      else this.imageVisible++;
    },

    previous() {
      if (this.imageVisible <= 0) this.imageVisible = this.itemLength - 1;
      else this.imageVisible--;
    },
  },
};
</script>

<style scoped>
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