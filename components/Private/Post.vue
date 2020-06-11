<template>
   <div class="card cardpost" >
      <div class="card-header pl-0">
    {{post.postedBy.name}}
  </div>
  <img :src="post.photo" class="card-img-top" alt="..." style="width:450px;height:450px">
  <div class="card-body">
    <span>
      <i class="fa fa-heart-o" aria-hidden="true"></i>
    <h5 class="card-title">{{post.title}}</h5>
    </span>
    <p class="card-text">{{post.body}}</p>

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
<script>
export default {
  props:{
  post:{
    type: Object,
    required:true
  }
}
}
</script>
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
