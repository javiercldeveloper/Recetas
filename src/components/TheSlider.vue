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
