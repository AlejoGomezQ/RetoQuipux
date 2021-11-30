<template>
  <div class="container-fluid bg-light">
    <div class="row">
      <div class="col-12 col-lg-7">
        <h1 class="question my-5 ml-5">¿Que quieres buscar?</h1>
        <span class="ml-2"
          >Encuentra la información que desees consultar...</span
        >
        <div class="input-group my-3 ml-2">
          <div class="input-group-prepend">
            <button
              class="btn btn-serv btn-outline-secondary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Todos los servicios
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Servicio 1</a>
              <a class="dropdown-item" href="#">Servicio 2</a>
            </div>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Text input with dropdown button"
            placeholder="Que servicio quieres consultar"
          />
          <button class="btn search">
             <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="row shadow-sm bg-white rounded">
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
      <div class="col-12 col-lg-5">
        <div class="d-flex justify-content-center justify-content-lg-start">
          <img src="@/assets/resource-1.png" alt="resource" />
        </div>
        <div class="title-aside text-center">
          <h3>SERVICIOS QUIPUX</h3>
        </div>
        <div class="content-aside shadow-sm bg-white">
          <h4 class="ml-5 mb-2">Trámites en tu mano</h4>
          <p class="ml-5">
            <small
              >Ahora podrás hacer todos tus trámites desde la comodidad de tu
              casa, desde cualquier dispositivo computadora, tablet o
              móvil.</small
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style scoped>
.question {
  color: #049ef4;
}

.btn-serv {
  border: 1px solid #3377b5;
  background: #d8f1ff;
  color: #3377b5;
}

.btn-serv:hover {
  color: #666;
  background: #d8f1ff;
}

.form-control {
  border: 1px solid #3377b5;
}

h5 {
  color: #3377b5;
}

.title-aside {
  background: #ffffff83;
  position: relative;
  z-index: 2;
}

h3 {
  color: #3377b5;
}

h4 {
  color: #3377b5;
}

p > small {
  color: #666;
}

.content-aside {
  border-left: 3.5px solid #3377b5;
}

.search {
  background: #049ef4;
  color: #fff;
  border: 1px solid #3377b5;
  
}

.search:hover {
  color: #666;
}
</style>