<template>
  <div class="contact">
    <h2>¿Quieres contactar con nosotros?</h2>
    <p>Si quieres que incluyamos una receta en la aplicación envianos un correo a <a href="mailto:info@kaypacome.tk">info@kaypacome.tk</a></p>
  </div>
</template>

<style lang="scss">
 .contact{
   text-align: center;
   margin:auto;
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   align-items: center;
   &>*{
     margin-bottom: 20px;
     width: 50%;
     @media screen and (max-width: 620px) {
       width: 80%;
     }
   }
 }
</style>
