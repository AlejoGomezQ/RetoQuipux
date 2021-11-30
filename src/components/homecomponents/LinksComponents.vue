<template>
    <div class="d-inline-block bg-white shadow-sm">
        <div class="row">
            <div class="col-12 col-sm-4">
          <h5 class="m-3">Certificado</h5>
          <p class="m-3">
            <small
              >Conoce los beneficios que tenemos para ti al registrate</small
            >
          </p>
          <button class="m-3 btn btn-outline-success py-0 px-4">
            + beneficios
          </button>
        </div>
        <div class="col-12 col-sm-4">
          <h5 class="m-3">Crear cuenta</h5>
          <p class="m-3">
            <small
              >Conoce los beneficios que tenemos para ti al registrate</small
            >
          </p>
          <button class="m-3 btn btn-outline-success py-0 px-4">
            Ver todo
          </button>
        </div>
        <div class="col-12 col-sm-4">
          <h5 class="m-3">Top trámites</h5>
          <p class="m-3">
            <small>Conoce los trámites mas solicitados</small>
          </p>
          <button class="btn btn-outline-success py-0 px-4 m-3">
            Ver todo
          </button>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'links-component'
}
</script>

<style scoped>
h5 {
  color: #3377b5;
}

p > small {
  color: #666;
}
</style>