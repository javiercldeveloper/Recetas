<template>
    <div class="mainAccess">
      <div class="div50-left">
       <the-access-form></the-access-form>
      </div>
      <div class="div50-right">
        <the-register-form></the-register-form>
      </div>
    </div>
</template>

<script>
import TheAccessForm from '../components/TheAccessForm'
import TheRegisterForm from '../components/TheRegisterForm'
export default {
  name: 'PageAccess',
  components: { TheAccessForm, TheRegisterForm }
}
</script>

<style scoped>
    .mainAccess{
        text-align: center;
        display: flex;
        justify-items: center;
    }
    .div50-left {
        flex:1;
        background-color: cornflowerblue;
        padding: 20px;
     }
    .div50-right {
        flex:1;
        background-color: dimgray;
        padding: 20px;
    }
</style>
