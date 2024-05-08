<script setup>
import { ref, defineProps } from "vue";
import { cortarString } from "../../../core/helpers/editText";
import { useRouter } from "vue-router";

const verMas = ref(false);
const router = useRouter();

defineProps({
  product: {},
  recomendado: false,
});

const redirectToProductDetail = (product) => {
  console.log(product)
    router.push(`/productos/detalle/${product.id}`);
    setTimeout(() => {
      window.location.reload();
      
    }, 200);
}
</script>
<template>
  <div :class="recomendado ? 'card card-carrousel mt-2' : 'card mt-2'">
    <div class="card-header">
      <img :src="product.image" class="card-img-top" :alt="product.title" />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text">
        <small class="text-body-secondary">{{ product.category }}</small>
      </p>

      <p class="card-text">
        {{ cortarString(product.description, verMas ? 150 : 40) }}
        <button class="verMas" @click="verMas = !verMas">
          {{ verMas ? "ver menos" : "ver mas" }}
        </button>
      </p>
    </div>
    <div class="card-footer">
      <button class="btn btn-primary" @click="redirectToProductDetail(product)">VER PRODUCTO</button>
    </div>
  </div>
</template>
<style scoped>
  .card{
    width: 300px;
    height: auto;
    min-height: 320px;
    margin: auto;
  }
  .card-carrousel{
    width: 180px;
    height: auto;
    min-height: 320px;
    margin: auto;
  }
  .card-header {
    text-align: center;
    background-color: white;
    img {
      width: 150px;
      height: 150px;
    }
  }
  .verMas {
  border: none;
  background-color: transparent;
  font-weight: 500;
}

h5 {
    overflow: hidden;
    white-space: nowrap; /* Evita que el texto se divida en varias líneas */
    text-overflow: ellipsis; /* Agrega puntos suspensivos al final del texto */
}
 
.card-footer {
  background-color: transparent;
  border: none;
  text-align: center;
}
/* @media screen and (min-width: 320px) and (max-width: 525px){
  .card-carrousel{
    width:180px;
  }
} */
</style>
