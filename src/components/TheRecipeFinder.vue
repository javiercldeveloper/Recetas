<template>
<div>
  <h1 class="title" v-text="title" />
  <div
    v-if="state === 'chosing'"
   class="finderMain">
    <div class="ingredientsSelection">
      <h2>Indica los ingredientes de tu despensa</h2>
      <div>
        <select v-model="ingredientType" v-on:change="checkRemainingIngredients">
            <option disabled value="">Selecciona un tipo de ingrediente</option>
            <option>Carne</option>
            <option>Marisco</option>
            <option>Cereales, harinas y masas</option>
            <option>Frutas</option>
            <option>Legumbres y verduras</option>
            <option>Lácteos</option>
        </select>
      </div>
      <div>
        <select v-model="selectedIngredient" :disabled="!remainingIngredients">
            <option
              disabled
              value=""
              >{{ defaultSelectIngredientText }}
            </option>
            <option
              v-for="ingrediente in ingredientsByType"
              :key="ingrediente.id"
              >{{ingrediente.Nombre}}
            </option>
        </select>
      </div>
      <div>
        <input
          type="button"
          value="Añade el ingrediente"
          @click="addIngredientToQuery"
          :disabled="activeButton"
          >
          <div
            class="basket"
            :class="{ full: this.selectedIngredients.length > 0 }">
            <font-awesome-icon
              @click="showSelectedMobile()"
              icon="shopping-basket" />
            {{ this.selectedIngredients.length }}
          </div>
      </div>
    </div>
    <div class="selectionResult">
      <h2>Lista de ingredientes</h2>
      <p>Debes indicar al menos 4 ingredientes para que busquemos una receta</p>
      <div class="arrayChosen">
        <div class="ingredientChosen"
          v-for="selected in selectedIngredients"
          :key="selected.Id"
          >
          <div>{{ selected.Nombre }}</div>
          <div class="removebutton">
              <font-awesome-icon
              @click="removeIngredient(selected.Id)"
              icon="minus-circle" />
            </div>
        </div>
      </div>
      <div class="botonInferior">
        <input
          v-if="selectedIngredients.length > 0"
          type="button"
          @click="fetchRecipes"
          value="Busca tu receta">
      </div>
    </div>
  </div>
  <div
    v-else-if="state === 'loading'"
    class="chefLoading">
    <img src="../assets/img/chef.gif" alt="Chef Buscando">
  </div>
  <div
    v-else-if="state === 'result'"
    class="recipeList">
    <recipe-list
      :recipientslist="this.recipesResult"
    ></recipe-list>
  </div>
    <div
    v-else
    class="chefLoading">
      <p>Llama aquí y pidete algo</p>
      <img src="https://i.kinja-img.com/gawker-media/image/upload/s--ZRhU-h26--/c_scale,f_auto,fl_progressive,q_80,w_800/objl6gz9fd728tp5plg8.jpg" alt="Just Eat">
  </div>
</div>
</template>

