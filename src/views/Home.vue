<template>
  <div class="container-fluid bg-light">
    <div class="row">
      <div class="col-12 col-lg-7 align-self-end">
        <search-component/>
        <links-components/>
      </div>
      <div class="col-12 col-lg-5">
        <service-component/>
      </div>
    </div>
  </div>
</template>

<script>
import SearchComponent from '@/components/homecomponents/SearchComponent';
import LinksComponents from '@/components/homecomponents/LinksComponents';
import ServiceComponent from '@/components/homecomponents/ServiceComponent';

export default {
  name: "home",

  components: { 
    SearchComponent,
    LinksComponents,
    ServiceComponent
    }
};
</script>

<style scoped>

</style>