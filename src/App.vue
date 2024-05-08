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
  <!-- <footer></footer> -->
</template>

<style scoped>

.container{
  margin-top: 0;
  background-color:white;
}

</style>
