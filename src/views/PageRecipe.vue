<template>
  <div>
    <h2>Aquí se detallan los datos de la receta</h2>
    <TheRecipeDescription/>
  </div>
</template>

<script>
import TheRecipeDescription from '../components/TheRecipeDescription'

export default {
  name: 'PageRecipe',
  components: { TheRecipeDescription }
}
</script>
