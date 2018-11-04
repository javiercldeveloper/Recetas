<template>
  <div>
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
