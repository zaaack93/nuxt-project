<template>
 <div class="container h-100">
    <div class="row align-items-center h-100">
        <div class="col-6 mx-auto">
            <div class="jumbotron bg-transparent text-center">
                <h1 class="cover-heading">Welcome to instagram</h1>
                    <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                    <p class="lead">
                      <nuxt-link to="/login" class="btn btn-lg btn-light">Seconnecter</nuxt-link>
                    </p>
            </div>
        </div>
    </div>
</div>
</template>
<script>

export default {
  layout: 'default',
components:{

}
}
</script>
<style scoped>

  .jumbotron h1 {
    font-family: 'Grand Hotel', cursive;
  }
</style>
