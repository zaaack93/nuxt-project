<template>
<div class="bg-transparent top-nav">
<div class="container">
<nav class="navbar navbar-light">
  <nuxt-link to="/" class="navbar-brand" >Instagram</nuxt-link>

  <div class="sideitem" >
    <div class="navbar-nav">
      <nuxt-link to="/" class="nav-item nav-link" >Accueil</nuxt-link>
      <nuxt-link to="/login" class="nav-item nav-link" >Seconnecter</nuxt-link>
      <nuxt-link to="/inscription" class="nav-item nav-link" >S'inscrire</nuxt-link>
    </div>
  </div>

</nav>
</div>
</div>
</template>
<style scoped>
.top-nav{
    margin: 0px -15px;
  }
  .sideitem .navbar-nav{
display: inline-block !important;
}
.sideitem .navbar-nav .nav-link{
  display: inline !important;
  margin: 0px 5px;
  font-weight: 700;
  font-size: 15px;
  background-color: transparent;
  border-bottom: .25rem solid transparent;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   color:#fff !important;
    border-bottom-color: #fff;
  }
  .navbar-brand{
font-family: 'Grand Hotel', cursive;
font-size: 35px;
 color:#fff !important;

    }
  </style>
