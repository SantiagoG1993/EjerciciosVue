<template>
<div class="contact_container">
    <h1>Estas es mi vista de Contacto</h1>
    <FormContact />
</div>    

</template>

<script setup>
import FormContact from '../components/contact/FormContact.vue'

</script>

<style scoped>
h1{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
}
.contact_container{
    background-color: rgb(238, 238, 238);
    height: 100%;
}

</style>