<template>
    <div>
      <h2>Solo el administrador tendrá acceso a esta página.</h2>
      <div><TheRecipeInsert/></div>
      <div><TheIngredientInsert/></div>
    </div>
</template>

<script>
import TheRecipeInsert from '../components/TheRecipeInsert'
import TheIngredientInsert from '../components/TheIngredientInsert'

export default {

  name: 'PageNewItems',
  components: { TheRecipeInsert, TheIngredientInsert }
}
</script>
