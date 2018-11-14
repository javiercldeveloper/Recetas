<template>
<div>
  <h1 class="title" v-text="title" />
  <div class="finderMain">
    <div class="ingredientsSelection">
      <h2>Indica los ingredientes de tu despensa</h2>
      <div>
        <select v-model="ingredientType" v-on:change="checkRemainingIngredients">
            <option disabled value="">Selecciona un tipo de alimento</option>
            <option>Carne</option>
            <option>Hortaliza</option>
            <option>Verdura</option>
        </select>
      </div>
      <br>
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
      <br>
      <br>
      <div>
        <input
          type="button"
          value="Añade el ingrediente"
          @click="addIngredientToQuery"
          :disabled="activeButton"
          >
      </div>
    </div>
    <div class="selectionResult">
      <h2>Lista de ingredientes</h2>

      <p>Debes indicar al menos 4 ingredientes para que busquemos una receta</p>
      <small class="phoneadvise">Si deseas quitar algún ingrediente de la lista, pulsa sobre él.</small>
      <div class="arrayChosen">
        <div class="ingredientChosen"
          v-for="selected in selectedIngredients"
          :key="selected.id"
          @click="removeIngredient"
          > {{ selected.Nombre }} <span class="deleteIngredient">
              <font-awesome-icon icon="minus-circle" />
            </span>
        </div>
      </div>
      <div class="botonInferior">
        <input
          v-if="selectedIngredients.length > 3"
          type="button"
          value="Busca tu receta">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TheRecipeFinder',
  data () {
    return {
      title: 'Busca la receta con tus ingredientes',
      ingredients: [],
      ingredientType: '',
      selectedIngredient: '',
      remainingIngredients: false,
      selectedIngredients: [],
      defaultSelectIngredientText: 'Selecciona un ingrediente'
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
    fetchIngredients () {
    // Method to get the whole list of ingredientes
      this.ingredients = this.$services.methods.getIngredients()
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
    removeIngredient (event) {
      let index = this.ingredients.findIndex(x => x.Nombre === event.srcElement.innerText)
      this.ingredients[index].Seleccionado = false
      index = this.selectedIngredients.findIndex(x => x.Nombre === event.srcElement.innerText)
      this.selectedIngredients.splice(index, 1)
    }
  }
}

</script>

<style lang="scss" scoped>
@import "../styles/global.scss";

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
  text-align: center;
  justify-items: flex-start;

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

.phoneadvise{
  display: none;
}

 @media screen and (max-width: 620px) {
        .selectionResult{
            margin-left: 0px;
            margin-top: 30px;
            margin-bottom: 50px;
            flex: 1;
        }
        .phoneadvise{
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
    cursor: pointer;
  }
}

.ingredientChosen:hover{
  background: red;
}
.ingredientChosen:hover .deleteIngredient{
  display: inline;
}

.deleteIngredient{
 display: none;
}

.botonInferior{
  margin-top: 30px;
  padding: 20px;
  text-align: center;
  flex: 1;
}

</style>
