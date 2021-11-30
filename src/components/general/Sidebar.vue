<template>
  <div class="wrapper">
    <nav id="sidebar">
      <div class="dismiss">
        <i class="bi bi-list"></i>
      </div>
      <img src="@/assets/logo.png" alt="logo" />
      <ul class="list-unstyled components">
        <p>ENTITIES</p>
        <div class="item-menu">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
              >EMPRESAS</a
            >
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Empresas</a></li>
            </ul>
          </li>
        </div>
        <div class="item-menu">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
              >ARTICULOS</a
            >
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Articulo</a></li>
            </ul>
          </li>
        </div>
        <div class="item-menu">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
              >COLABORADORES</a
            >
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Colaborador</a></li>
            </ul>
          </li>
        </div>
      </ul>
    </nav>

    <div id="content">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <button type="button" id="sidebarCollapse" class="btn btn-info">
                    <i class="bi bi-list align-left"></i>
                </button>
            </div>
        </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
};
</script>