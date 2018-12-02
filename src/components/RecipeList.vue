<template>
<div>
    <recipe-list-item
    v-for="recipe in recipientslist"
    :key="recipe.id"
    :recipe="recipe"></recipe-list-item>
    </div>
</template>

<script>

import RecipeListItem from './RecipeListItem'
export default {
  name: 'RecipeList',
  components: { RecipeListItem },
  props: {
    recipientslist: {
      type: Array,
      default: null
    }
  }
}
</script>
