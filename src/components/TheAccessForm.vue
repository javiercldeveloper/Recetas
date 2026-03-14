<template>
  <div>
    <div v-if="!isLoggedIn" class="access">
      <h2>Acceso</h2>
      <label for="email">Email</label>
      <input type="text" name="email" v-model="email">
      <label for="password">Password</label>
      <input type="password" name="password" v-model="password">
      <input type="button" value="Log In" @click="logIn">
      {{ message }}
    </div>
    <div v-else class="access">
      <p>Usuario con id {{ userId }} conectado</p>
      <input type="button" value="Log Out" @click="logOut">
      {{ message }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TheAccessForm',
  data () {
    return {
      email: '',
      password: '',
      message: ''
    }
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn', 'userId'])
  },
  methods: {
    ...mapActions('auth', ['login', 'logout']),
    async logIn () {
      try {
        await this.login({ email: this.email, password: this.password })
        this.message = ''
        this.$router.push('/')
      } catch (error) {
        this.message = error.message
      }
    },
    async logOut () {
      try {
        await this.logout()
        this.message = ''
        this.$router.push('/')
      } catch (error) {
        this.message = error.message
      }
    }
  }
}
</script>

<style lang="scss">
.access {
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  & > * {
    margin-bottom: 20px;
    width: 50%;
    @media screen and (max-width: 620px) {
      width: 80%;
    }
  }
}
label {
  font-weight: bold;
}
</style>
