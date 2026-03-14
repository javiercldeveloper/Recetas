<template>
    <div class="mainSlider">
        <div class="subslider">
        <h1>Sugerencias para cocinar</h1>
        <transition name="slide-fade" mode="out-in">
        <slider-item
        v-if="currentRecipe"
        :key="currentRecipeIndex"
        :recipe="currentRecipe"/>
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
      currentRecipeIndex: 0,
      slideInterval: null
    }
  },
  props: {
    recipes: {
      type: Array,
      default: null
    }
  },
  computed: {
    currentRecipe () {
      if (!this.recipes || this.recipes.length === 0) return null
      return this.recipes[this.currentRecipeIndex]
    }
  },
  created () {
    this.startAutoSlide()
  },
  beforeDestroy () {
    clearInterval(this.slideInterval)
  },
  methods: {
    startAutoSlide () {
      this.slideInterval = setInterval(() => {
        if (!this.recipes || this.recipes.length === 0) return
        this.currentRecipeIndex = (this.currentRecipeIndex + 1) % this.recipes.length
      }, 5000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/global.scss";
  .mainSlider{
      text-align: center;
      display: flex;
      justify-items: center;
      min-height: 385px;
      margin-top: 50px;
  }
  .subslider{
      background-color: $color-tertiary;
      color: white;
      flex: 1;
  }

  .slide-fade-enter-active {
  transition: all .3s ease;
  }
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
</style>
