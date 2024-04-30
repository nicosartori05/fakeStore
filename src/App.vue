<script setup>
import Navbar from "./core/components/Navbar.vue";
import Spinner from "./core/components/Spinner.vue";
</script>

<template>
  <header>
    <Navbar></Navbar>
  </header>
  <main>
    <routerView></routerView>
  </main>
  <footer></footer>
</template>

<style scoped>
main {
  padding: 1rem;
}
</style>
