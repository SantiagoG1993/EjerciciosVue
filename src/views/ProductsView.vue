<template>
    <h1>Esta es la vista Products</h1>
    <div class="container">
        <div class="products_container">
            <ProductCard v-for="producto of productos" :key="producto.id" :productname="producto.name" :price="producto.price" :description="producto.description"/>
        </div>
    </div>
</template>

<script setup>
    import ProductCard from '../components/products/ProductCard.vue'
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
.container{
    width: 100%;
    height: 100%;
}
.products_container{
    display: flex;
    flex-wrap: wrap;
}
</style>