<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-light bg-white p-0 m-0">
      <div class="container-fluid">
        <div class="navbar-collapse" id="navbarNavDropdown">
          <img src="@/assets/logo-sf.png" alt="logo" v-show="$route.name === 'Home'">
          <template>
            <breadcrumb v-show="$route.name != 'Home'"/>
          </template>
          <ul class="navbar-nav ml-auto">
            <div class="align-self-center">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
            </div>
            <li class="nav-item dropdown align-middle">
              <a
                class="nav-link dropdown-toggle text-dark py-0 mt-1"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Usuario Apellido
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li><a class="dropdown-item" href="#">Cuenta</a></li>
                <li><a class="dropdown-item" href="#">Estado</a></li>
                <li><a class="dropdown-item" href="#">Salir</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Breadcrumb from './Breadcrumb'

export default {
  name: "header-quipux",

  components: { 
    Breadcrumb,
    },
};
</script>

<style scoped>

</style>