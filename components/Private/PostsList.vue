<template>
<div class="row">
  <div class="col-sm-6" v-for="post in posts" :key="post._id">
    <Post :post="post"></Post>
  </div>
</div>
</template>

<script>
import Post from "~/components/Private/Post"
export default {
components :{
  Post
},
props:{
  posts:{
    type: Array,
    required:true
  }
}
}
</script>
