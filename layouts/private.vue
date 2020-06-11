<template>
  <div class="container-fluid p-0">
    <Navbar></Navbar>
    <nuxt />
  </div>
</template>
<script>
import Navbar from '~/components/Private/Navbar'
export default {
  middleware: 'log',
  components:{
    Navbar
}
}
</script>
<style >
html{
  background: initial !important;
}
</style>
