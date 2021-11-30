<template>
  <div>
    <h1 class="question my-5 ml-5">¿Que quieres buscar?</h1>
    <span class="ml-2">Encuentra la información que desees consultar...</span>
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
</template>

<script>
export default {
  name: "search-component",
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

.search {
  background: #049ef4;
  color: #fff;
  border: 1px solid #3377b5;
  
}

.search:hover {
  color: #666;
}
</style>