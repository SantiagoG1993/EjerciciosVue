<template>
    <div class="card_container" >
        <h3>{{props.productname}}</h3>
        <h4>{{props.description}}</h4>
        <p>Precio: ${{props.price}}</p>
        <button>Agregar al carrito</button>
    </div>
</template>

<script setup>
import{defineProps} from 'vue'

    const props =defineProps({
        productname:String,
        price:String,
        description:String
    }
)
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