<template>
  <div>
    <div class="superposition">
      <div class="d-flex justify-content-center justify-content-lg-start">
        <img src="@/assets/resource-1.png" alt="resource" />
      </div>
        <h3 class="title-aside text-center w-100">SERVICIOS QUIPUX</h3>
    </div>
    <div class="content-aside shadow-sm bg-white">
      <h4 class="ml-5 mb-2">Trámites en tu mano</h4>
      <p class="ml-5">
        <small
          >Ahora podrás hacer todos tus trámites desde la comodidad de tu casa,
          desde cualquier dispositivo computadora, tablet o móvil.</small
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "service-component",
};
</script>

<style scoped>
.superposition {
    position: relative;
    text-align: center;
}

.title-aside {
  background: #ffffff83;
  position: absolute;
  top: 80%;
  left: 25%;
}

h4 {
  color: #3377b5;
}

h3 {
  color: #3377b5;
}

.content-aside {
  border-left: 3.5px solid #3377b5;
}

p > small {
  color: #666;
}
</style>