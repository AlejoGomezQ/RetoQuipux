<template>
  <div class="row">
    <div class="col-12 col-lg-4">
      <info-empresa/>
    </div>
    <div class="col-12 col-lg-8">
      <info-contacto/>
    </div>

  </div>
</template>

<script>
import InfoEmpresa from '@/components/empresa/InfoEmpresa'
import InfoContacto from '@/components/empresa/InfoContacto'


export default {
  name: "empresas",

  components: { 
    InfoEmpresa,
    InfoContacto 
  }

}
</script>