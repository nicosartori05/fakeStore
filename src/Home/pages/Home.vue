<script setup>
import { onMounted } from "vue";
import { setTitle } from "../../core/helpers/setTitle";

onMounted(() => {
  setTitle("Inicio");
});
</script>

<template>
  <h2 style="margin: 1rem 0">
    Bienvenido a nuestra tienda de productos únicos
  </h2>
  <p style="margin: 1rem 0">
    Entra en un mundo de descubrimientos emocionantes y encuentra productos que
    nunca supiste que necesitabas. En nuestra tienda, te llevamos en un viaje a
    través de una amplia gama de productos cuidadosamente seleccionados para
    satisfacer tus necesidades y tus deseos más inesperados.
  </p>
</template>

<style scoped></style>
