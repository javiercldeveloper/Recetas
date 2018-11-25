<template>
    <div class="mainChef">
      <div>
        <div class="callToAction">
          <h1>Tu Web de recetas</h1>
          <ul>
              <li>¿No tienes dinero para pedir comida?</li>
              <li>¿Estas harta/o de comida precocinada?</li>
              <li>¿Te apetece cocinar?</li>
              <li>¿Tienes alimentos que van a caducar?</li>
          </ul>
          <p>Pues entonces esta es tu aplicación.</p>
          <p>Pincha en el boton y te ayudaremos a encontrar una receta adecuada para ti con tan solo indicarnos que ingredientes dispones en la cocina.</p>
          <router-link to="/buscatureceta" tag="button">Busca tu receta</router-link>
        </div>
      </div>
      <div>
        <div class="mascot">
          <img src="../assets/img/owl-chef.svg" alt="Mascot">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'TheHomeIntro'
}
</script>

<style lang="scss" >
  .mainChef {
      p, li {
          font-size: 1.6em;
          @media screen and (max-width: 620px) {
            font-size: 1em;
      }
      }
      border-radius: 5px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 60px;
      >*{
          text-align: center;
          width: 40%;
          min-width: 380px;
          margin-bottom: 30px;
          padding-left: 20px;
          padding-right: 20px;
          @media screen and (max-width: 950px) {
              width: 100%;
      }
          @media screen and (max-width: 620px) {
              width: 100%;
            min-width: 280px;
      }
      }
  }
  .callToAction {
      padding: 15px;
      align-self: stretch;
      text-align: center;
      display: flex;
      flex-direction: column;
      >* {
          margin-bottom: 10px;
      }
  }
  .mascot {
      padding:15px;
      >*{
          max-height: 500px;
      }

  }
  ul {
    padding-inline-start: 0px;
  }
  li {
      list-style: none;
      margin-bottom: 5px;
  }

  button{
    width: 50%;
    margin:auto;
    margin-top: 25px;
    background-color: chocolate;
    color: white;
    text-align: center;
    padding: 10px;
    text-decoration: none;
    font-size: 16px;
    border-radius: 8px;
    &:hover{
      background-color: rgb(204, 155, 121);
    }
  }
</style>
