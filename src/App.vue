<template>
  <div id="app">
    <the-header></the-header>
    <div class="content">
    <transition name="fade" mode="out-in">
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
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
.content{
  margin-top: 130px;
}
</style>
