<template>
  <div :class="this.visibleMenu ? 'wrapper' : 'no-wrapper'">
    <div class="sidebar-wrapper border-end">
      <div class="sidebar-heading">
        <button
          class="sidebar-toggle btn p-0 m-0 text-center"
          @click="showToggleMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-list text-white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <router-link to="/">
          <img
            src="@/assets/logo-wh.png"
            alt="logo"
            class="w-50 ml-4"
            v-show="this.visibleMenu"
          />
        </router-link>
      </div>
    </div>
    <div class="list-group list-group-flush">
      <div
        class="p-2 border-bottom"
        v-show="!this.visibleSubMenu && this.visibleMenu"
      >
        <h6 class="text-light ml-2">ENTITIES</h6>
      </div>
      <ul class="p-0 text-center" :class="this.visibleMenu ? 'm-4' : 'm-0'">
        <!-- <li v-show="this.visibleMenu">
          <dropdown
          @click="showSubMenu"
          v-for="(serv, id) in services"
          :key="id"
          :title="serv.title"
          :item="services"
        ></dropdown>
        </li> -->
        <li class="dropdown">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-briefcase text-light"
            viewBox="0 0 16 16"
          >
            <path
              d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"
            />
          </svg>
          <router-link to="/nombre-empresa/empresas">
            <span
              id="navbarDropdown"
              class="dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              @click="showSubMenu"
              v-show="this.visibleMenu"
              >EMPRESAS</span
            ></router-link
          >
          <div
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
          >
            <a class="dropdown-item">Empresa</a>
          </div>
        </li>
        <li class="dropdown">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-file-earmark-text text-light"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"
            />
            <path
              d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"
            />
          </svg>
          <router-link to="/nombre-empresa/articulos">
            <span
              id="navbarDropdown"
              class="dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              @click="showSubMenu"
              v-show="this.visibleMenu"
              >ARTICULOS</span
            >
          </router-link>
          <div
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
          >
            <a class="dropdown-item">Articulo</a>
          </div>
        </li>
        <li class="dropdown" v-show="this.visibleMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-person-fill text-light"
            viewBox="0 0 16 16"
          >
            <path
              d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            />
          </svg>
          <span
            id="navbarDropdown"
            class="dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            @click="showSubMenu"
            >COLABORADORES</span
          >
          <div
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
          >
            <a class="dropdown-item">Colaborador</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Dropdown from "./Dropdown";

export default {
  name: "toggle-menu",

  components: {
    Dropdown,
  },

  data() {
    return {
      visibleMenu: false,

      visibleSubMenu: false,

      services: [
        {
          title: "EMPRESAS",
          subItem: [
            {
              title: "Empresa",
              link: "nombre-empresa/empresas",
            },
          ],
        },
        {
          title: "ARTICULOS",
          subItem: [
            {
              title: "Articulo",
              link: "nombre-empresa/articulos",
            },
          ],
        },
        {
          title: "COLABORADORES",
          link: "#",
        },
      ],
    };
  },

  methods: {
    showToggleMenu() {
      this.visibleMenu = !this.visibleMenu;
    },

    showSubMenu() {
      this.visibleSubMenu = !this.visibleSubMenu;
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 20rem;
  height: auto;
  background: #302634;
  z-index: 10;
  transition: 0.2s;
}

.no-wrapper {
  width: 4rem;
  background: #302634;
  z-index: 10;
  transition: 0.2s;
}

.sidebar-wrapper .sidebar-heading {
  padding: 0.87rem 1.25rem;
  font-size: 1.2rem;
}

.page-content-wrapper {
  min-width: 15vh;
  background: #302634;
}

li {
  list-style: none;
  margin-top: 30px;
}

li > span {
  color: #ddd;
}

li > svg {
  margin: 0;
  padding: 0;
  margin-right: 10px;
}

a, a:link, a:focus, a:hover {
  text-decoration: none;
  color: #ddd
}

.dropdown-toggle::after {
  margin-left: 15px;
}

</style>