<script setup>
import { ref, defineProps } from "vue";
import { cortarString } from "../../../core/helpers/editText";

const verMas = ref(false);

defineProps({
  product: {},
});
</script>
<template>
  <div class="card">
    <div class="card-header">
      <img :src="product.image" class="card-img-top" :alt="product.title" />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ cortarString(product.title, 18) }}</h5>
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
      <router-link to="#" class="btn btn-primary">VER PRODUCTO</router-link>
    </div>
  </div>
</template>
<style scoped>
.verMas {
  border: none;
  background-color: transparent;
  font-weight: 500;
}

.card-footer {
  background-color: transparent;
  border: none;
  text-align: center;
}
.card-header {
  background-color: white;
  text-align: center;
}

.card {
    width: 100%;
    height: auto;
    min-height: 300px;
    max-height: auto;

    display: flex;
    flex-direction: column;
  }
  .card-header {
    text-align: center;
    img {
      width: 150px;
      height: 150px;
    }
  }
</style>
