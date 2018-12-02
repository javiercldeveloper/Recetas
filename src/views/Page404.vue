<template>
  <div class="notFound">
    <h2>La página a la que intenta acceder no existe.</h2>
    <p>Puedes volver a la página de inicio pinchando aquí: </p>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'Page404'
}
</script>

<style lang="scss">
 .notFound{
   text-align: center;
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
