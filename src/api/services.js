import axios from 'axios'

const BASE_URL = process.env.VUE_APP_WEBHOOK_BASE_URL

export function getIngredients () {
  return axios.get(`${BASE_URL}/ingredientes`).then(response => {
    return response.data.map(ingredient => ({
      ...ingredient,
      Seleccionado: false
    }))
  })
}

export function getMatchingRecipes (ingredients) {
  return axios
    .post(`${BASE_URL}/Recetas`, { ingredients })
    .then(response => response.data)
}

export function getRecipe (id) {
  return axios.get(`${BASE_URL}/Receta?id=${id}`).then(response => response.data)
}

export function getRandomAssociate () {
  return axios.get(`${BASE_URL}/randomassociate`).then(response => response.data)
}

export function getRandomRecipes () {
  return axios.get(`${BASE_URL}/sliderRandomRecipes`).then(response => response.data)
}
