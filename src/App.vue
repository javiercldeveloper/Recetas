<template>
  <div id="app">
    <the-header></the-header>
    <transition name="slide-fade" mode="out-in">
    <router-view></router-view>
    </transition>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'
export default {
  name: 'app',
  components: { TheHeader, TheFooter }
}
</script>

<style>
/* TODO Better transition */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
/* Style to avoid the footer movement on transition*/
#app {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow-x: hidden
}
</style>
