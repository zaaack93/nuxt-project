<template>
   <div class="card cardpost" >
      <div class="card-header pl-0">
    Bouzangad zakaria
  </div>
  <img src="https://images.unsplash.com/photo-1588870410947-895d92561635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1220&q=80" class="card-img-top" alt="...">
  <div class="card-body">
    <span>
      <i class="fa fa-heart-o" aria-hidden="true"></i>
    <h5 class="card-title">Poste title</h5>
    </span>
    <p class="card-text">Some quick example text to build on the Poste title and make up the bulk of the card's content.</p>

    <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Comment ...." >
  <div class="input-group-append">
    <button class="btn btn-outline-primary" type="button" id="button-addon2"><i class="fa fa-paper-plane" aria-hidden="true"></i>
</button>
  </div>
</div>
  </div>
</div>
</template>

<style scoped>
.cardpost{
border:none
}
.cardpost .card-header{
  background-color: transparent;
  cursor: pointer;
}
.cardpost .card-title{
  display: inline;

}
.cardpost span i {
    font-size: 21px;
cursor: pointer;
left: -2px;
position: relative;
}
</style>
