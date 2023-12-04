<template>
    <div class="card_container" v-for="producto of productos" :key="producto.id">
        <h3>{{producto.name}}</h3>
        <h4>{{producto.description}}</h4>
        <p>Precio: ${{producto.precio}}</p>
        <button>Agregar al carrito</button>

    </div>
</template>

<script setup>
import {ref} from 'vue'
const productos = ref([
    {
        id:1,
        name:'Remera',
        price:4500,
        description:'Remera talle L - Estampada'
    },
    {
        id:2,
        name:'Gorra',
        price:3000,
        description:'Gorra Sublimada'
    },
    {
        id:3,
        name:'Jarro termico',
        price:5200,
        description:'Jarro termico 500ml'
    },
    {
        id:4,
        name:'Mochila',
        price:12000,
        description:'Mochila escolar'
    },
])

</script>

<style scoped>
.card_container{
    width: 200px;
    height: 250px;
    border-radius: 4px;
    background-color: rgb(255, 255, 255);
    margin-left: 20px;
display: flex;
flex-direction: column;
align-items: center;
user-select: none;
}
/* .card_container:hover{
    box-shadow: 0px 0px 3px grey;
} */
button{
    border: none;
    width: 130px;
    height: 30px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
    background-color: purple;
    color: white;
    border-radius: 4px;
}
button:hover{
    color: purple;
    background-color: white;
    border: 1px solid purple;
    transition: .2s all ease;
    cursor: pointer;
    user-select: none;
}

</style>