<template>
  <div>
    <div v-if="!logged" class="access">
      <h2>Acceso</h2>
      <input type="text" name="email" v-model="email">
      <input type="password" name="password" v-model="password">
      <input type="button" value="Log In" @click="log">
      {{message}}
    </div>
    <div v-else class="access">
      <p>Usuario con id {{user}} conectado</p>
      <input type="button" value="Log Out" @click="fuera">
      {{message}}
    </div>
  </div>
</template>

<script>
import {
  Stitch,
  UserPasswordCredential
} from 'mongodb-stitch-browser-sdk'

const client = Stitch.initializeDefaultAppClient('segundo-bjjsd')
const currentUser = JSON.parse(localStorage.getItem('__stitch.client.segundo-bjjsd.auth_info')).user_id

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
    currentUser === '5bfba961698a673ef8c4e16d' ? this.logged = true : this.logged = false
  },
  methods: {
    log () {
      const credential = new UserPasswordCredential(this.email, this.password)
      client.auth.loginWithCredential(credential)
        .then(user => { location.reload() })
        .catch((error) => {
          this.message = error.message
        })
    },
    fuera () {
      client.auth.logout()
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
</style>
