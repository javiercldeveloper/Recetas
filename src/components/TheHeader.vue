<template>
  <div class="header">
    <router-link to="/" class="logo" exact>KayPaCome <font-awesome-icon icon="utensils" /></router-link>
    <div class="header-right" :class="{ abierto: menuOpen }">
      <router-link to="/acceso">Acceso</router-link>
      <router-link to="/contacto">Contacto</router-link>
      <router-link to="/buscatureceta">Busca la receta</router-link>
      <router-link v-if="isAdmin" to="/insertarnuevosingredientes">Insertar Ingredientes</router-link>
      <router-link v-if="isAdmin" to="/insertarnuevarecetas">Insertar Recetas</router-link>
    </div>
    <font-awesome-icon @click="toggleMenu" :icon="icon" class="button" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TheHeader',
  data () {
    return {
      menuOpen: false,
      icon: 'bars'
    }
  },
  computed: {
    ...mapGetters('auth', ['isAdmin'])
  },
  watch: {
    $route () {
      this.menuOpen = false
      this.icon = 'bars'
    }
  },
  methods: {
    toggleMenu () {
      this.menuOpen = !this.menuOpen
      this.icon = this.menuOpen ? 'times' : 'bars'
    }
  }
}
</script>

<style lang="scss">
@import "../styles/global.scss";
.header {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: $color-primary;
  padding: 15px 10px;
  min-height: 40px;
  z-index: 10000;
}

.header a {
  color: white;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  border-radius: 4px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
  &.router-link-active {
    background-color: $color-primary;
    color: white;
  }
}

.header a:hover {
  background-color: $color-primary-dark;
}

.header .router-link-active {
  background-color: $color-primary-light;
}

@media screen and (max-width: 992px) {
  .header a.logo {
    margin: auto;
  }
  .header-right {
    display: none;
    &.abierto {
      width: 200px;
      position: fixed;
      top: 86px;
      right: 0;
      overflow: auto;
      display: flex;
      flex-direction: column;
      background-color: $color-primary;
      border-top: 1px solid black;
      > * {
        border-bottom: 1px solid black;
        border-radius: 0px;
      }
    }
  }
  .button {
    display: block;
    position: fixed;
    right: 50px;
  }
}

@media screen and (min-width: 992px) {
  .header-right {
    display: block;
  }
  .button {
    display: none;
  }
}
</style>
