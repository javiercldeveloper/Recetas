<template>
    <div>
        <h2>Componente para inserción de nuevos ingredientes por parte del administador.</h2>
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
        <input type="button" value="Inserta ingrediente" @click="insertNewIngredient">
        <p>Insertado ingrediente con id {{ inserted }}</p>
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
      inserted: ''
    }
  },
  created () {
    db.collection('colec').find().asArray()
      .then(result => { this.newId = result.length + 1 })
      .catch(e => console.log(e))
  },
  methods: {
    insertNewIngredient () {
      db.collection('colec')
        .insertOne({ Id: this.newId, Tipo: this.ingredientType, Nombre: this.newIngredientName })
        .then(result => { this.inserted = result })
    }
  }
}
</script>

<style scoped>
    body{
        background-color: aqua;
    }
</style>
