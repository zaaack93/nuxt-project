<template>
  <div class="container-fluid stylecontainer">
    <Navbar></Navbar>
    <nuxt />
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'
export default {
  components:{
    Navbar,Footer
}
}
</script>
<style>
.stylecontainer{
 font-family: 'Roboto', sans-serif;
  background:url('~@/assets/images/bg.webp');
    background-size: cover;
    height:calc(100vh );
    overflow: hidden;
  }
  body{
background-color: transparent !important;
    }
html {


}
</style>
