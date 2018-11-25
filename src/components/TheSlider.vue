<template>
    <div class="mainSlider">
        <div class="subslider">
        <h1>Sugerencias para cocinar</h1>
        <transition name="slide-fade" mode="out-in">
        <slider-item
        v-for="(recipe,index) in recipes"
        :key="index"
        :recipe="recipe"
        v-if="index === currentRecipeIndex"/>
        </transition>
        </div>
    </div>
</template>

<script>
import SliderItem from './SliderItem'
export default {
  name: 'TheSlider',
  components: { SliderItem },
  data () {
    return {
      currentRecipeIndex: 0
    }
  },
  created () {
    this.aa()
  },
  props: {
    recipes: {
      type: Array,
      default: null
    }
  },
  methods: {
    aa () {
      setTimeout(() => {
        if (this.currentRecipeIndex === 2) {
          this.currentRecipeIndex = 0
        } else { this.currentRecipeIndex++ }
        this.aa()
      }, 5000)
    }
  }
}
</script>

<style lang="scss" scoped>
    .mainSlider{
        text-align: center;
        display: flex;
        justify-items: center;
        min-height: 200px;
        margin-top: 50px;
    }
    .subslider{
        background-color: royalblue;
        color: white;
        flex: 1;
    }
</style>
