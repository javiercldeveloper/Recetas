<template>
  <div class="main">
    <div class="image"><a href="#"><img :src="this.recipe.Thumbnail"></a></div>
    <div class="rest">
      <a href="#">
      <strong>{{ this.recipe.Nombre }}</strong>
      </a>
      <hr>
    <p>{{ this.recipe.Descripcion }}</p>
    <p>Ingredientes : {{ this.recipe.Ingredientes.join(', ') }}</p></div>
  </div>
</template>

<script>
export default {
  name: 'RecipeListItem',
  props: {
    recipe: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.main{
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 60%;
  border: 1px solid black;
  margin: auto;
  margin-bottom: 20px;
  @media screen and (max-width: 620px) {
        text-align: center;
      }
}
.image{
  flex-shrink: 0;
  margin:auto;
}
.rest{
  margin-left: 10px;
  flex-grow: 1;
    @media screen and (max-width: 620px) {
        text-align: center;
        margin-top: 10px;
      }
}
</style>
