<template>
    <div class="header">
      <router-link to="/" class="logo" exact>KayPaCome <font-awesome-icon icon="utensils" /></router-link>
      <div class="header-right">
        <router-link to="/acceso">Acceso</router-link>
        <router-link to="/contacto">Contacto</router-link>
        <router-link to="/buscatureceta">Busca la receta</router-link>
        <!-- <router-link to="/buscatuchef">Busca el chef</router-link>
        <router-link to="/insertarnuevositems">Insertar Items</router-link> -->
      </div>
      <div class="button">XX</div>
    </div>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>
<style lang="scss">
/* Temporary stylesheet for the header */

/* Style the header with a grey background and some padding */
.header {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content:space-around;
  align-items: center;
  background-color: #3aad4d;
  padding: 15px 10px;
  min-height: 40px;
}

/* Style the header links */
.header a {
  color: white;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  border-radius: 4px;

}

/* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
.header a.logo {
  font-size: 25px;
  font-weight: bold;
  &.router-link-active{
    background-color: #3aad4d;
    color: white;
  }
}

/* Change the background color on mouse-over */
.header a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the active/current routerlink*/
.header .router-link-active {
  background-color:cornflowerblue ;
  color: white;
}

@media screen and (max-width: 992px) {
  .header a.logo {
    margin: auto;
  }
  .header-right {
    display:none;
  }
  .button{
    display:block;
    position: fixed;
    right: 50px;
  }
}
@media screen and (max-width: 992px) {
  .button{
    right: 20px;
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
