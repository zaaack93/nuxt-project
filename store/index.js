import Vuex from 'vuex'
import axios from 'axios'

const createStore = () =>{
  return new Vuex.Store({
    state:{
      loadedPosts:[]
    },
    mutations:{
      //payload fha dl7ala heya posts
      setPosts(state,posts){
        state.loadedPosts=posts
      },
      addPost(state,post){},
      editPost(state,editedPost){

      }
    },
    actions:{
      //il execute une fois usr le serveur c'est pourquoi ona execute ce code pour pas provoquer l'errer
      nuxtServerInit(vuexContext, context){
        //if(!process.client){
          // ze3ma process serveur
          return axios.get('http://localhost:5000/allpost',{
            headers: {
              'Content-Type':'application/json',
              'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRjZmJlMGNmZjBjZTJlNzhiN2MxYTIiLCJpYXQiOjE1OTE4NjU0Njl9.W6dQf3a9ai8W0v0kZL6qayS00QN6oSlTEX0Wyf9U1xk`
            }
          }).then(res=>{
            const postArray =[]
            for(const key in res.data){
              postArray.push({...res.data[key]})
            }
            vuexContext.commit('setPosts',postArray)
          }).catch(e=>context.error(e))

      },
      //action c commit les mutations
      setPosts(vuexContext,posts){
        vuexContext.commit('setPosts',posts)
      }
    },
    getters:{
      loadedPosts(state){
        return state.loadedPosts
      }
    }
  })
}
//drna function parceque khasseha tkoon callbale par nuxt f server
export default createStore
