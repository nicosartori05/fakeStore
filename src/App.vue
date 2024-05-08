<script setup>
import Navbar from "./core/components/Navbar.vue";
</script>

<template>
  <header>
    <Navbar></Navbar>
  </header>
  <main class="container">
    <routerView></routerView>
  </main>
  <footer class="text-center">
    <p class="py-5">Nicolas Sartori&copy; 2024</p> 
  </footer>
</template>

<style scoped>

.container{
  margin-top: 0;
  background-color:white;
}

main{
}

footer{
  margin: 0;
  padding: 0; 
}
</style>
