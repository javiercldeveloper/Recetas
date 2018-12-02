<template>
    <div class="insertItem">
        <h2>Inserta un nuevo ingrediente en la base de datos.</h2>
        <select v-model="ingredientType" >
            <option disabled value="">Selecciona un tipo de ingrediente</option>
            <option>Carne</option>
            <option>Marisco</option>
            <option>Cereales, harinas y masas</option>
            <option>Frutas</option>
            <option>Legumbres y verduras</option>
            <option>Lácteos</option>
        </select>
        <input type="text" name="" v-model="newIngredientName">
        <input type="button" v-if="!tried" value="Inserta ingrediente" @click="insertNewIngredient">
        <input type="button" v-if="tried" value="Volver a Insertar" @click="reset">
        <p v-if="incomplete">Debes indicar un tipo de ingrediente y el nombre del nuevo ingrediente.</p>
        <p v-if="inserted">Insertado el ingrediente {{ newIngredientName }} del tipo {{ ingredientType }} con id {{ newId }}</p>
        <p v-if="existing">Ya existe el ingrediente {{ newIngredientName }} en la base de datos.</p>
    </div>
</template>

<script>
import { store } from '../store.js'
import { RemoteMongoClient } from 'mongodb-stitch-browser-sdk'
const db = store.client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('db')
export default {
  name: 'TheIngredientInsert',
  data () {
    return {
      newId: '',
      ingredientType: '',
      newIngredientName: '',
      incomplete: false,
      inserted: false,
      existing: false,
      tried: false
    }
  },
  created () {
    this.fetchLastId()
  },
  methods: {
    fetchLastId () {
      db.collection('colec').find().asArray()
        .then(result => {
          console.log(result.length)
          this.newId = result.length + 1
        })
    },
    insertNewIngredient () {
      if (this.ingredientType === '' || this.newIngredientName === '') {
        this.incomplete = true
      } else {
        this.incomplete = false
        db.collection('colec')
          .find({ Nombre: this.newIngredientName }).asArray()
          .then((result) => {
            if (result.length > 0) {
              this.existing = true
              this.tried = true
            } else {
              db.collection('colec')
                .insertOne({ Id: this.newId, Tipo: this.ingredientType, Nombre: this.newIngredientName })
                .then(result => {
                  this.inserted = true
                  this.tried = true
                })
            }
          })
      }
    },
    reset () {
      this.tried = false
      this.ingredientType = ''
      this.newIngredientName = ''
      this.inserted = false
      this.existing = false
      this.fetchLastId()
    }
  }
}
</script>

<style lang="scss">
@import "../styles/global.scss";
 .insertItem{
   width: 50%;
   @media screen and (max-width: 620px) {
       width: 80%;
   }
   background-color: $color-tertiary;
   border-radius: 5px;
   margin:auto;
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   align-items: center;
   padding: 10px;
   text-align: center;
   &>*{
     margin-bottom: 30px;
   }
 }
</style>
