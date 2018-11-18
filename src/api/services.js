// TODO Change mock data to real backend
// import axios from 'axios'

// Mixin to access the methods globally

import Vue from 'vue'
import axios from 'axios'

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

// Mock Data
// const ingredients = require('./mockdata/ingredients')
const recipes = require('./mockdata/recipeList')

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
      return recipes
    // axios.post('/', {
    //   ingredients
    // })
    //   .then(response => {
    //     return response.data
    //   })
    //   .catch(error =>
    //     console.log(error))
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
