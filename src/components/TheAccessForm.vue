<template>
  <div>
    <div v-if="!logged" class="access">
      <h2>Acceso</h2>
      <label for="email">Email</label>
      <input type="text" name="email" v-model="email">
      <label for="password">Password</label>
      <input type="password" name="password" v-model="password">
      <input type="button" value="Log In" @click="logIn">
      {{message}}
    </div>
    <div v-else class="access">
      <p>Usuario con id {{user}} conectado</p>
      <input type="button" value="Log Out" @click="logOut">
      {{message}}
    </div>
  </div>
</template>

<script>
import { store } from '../store.js'
import { UserPasswordCredential } from 'mongodb-stitch-browser-sdk'

var currentUser
if (localStorage.getItem('__stitch.client.segundo-bjjsd.auth_info')) {
  currentUser = JSON.parse(localStorage.getItem('__stitch.client.segundo-bjjsd.auth_info')).user_id
} else currentUser = null
export default {
  name: 'TheAccessForm',
  data () {
    return {
      email: '',
      password: '',
      message: '',
      logged: false
    }
  },
  computed: {
    user () {
      return currentUser
    }
  },
  created () {
    currentUser === '5c045ff0698a673501394d61' ? this.logged = true : this.logged = false
  },
  methods: {
    logIn () {
      const credential = new UserPasswordCredential(this.email, this.password)
      store.client.auth.loginWithCredential(credential)
        .then(user => { location.reload() })
        .catch((error) => {
          this.message = error.message
        })
    },
    logOut () {
      store.client.auth.logout()
        .then(response => {
          this.logged = false
          location.reload()
        })
    }
  }
}
</script>

<style lang="scss">
 .access{
   margin:auto;
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   align-items: center;
   &>*{
     margin-bottom: 20px;
     width: 50%;
     @media screen and (max-width: 620px) {
       width: 80%;
     }
   }
 }
 label{
   font-weight: bold;
 }
</style>
