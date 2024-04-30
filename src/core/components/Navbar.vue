<script setup>
import { RouterLink } from 'vue-router';

// import { ref } from 'vue'

// defineProps({
//   msg: String,
// })

// const count = ref(0)

</script>

<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Fake store</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/productos">Productos</router-link>
          </li>
          <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="#">Nosotros</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style scoped>

</style>
