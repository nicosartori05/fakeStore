<script setup>
import Navbar from "./core/components/Navbar.vue";
import Spinner from "./core/components/Spinner.vue";
</script>

<template>
  <header>
    <Navbar></Navbar>
  </header>
  <main class="container">
    <routerView></routerView>
  </main>
  <footer></footer>
</template>

<style scoped>

</style>
