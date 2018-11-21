// Mock Data
// const ingredients = require('./mockdata/ingredients')
// const recipes = require('./mockdata/recipeList')

import Vue from 'vue'
import axios from 'axios'

// Mixin to access the methods globally

Vue.mixin({
  beforeCreate () {
    const options = this.$options
    if (options.services) {
      this.$services = options.services
    } else if (options.parent && options.parent.$services) {
      this.$services = options.parent.$services
    }
  }
})

export default {
  name: 'services',
  methods: {
    getIngredients () {
      return axios.get('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/segundo-bjjsd/service/jj/incoming_webhook/ingredientes')
        .then(response => {
          let ingredientsExtra = response.data.map((ingrediente) => {
            ingrediente.Seleccionado = false
            return ingrediente
          })
          return ingredientsExtra
        })
        .catch(error =>
          console.log(error))
    },
    getMatchingRecipes (ingredients) {
      return axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/segundo-bjjsd/service/jj/incoming_webhook/Recetas', {
        ingredients
      })
        .then(response => {
          return response.data
        })
        .catch(error =>
          console.log(error))
    },
    getRecipe (id) {
      return axios.get('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/segundo-bjjsd/service/jj/incoming_webhook/Receta?id=' + id)
        .then(function (response) {
          return response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    postNewIngredient (newIngredient) {
    // axios.post('/', {
    //   newIngredient
    // })
    //   .then(response => {
    //     return response.data
    //   })
    //   .catch(error =>
    //     console.log(error))
    },
    postNewRecipe (newRecipe) {
    // axios.post('/', {
    //   newRecipe
    // })
    //   .then(response => {
    //     return response.data
    //   })
    //   .catch(error =>
    //     console.log(error))
    }
  }
}
