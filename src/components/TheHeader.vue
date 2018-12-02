<template>
    <div class="header">
      <router-link to="/" class="logo" exact>KayPaCome <font-awesome-icon icon="utensils" /></router-link>
      <div
        class="header-right"
        :class="{ abierto: clickado }">
        <router-link to="/acceso">Acceso</router-link>
        <router-link to="/contacto">Contacto</router-link>
        <router-link to="/buscatureceta">Busca la receta</router-link>
        <router-link v-if="user === '5c045ff0698a673501394d61'" to="/insertarnuevosingredientes">Insertar Ingredientes</router-link>
        <router-link v-if="user === '5c045ff0698a673501394d61'" to="/insertarnuevarecetas">Insertar Recetas</router-link>
      </div>
      <font-awesome-icon
        @click="desplegarMenu"
        :icon="icon"
        class="button"
      />
    </div>
</template>

<script>

export default {
  name: 'TheHeader',
  data () {
    return {
      clickado: false,
      icon: 'bars'
    }
  },
  computed: {
    user () {
      if (JSON.parse(localStorage.getItem('__stitch.client.segundo-bjjsd.auth_info'))) {
        return JSON.parse(localStorage.getItem('__stitch.client.segundo-bjjsd.auth_info')).user_id
      }
      return null
    }
  },
  watch: {
    // Observer to close the mobile menu on page change
    $route (to) {
      this.clickado = false
      this.icon = 'bars'
    },
    user (newUser) {
      this.user = newUser
    }
  },
  methods: {
    desplegarMenu () {
      this.clickado ? this.clickado = false : this.clickado = true
      this.icon === 'bars' ? this.icon = 'times' : this.icon = 'bars'
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
  justify-content:space-around;
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
  &.router-link-active{
    background-color: $color-primary;
    color: white;
  }
}

.header a:hover {
  background-color: $color-primary-dark;
}

.header .router-link-active {
  background-color:$color-primary-light ;
}

@media screen and (max-width: 992px) {
  .header a.logo {
    margin: auto;
  }
  .header-right {
    display:none;
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
        >*{
          border-bottom: 1px solid black;
          border-radius: 0px;
        }
     }
  }
  .button{
    display:block;
    position: fixed;
    right: 50px;
  }
}

@media screen and (min-width: 992px) {
  .header-right {
    display:block;
  }
  .button{
    display:none;
  }
}
</style>
