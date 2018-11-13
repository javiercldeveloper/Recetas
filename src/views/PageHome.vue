<template>
    <div>
        <the-home-intro></the-home-intro>
        <the-slider></the-slider>
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
export default {
  name: 'PageHome',
  components: { TheHomeIntro, TheSlider, ThePreFooter }
}
</script>
