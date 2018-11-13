<template>
    <div class="mainChef">
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

<style lang="scss" >
    .mainChef{
        display: flex;
        text-align: center;
    }
    .div50-left {
        flex:1;
        background-color: cornflowerblue;
        padding: 20px;
     }
    .div50-right {
        flex:1;
        background-color: dimgray;
        padding: 20px;
    }
    @media screen and (max-width: 800px) {
        .mainChef{
            flex-wrap: wrap;
        }
    }
</style>
