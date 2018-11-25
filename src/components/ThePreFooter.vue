<template>
  <div class="prefooter">
    <div>
      <div class="phoneText">
          <h3>Proximamente App para el móvil</h3>
          <p>Ios</p>
          <p>Android</p>
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
.phone{

}
</style>
