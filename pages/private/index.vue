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

  },
  asyncData(){


  },
  data(){
    return{
      loadedPosts:[
        {
            "_id": "5edd2c1c272d471c606b41c9",
            "title": "This is amazing post",
            "body": "poste body",
            "photo": "https://res.cloudinary.com/dytm9pjyx/image/upload/v1591560306/q0ripinorusnpsb5mvtk.jpg",
            "postedBy": {
                "_id": "5edcfbe0cff0ce2e78b7c1a2",
                "name": "zakaria"
            },
            "__v": 0
        },
        {
            "_id": "5edd30c5272d471c606b41ca",
            "title": "tete",
            "body": "tete",
            "photo": "https://res.cloudinary.com/dytm9pjyx/image/upload/v1591561494/mpqeiyky7qzsb5iffhm8.png",
            "postedBy": {
                "_id": "5edcfbe0cff0ce2e78b7c1a2",
                "name": "zakaria"
            },
            "__v": 0
        },
        {
            "_id": "5eddfb2942de8c0ef08b44ba",
            "title": "amazing",
            "body": "description post",
            "photo": "https://res.cloudinary.com/dytm9pjyx/image/upload/v1591613310/wi87fvd9y87vq5ozobsn.png",
            "postedBy": {
                "_id": "5edcfbe0cff0ce2e78b7c1a2",
                "name": "zakaria"
            },
            "__v": 0
        },
        {
            "_id": "5ede0dac42de8c0ef08b44bb",
            "title": "az",
            "body": "zzz",
            "photo": "https://res.cloudinary.com/dytm9pjyx/image/upload/v1591618051/ywwpzhpgzzpsaaf6i4td.png",
            "postedBy": {
                "_id": "5edcfbe0cff0ce2e78b7c1a2",
                "name": "zakaria"
            },
            "__v": 0
        },
        {
            "_id": "5ede0e6342de8c0ef08b44bc",
            "title": "teste",
            "body": "teste body",
            "photo": "https://res.cloudinary.com/dytm9pjyx/image/upload/v1591618235/crbi1zbqoyv1a67bq3wq.png",
            "postedBy": {
                "_id": "5edcfbe0cff0ce2e78b7c1a2",
                "name": "zakaria"
            },
            "__v": 0
        },
        {
            "_id": "5ee1f238b4cd4159ebdf1d7d",
            "title": "Image title",
            "body": "lorem upsum project",
            "photo": "https://images.unsplash.com/photo-1588870410947-895d92561635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1220&q=80",
            "postedBy": {
                "_id": "5edcfbe0cff0ce2e78b7c1a2",
                "name": "zakaria"
            },
            "__v": 0
        },
        {
            "_id": "5ee1f256b4cd4159ebdf1d7e",
            "title": "Image title",
            "body": "lorem upsum project",
            "photo": "https://images.unsplash.com/photo-1588870410947-895d92561635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1220&q=80",
            "postedBy": {
                "_id": "5edcfbe0cff0ce2e78b7c1a2",
                "name": "zakaria"
            },
            "__v": 0
        },
        {
            "_id": "5ee20f06de473a645337309d",
            "title": "Image title",
            "body": "lorem upsum project",
            "photo": "https://images.unsplash.com/photo-1588870410947-895d92561635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1220&q=80",
            "postedBy": {
                "_id": "5edcfbe0cff0ce2e78b7c1a2",
                "name": "zakaria"
            },
            "__v": 0
        }
      ]
    }
  }

  }
</script>
