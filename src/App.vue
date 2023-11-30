<template>
<div>
  <h1>Esta es mi app en Vue 3</h1>
  <ul class="menu">
    <router-link class="link" :to="{name:'Home'}">Home</router-link>
    <router-link class="link" :to="{name:'Products'}">Products</router-link>
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
.router-view{
  width: 100%;
  height: 400px;
  background-color: rgb(218, 218, 218);
}
.menu{
  list-style-type: none;
  display: flex;
  width: 200px;
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
