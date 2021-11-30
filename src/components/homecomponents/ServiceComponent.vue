<template>
  <div>
    <div class="superposition">
      <div class="d-flex justify-content-center justify-content-lg-start">
        <img src="@/assets/resource-1.png" alt="resource" />
      </div>
        <h3 class="title-aside text-center w-100 font-weight-bold">SERVICIOS QUIPUX</h3>
    </div>
    <div class="content-aside shadow-sm bg-white py-3">
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
  background: #ffffffdc;
  position: absolute;
  top: 75%;
  padding: 20px;
  
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