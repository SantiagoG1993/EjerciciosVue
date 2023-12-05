<template>
    <form action="" class="form_container">
        <input type="email" placeholder="E-mail" v-model="email">
        <input type="text" placeholder="Telefono" v-model="telefono">
        <input type="text" v-model="mensaje">
        <button @click="handleClick">Enviar</button>
        <input  type="checkbox" name="" id="check" v-model="agree">Acepto los terminos y condiciones
    </form>
</template>

<script setup>
import {ref} from 'vue'

const email = ref('')
const telefono = ref('')
const mensaje = ref('')
const agree = ref('false')
const handleClick = ()=>{
console.log({
    email:email.value,
    telefono:telefono.value,
    mensaje:mensaje.value,
    agree:agree.value
});
email.value=''
telefono.value=''
mensaje.value=''
agree.value=false
}



</script>

<style scoped>
.form_container{
    width: 500px;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.form_container input{
    width: 80%;
    height: 45px;
    margin-top: 20px;
    padding-left: 20px;
    border: none;
    border-radius: 4px;
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(92, 92, 92);
}
button{
    width: 150px;
    height: 45px;
    border: none;
    border-radius: 4px;
    margin-top: 20px;
    align-self: end;
    margin-right: 40px;
    font-family: Arial, Helvetica, sans-serif;
    background-color: purple;
    color: white;
}
button:hover{
    color: purple;
    border: 1px solid purple;
    background-color: white;
    transition: .2s all ease;
    cursor: pointer;
    user-select: none;
}
#check{
    width: 16px;
    margin: 0px;
}
</style>