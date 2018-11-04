<template>
    <div>
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

</style>
