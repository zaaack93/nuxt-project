<template>
<div class="container pt-4">
  <PostsList></PostsList>
</div>
</template>
<script>
import PostsList from "~/components/Private/PostsList"
export default {

  layout: 'private',
  components:{
    PostsList
  },
  computed:{
    createdc(){
      console.log("from created")
    },
    mountedc(){
      console.log("from munted")
    }
  },

  }
</script>
