<template>
<div>
    <recipe-list-item
    v-for="recipe in recipientslist"
    :key="recipe.Id"
    :recipe="recipe"></recipe-list-item>
    </div>
</template>

<script>

import RecipeListItem from './RecipeListItem'
export default {
  created () {
    console.log(this.recipientslist)
  },
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

<style lang="scss" scoped>

</style>
