<template>
    <h1>Esta es la vista Products</h1>
    <div class="container">
        <div class="products_container">
            <ProductCard />
        </div>
    </div>
</template>

<script setup>
    import ProductCard from '../components/products/ProductCard.vue'

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