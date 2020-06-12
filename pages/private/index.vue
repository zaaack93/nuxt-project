<template>
<div class="container pt-4">
  <PostsList :posts="loadedPosts"></PostsList>
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
  created(){
    //this.$store.dispatch('setPosts',this.loadedPosts)
    console.log(this.$store.getters.loadedPosts)
  },
  //fetch c'est comme asyncdata
  fetch(){

  },
  data(){
    return{

    }
  },
  computed: {
    loadedposte(){
      return this.$store.getters.loadedPosts
    }
  },
  }
</script>
