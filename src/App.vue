<template>
<div class="main_container">
  <h1 id="h1">Esta es mi app en Vue 3</h1>
  <ul class="menu">
    <router-link class="link" :to="{name:'HomeView'}">Home</router-link>
    <router-link class="link" :to="{name:'ProductsView'}">Products</router-link>
    <router-link class="link" :to="{name:'ContactView'}">Contact</router-link>
  </ul>
</div>

<div class="router-view">
  <router-view/>
</div>

</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style scoped>
#h1{
  text-align: center;
}

.router-view{
  width: 100%;
  min-height: 400px;
  background-color: rgb(218, 218, 218);
}
.menu{
  list-style-type: none;
  display: flex;
  width: 250px;
  height: 40px;
  align-items: center;
  border-radius: 4px;
  background-color: rgb(240, 240, 240);
  box-shadow: 1px 1px 1px 1px rgb(218, 218, 218);
  user-select: none;
}
.link{
  padding-left: 10px;
font-family: Arial, Helvetica, sans-serif;
cursor: pointer;
text-decoration: none;
color: black;
}
.link:hover{
  color: rgb(152, 152, 152);
}
</style>
