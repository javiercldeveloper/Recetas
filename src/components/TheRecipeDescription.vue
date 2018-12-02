<template>
  <div>
    <loader v-if="loading"/>
    <div v-else>
    <h1 class="title">Receta: {{ this.recipe.nombre }}</h1>
    <div class="main">
      <div>
        <div class="recipeImage">
          <img :src="this.recipe.image === '' ? `/images/noimage.jpg` : this.recipe.image">
        </div>
      </div>
      <div>
        <div class="description">
            <div>
                <strong>Descripción:</strong>
                <br>
                {{this.recipe.descripcion}}
            </div>
            <div>
                <strong>Preparación:</strong>
                <br>
                {{this.recipe.preparacion}}
            </div>
            <div>
              <strong>Tiempo de preparación:</strong>
              <br>
              {{this.recipe.tiempoPreparacion}}
            </div>
            <div>
                <strong>Ingredientes:</strong>
                <br>
                <ul>
                    <li
                    v-for="(ingrediente, index) in this.recipe.ingredientes"
                    :key="index">
                      {{ ingrediente }}
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
    </div>
    </div>
</template>

<script>
import Loader from '../components/Loader'
export default {
  name: 'TheRecipeDescription',
  components: { Loader },
  created () {
    this.loading = true
    this.$services.methods.getRecipe(this.id).then((result) => {
      this.loading = false
      this.recipe = result
    })
  },
  data () {
    return {
      loading: false,
      recipe: {},
      id: this.$route.params.id
    }
  },
  watch: {
    '$route' (to) {
      this.idReceta = to.params.id
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../styles/global.scss";
  .main {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      >*{
          width: 40%;
          min-width: 380px;
          margin-bottom: 30px;
          padding-left: 20px;
          padding-right: 20px;
          @media screen and (max-width: 620px) {
            min-width: 280px;
      }
      }
  }
  .recipeImage {
      & img{
          border-radius: 25px;
      }

  }
  .description {
      padding:15px;
      background-color: $color-secondary-light;
      display: flex;
      flex-direction: column;
      >* {
          margin-bottom: 10px;
      }
  }
</style>
