// TODO Change mock data to real backend
// import axios from 'axios'

// Mixin to access the methods globally

import Vue from 'vue'
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
const ingredients = require('./mockdata/ingredients')
const recipes = require('./mockdata/recipeList')

export default {
  name: 'services',
  methods: {
    getIngredients () {
      let ingredientsExtra = ingredients.map((ingrediente) => {
        ingrediente.Seleccionado = false
        return ingrediente
      })

      return ingredientsExtra
    // return axios.get('/')
    //   .then(response => {
    //     return response.data
    //   })
    //   .catch(error =>
    //     console.log(error))
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
