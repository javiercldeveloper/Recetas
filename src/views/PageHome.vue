<template>
    <div>
        <the-home-intro></the-home-intro>
        <loader v-if="loading"></loader>
        <the-slider v-else :recipes="recipes"></the-slider>
        <!--
            Parte opcional en caso de registrar los chefs
            <the-chefs-grid></the-chefs-grid>
        -->
        <the-pre-footer></the-pre-footer>
    </div>
</template>

<script>
import TheHomeIntro from '../components/TheHomeIntro'
import TheSlider from '../components/TheSlider'
// import TheChefsGrid from '../components/TheChefsGrid'
import ThePreFooter from '../components/ThePreFooter'
import Loader from '../components/Loader'
export default {
  name: 'PageHome',
  components: { TheHomeIntro, TheSlider, ThePreFooter, Loader },
  created () {
    this.loading = true
    this.$services.methods.getRandomRecipes().then((result) => {
      this.recipes = result
      this.loading = false
    })
  },
  data () {
    return {
      recipes: [],
      loading: false
    }
  }
}
</script>
