<template>
    <div class="insertRecipe">
      <h2>Inserta una nueva receta en la base de datos.</h2>
      <div>
        <label>Nombre de la receta</label>
        <input type="text" v-model="newRecipeName">
      </div>
      <div>
        <label>Descripcion</label>
        <input type="text" v-model="newRecipeDescription">
      </div>
      <div>
        <label>Preparación</label>
        <textarea rows="5" v-model="newRecipePreparation"/>
      </div>
      <div>
        <label>Duración</label>
        <input type="text" v-model="newRecipeTime">
      </div>
      <div>
        <label>Enlace al Thumbnail (Opcional)</label>
        <input type="text" v-model="newRecipeThumbnailLink">
      </div>
      <div>
        <label>Enlace a la imagen (Opcional)</label>
        <input type="text" v-model="newRecipeImageLink">
      </div>
      <div>
        <p><strong>Añade Ingredientes a la receta (Mínimo 3)</strong></p>
      </div>
      <div>
        <select v-model="selectedIngredient">
          <option
            disabled
            value=""
            >Selecciona un ingrediente
          </option>
          <option
            v-for="ingredient in availableIngredients"
            :key="ingredient.id"
            >{{ingredient.Nombre}}
          </option>
        </select>
        <input
          type="button"
          value="Añade el ingrediente"
          :disabled="activeButton"
          @click="addIngredientToQuery"
        >
      </div>
      <div>
        <div class="ingredientChosen"
          v-for="selected in newRecipeIngredients"
          :key="selected.Id"
          >
          <div>{{ selected }}</div>
          <div class="removebutton">
              <font-awesome-icon
              @click="removeIngredient(selected.Id)"
              icon="minus-circle" />
            </div>
        </div>
      </div>
      <div class="botonInferior">
        <input
          v-if="(newRecipeIngredients.length > 2) && !tried"
          type="button"
          @click="tryInsertNewRecipe"
          value="Inserta la receta">
      </div>
      <div>
        <input type="button" v-if="tried" value="Volver a Insertar" @click="reset">
      </div>
      <div>
        <p v-if="incomplete">Debes cubrir todos los campos para poder insertar la receta</p>
        <p v-if="inserted">Insertada la receta de {{ newRecipeName }}</p>
        <p v-if="existing">Ya existe la receta {{ newRecipeName }} en la base de datos.</p>
      </div>
    </div>
</template>

<script>
import { store } from '../store.js'
import { RemoteMongoClient } from 'mongodb-stitch-browser-sdk'
const db = store.client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('db')
export default {
  name: 'TheRecipeInsert',
  data () {
    return {
      ingredients: [],
      selectedIngredient: '',
      newId: '',
      ingredientType: '',
      newRecipeName: '',
      newRecipeDescription: '',
      newRecipePreparation: '',
      newRecipeTime: '',
      newRecipeThumbnailLink: '',
      newRecipeImageLink: '',
      newRecipeIngredients: [],
      newRecipeIngredientsLength: '',
      incomplete: false,
      inserted: false,
      existing: false,
      tried: false
    }
  },
  created () {
    this.fetchIngredients()
    this.fetchLastId()
  },
  computed: {
    activeButton () {
      if (this.selectedIngredient === '') { return true } else return false
    },
    availableIngredients () {
      let filteredIngredients = this.ingredients.filter((ingrediente) => {
        return !ingrediente.Seleccionado
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
      this.$services.methods.getIngredients().then((result) => { this.ingredients = result })
    },
    fetchLastId () {
      db.collection('recipes').find().asArray()
        .then(result => {
          this.newId = result.length + 1
        })
    },
    addIngredientToQuery () {
      let chosenIngredient = this.ingredients.find(obj => obj.Nombre === this.selectedIngredient)
      this.newRecipeIngredients.push(chosenIngredient.Nombre)
      let index = this.ingredients.findIndex(x => x.Nombre === this.selectedIngredient)
      this.ingredients[index].Seleccionado = true
      this.selectedIngredient = ''
    },
    removeIngredient (id) {
      let index = this.ingredients.findIndex(x => x.Id === id)
      this.ingredients[index].Seleccionado = false
      index = this.newRecipeIngredients.findIndex(x => x.Id === id)
      this.newRecipeIngredients.splice(index, 1)
    },
    tryInsertNewRecipe () {
      if (this.newRecipeName === '' || this.newRecipeDescription === '' || this.newRecipePreparation === '' || this.newRecipeTime === '') {
        this.incomplete = true
      } else {
        this.incomplete = false
        db.collection('recipes')
          .find({ nombre: this.newRecipeName }).asArray()
          .then((result) => {
            if (result.length > 0) {
              this.existing = true
              this.tried = true
            } else {
              this.insertNewRecipe()
            }
          })
      }
    },
    insertNewRecipe () {
      db.collection('recipes')
        .insertOne({
          id: this.newId,
          nombre: this.newRecipeName,
          descripcion: this.newRecipeDescription,
          preparacion: this.newRecipePreparation,
          tiempoPreparacion: this.newRecipeTime,
          chefId: '5bfba961698a673ef8c4e16d',
          thumbnail: this.newRecipeThumbnailLink,
          image: this.newRecipeImageLink,
          numeroIngredientes: this.newRecipeIngredients.length,
          ingredientes: this.newRecipeIngredients
        })
        .then(result => {
          this.inserted = true
          this.tried = true
        })
    },
    reset () {
      this.tried = false
      this.newRecipeName = ''
      this.newRecipeDescription = ''
      this.newRecipePreparation = ''
      this.newRecipeTime = ''
      this.newRecipeThumbnailLink = ''
      this.newRecipeImageLink = ''
      this.newRecipeIngredients = []
      this.inserted = false
      this.existing = false
      this.fetchIngredients()
      this.fetchLastId()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/global.scss";
 .insertRecipe{
   width: 50%;
   @media screen and (max-width: 620px) {
       width: 80%;
   }
   background-color: $color-tertiary;
   border-radius: 5px;
   margin:auto;
   margin-bottom: 50px;
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   align-items: center;
   padding: 10px;
   text-align: center;
   &>*{
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     justify-content: center;
     margin-bottom: 30px;
     &>*{
       min-width: 250px;
       margin: 5px;
     }
   }
 }
 .ingredientChosen{
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

</style>
