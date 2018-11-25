<template>
    <div class="main">
    <div class="image">
      <a :href="'/receta/'+ this.recipe.id.$numberInt">
        <img
        :src="this.recipe.image === '' ? `/images/noimage.jpg` : this.recipe.image"
        class="sliderImage">
      </a>
    </div>
    <div class="rest">
      <h2><a :href="'/receta/'+ this.recipe.id.$numberInt">
      <strong>{{ this.recipe.nombre }}</strong>
      </a>
      </h2>
      <hr>
      <p>{{ this.recipe.descripcion }}</p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'SliderItem',
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
  max-height: 800px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 60%;
  margin: auto;
  margin-bottom: 20px;
  @media screen and (max-width: 620px) {
        text-align: center;
      }
}
.image{
  flex-shrink: 0;
  margin:auto;
  width: 50%;
  height: auto;
  padding-left: 30px;
  padding-right: 30px;
}
.rest{
  align-self: center;
  padding-left: 30px;
  padding-right: 30px;
  flex-grow: 1;
    @media screen and (max-width: 620px) {
        text-align: center;
        margin-top: 10px;
      }
}

</style>
