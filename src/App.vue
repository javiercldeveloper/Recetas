<template>
  <div id="app">
    <the-header></the-header>
    <div class="content">
    <transition name="slide-fade" mode="out-in">
    <router-view></router-view>
    </transition>
    </div>
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

<style lang="scss">
@import "/styles/global.scss";
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
.content{
  margin-top: 100px;
}
</style>