<script>
import RecipeList from './RecipeList'
export default {
  name: 'TheRecipeFinder',
  components: { RecipeList },
  data () {
    return {
      title: 'Busca la receta con tus ingredientes',
      ingredients: [],
      ingredientType: '',
      selectedIngredient: '',
      remainingIngredients: false,
      selectedIngredients: [],
      defaultSelectIngredientText: 'Selecciona un ingrediente',
      state: 'chosing',
      recipesResult: []
    }
  },
  created () {
    // On created we fill the list of ingredients
    this.fetchIngredients()
  },
  computed: {
    activeButton () {
      // Button disabled if no ingredient has been chosen
      if (this.selectedIngredient === '') { return true } else return false
    },
    ingredientsByType () {
      let filteredIngredients = this.ingredients.filter((ingrediente) => {
        return ingrediente.Tipo.includes(this.ingredientType) && !ingrediente.Seleccionado
      })
      function compare (a, b) {
        if (a.Nombre < b.Nombre) { return -1 }
        if (a.Nombre > b.Nombre) { return 1 }
        return 0
      }
      return filteredIngredients.sort(compare)
    }
  },
  methods: {
    showSelectedMobile () {
      document.getElementsByClassName('selectionResult')[0].scrollIntoView()
    },

    fetchIngredients () {
    // Method to get the whole list of ingredientes
      this.$services.methods.getIngredients().then((result) => { this.ingredients = result })
    },

    checkRemainingIngredients () {
      // Method to check for remaining ingredients an enable the ingredient selector
      if (this.ingredientsByType.length > 0) {
        this.remainingIngredients = true
        this.defaultSelectIngredientText = 'Selecciona un ingrediente'
      } else {
        this.remainingIngredients = false
        this.defaultSelectIngredientText = 'No quedan ingredientes de este tipo'
      }
    },

    addIngredientToQuery () {
    // Method to add the chosen ingredient to query array and rerender the ingredient selector
      let chosenIngredient = this.ingredients.find(obj => obj.Nombre === this.selectedIngredient)
      this.selectedIngredients.push(chosenIngredient)
      let index = this.ingredients.findIndex(x => x.Nombre === this.selectedIngredient)
      this.ingredients[index].Seleccionado = true
      this.selectedIngredient = ''
      this.checkRemainingIngredients()
    },

    removeIngredient (id) {
    // Method to remove an ingredient from the chosen list
      let index = this.ingredients.findIndex(x => x.Id === id)
      this.ingredients[index].Seleccionado = false
      index = this.selectedIngredients.findIndex(x => x.Id === id)
      this.selectedIngredients.splice(index, 1)
    },

    fetchRecipes () {
    // Method to fetch the list of required recipes
      document.getElementsByClassName('title')[0].scrollIntoView()
      this.state = 'loading'
      this.title = 'Estamos buscando tus recetas'
      this.$services.methods.getMatchingRecipes(this.selectedIngredients).then((result) => {
        if (result.length > 0) {
          this.recipesResult = result
          this.title = 'Este es el listado de recetas'
          this.state = 'result'
        } else {
          this.title = 'No se han encontrado recetas con dichos ingredientes'
          this.state = 'noResult'
        }
      })
    }
  }
}

</script>

<style lang="scss" scoped>
@import "../styles/global.scss";

.basket {
  display: none;
  margin-top: 30px;
  opacity: 0.3;
  &.full{
    opacity: 1;
  }
}

.finderMain{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
}

.ingredientsSelection {
  border-radius: 10px;
  background-color:cadetblue;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px;
  align-self: stretch;
  text-align: center;
  justify-items: flex-start;
    & >* {
      margin-bottom: 40px;
    }
}

.selectionResult{
  border-radius: 10px;
  margin-left: 40px;
  padding: 20px;
  text-align: center;
  min-height: 400px;
  background-color: antiquewhite;
  flex: 1.3;
  display: flex;
  flex-direction: column;
  align-items: stretch;

}

 @media screen and (max-width: 620px) {
        .selectionResult{
            margin-left: 0px;
            margin-top: 30px;
            margin-bottom: 50px;
            flex: 1;
        }
        .basket {
          display: block;
        }
    }

.input{
  background-color:beige;
}

.arrayChosen{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-column-gap: 5px;
  grid-row-gap: 5px;

  & .ingredientChosen{
    border-radius: 5px;
    border: 1px solid black;
    background-color: #3aad4d;
    padding: 3px;
    padding-left: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    & >*{
      flex:1;
      text-align: center;
    }
    & > .removebutton{
      flex: 0.3;
      cursor: pointer;
      padding-left: 3px;
      border-left-color: black;
      border-left-width: 2px;
      border-left-style: solid;
      color: white;
    }
  }
}

.botonInferior{
  margin-top: 30px;
  padding: 20px;
  text-align: center;
  flex: 1;
}

.chefLoading, .recipeList {
  text-align: center;
  width: 100%;
  height: auto;
}

.chefLoading{
  max-width: 700px;
  margin:auto;
}

.recipeList >*{
      margin:auto;
      margin-bottom: 20px;
      @media screen and (max-width: 620px) {
        text-align: center;
      }
    }
</style>
