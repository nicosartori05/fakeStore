<script setup>
import { onMounted } from "vue";
import { setTitle } from "../../core/helpers/setTitle";
import { RouterLink } from "vue-router";

onMounted(() => {
  setTitle("Inicio");
});
</script>

<template>
  <div class="row mt-4">
    <div class="col-sm-12">
      <img class="img-fluid"src="C:\Users\Nicos\OneDrive\Escritorio\proyecto practica vue 4-4-2024\fake store\fake-store\src\assets\empresarios\empresarios.jpg">
    </div>
  </div>
  <h2 style="margin: 1rem 0" class="">
    Bienvenidos a Fake store
  </h2>
  <p style="margin: 1rem 0">
    ¡Somos tu destino en línea para encontrar una amplia variedad de productos de alta calidad! Desde tecnología innovadora hasta moda elegante, hogar acogedor, belleza radiante y mucho más, tenemos todo lo que necesitas para satisfacer tus necesidades y deseos.
  </p>

  <p>
    Explora nuestro catálogo diverso y descubre una gama infinita de productos que se adaptan a todos los estilos de vida y presupuestos. Ya sea que estés buscando los últimos gadgets electrónicos, accesorios de moda imprescindibles o productos para el hogar que transformen tu espacio, estamos aquí para ayudarte a encontrar exactamente lo que necesitas.
  </p>

  <p>
    En Fake Store, nos esforzamos por ofrecerte una experiencia de compra excepcional. Nuestra plataforma intuitiva te permite navegar fácilmente por nuestras categorías y encontrar productos de tu interés en cuestión de segundos. Además, nuestro equipo de atención al cliente está siempre disponible para responder cualquier pregunta que puedas tener y garantizar que tu experiencia de compra sea sin complicaciones.
  </p>

  <p>
    Con envío rápido y seguro a tu puerta y opciones de pago seguras, hacer compras en línea nunca ha sido tan conveniente. Únete a nuestra comunidad de compradores entusiastas y descubre la alegría de encontrar tus productos favoritos con nosotros.
  </p>

  <p>1}+´LOL
    ¡Comienza tu viaje de compras hoy mismo en Fake Store y encuentra todo lo que necesitas y más! <Router-link to="/productos">VER CATALOGO</Router-link>
  </p>
</template>

<style scoped>
img{
  width: 100%;
}
</style>
