<template>
    <div class="mainAccess">
       <the-access-form></the-access-form>
    </div>
</template>

<script>
import TheAccessForm from '../components/TheAccessForm'
export default {
  name: 'PageAccess',
  components: { TheAccessForm }
}
</script>

<style lang="scss" scoped>

@import "../styles/global.scss";
    .mainAccess{
        text-align: center;
        margin: auto;
        width: 40%;
        background-color: $color-tertiary;
        padding: 30px;
        border-radius: 20px;
        @media screen and (max-width: 620px) {
        width: 70%;
      }
    }
</style>
