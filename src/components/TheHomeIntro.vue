<template>
    <div>
        <div class="div50-left">
            <h1>Aqui estará la llamada a la acción</h1>
            <router-link to="/acceso" tag="button">Busca tu receta</router-link>
        </div>
        <div class="div50-right">
            <h2>Aquí estará la mascota de la web</h2>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TheHomeIntro'
}
</script>

<style>
    .div50-left {
        width: 50%;
        float: left;
        background-color: cornflowerblue;
        height: 500px;
        text-align: center;
    }
    .div50-right {
        width: 50%;
        float: right;
        background-color: dimgray;
        height: 500px;
        text-align: center;
    }

</style>
