<template>
  <div>
     <div class="container h-100 wrapper-jumb">
    <div class="row align-items-center h-100">
        <div class="col-6 mx-auto bgimage">
            <div class="jumbotron bg-transparent">
              <h1 class="cover-heading text-center">Welcome to instagram</h1>
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Username</label>
                  <input type="text" class="form-control" name="foobar" v-model="user.username">
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Nom complet</label>
                  <input type="text" class="form-control" name="foobar" v-model="user.fullname">
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" name="foobar" v-model="user.email">
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" name="foobar" v-model="user.password">
                </div>
                <div class="text-center">
                <button type="submit" class="btn btn-primary" @click.stop.prevent="submit()">Enregistrer</button>
                </div>
              </form>
            </div>
        </div>
    </div>
</div>
  </div>
</template>
<script>
export default {
    data(){
      return {
        user:{}
      }
    },
    methods: {
      submit(){
         //if you want to send any data into server before redirection then you can do it here
        console.log(this.user)
      }
    }
  }
</script>
<style scoped>
.wrapper-jumb{
padding-top: 4%;
  }
  .jumbotron h1 {
    font-family: 'Grand Hotel', cursive;
    }
    .bgimage{
background: rgba(555, 555, 555, 0.4);
border-radius: 3px;
      }
</style>
