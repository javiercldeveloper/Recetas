<template>
  <div class="prefooter">
    <div>
      <div class="phoneText">
        <p>Proximamente App móvil</p>
        <img src="/images/app-store.png" alt="App Store">
        <img src="/images/google-play.png" alt="Google Play">
      </div>
    </div>
    <div>
      <div class="phoneImage">
          <img src="/images/phone.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThePreFooter'
}
</script>

<style lang="scss">
.prefooter{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  min-height: 200px;
  margin-top: 50px;
  align-items: center;
}
.phoneText{
  position:relative;
  display:flex;
  flex-direction: column;
  align-items: center;
}
.phoneText p{
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
}
.phoneText img {
  max-width:200px;
  height:auto;
  margin: 20px;
}
</style>
