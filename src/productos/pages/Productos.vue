<script setup>
import {
  getProducts,
  getProductsByCategory,
  getProductByName,
} from "../services/producto";
import {setTitle} from '../../core/helpers/setTitle';
import { ref, onMounted, watch } from "vue";
import CardProduct from "../components/cardProduct/CardProduct.vue";
import Spinner from "../../core/components/Spinner.vue";

// Declaración de variables reactivas
const productos = ref([]);
const categorias = ref([""]);
const loading = ref(true);
const categoriaSeleccionada = ref("");
const searchItem = ref("");

onMounted(async () => {
  await obtenerProductos();
  setTitle('productos')
});

watch(categoriaSeleccionada, async (newValue) => {
  if (!categoriaSeleccionada.value) {
    productos.value = obtenerProductos();
  } else {
    const data = await getProductsByCategory(newValue);
    productos.value = data;
  }
});

watch(productos, () => {
  console.log("watch", productos.value);
});

function obtenerProducto() {
  if (!searchItem.value) {
    productos.value = obtenerProductos();
  } else {
    const productosFiltrados = getProductByName(
      searchItem.value,
      productos.value
    );
    productos.value = productosFiltrados;
  }
}

async function obtenerProductos() {
  try {
    const data = await getProducts();
    productos.value = data;
    if (productos.value.length) {
      loading.value = false;
    }
    categorias.value = Array.from(new Set(obtenerCategorias()));
  } catch (error) {
    console.error("Error al obtener productos:", error);
  }
}

function obtenerCategorias() {
  return productos.value.map((producto) => producto.category);
}
</script>

<template>
  <h2>Productos</h2>

  <div class="header_filter">
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        aria-label="Buscar producto"
        placeholder="Busca un producto"
        aria-describedby="button-addon2"
        v-model="searchItem"
        @input="obtenerProducto()"
        @keyup.enter="obtenerProducto()"
        @click="searchItem = ''"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        @click="obtenerProducto()"
      >
        Buscar
      </button>
    </div>

    <select
      class="form-select"
      aria-label="Default select example"
      v-model="categoriaSeleccionada"
    >
      <option value="" disabled selected>Filtrar por categoría</option>
      <option
        v-for="categoria of categorias"
        :key="categoria"
        :value="categoria"
      >
        {{ categoria }}
      </option>
    </select>
    <p v-if="categoriaSeleccionada">
      {{ categoriaSeleccionada
      }}<span class="eliminar_categoria" @click="categoriaSeleccionada = ''">
        X</span
      >
    </p>
  </div>

  <Spinner :loading="loading"></Spinner>
  <ul class="listado">
    <li v-for="producto of productos">
      <CardProduct :product="producto"></CardProduct>
    </li>
  </ul>
</template>

<style scoped>
.listado {
  list-style: none;
  margin: 0;
  padding: 0;
}
.header_filter {
  .filtro {
    border: 1px solid black;
    padding: 0.2rem;
    border-radius: 8px;
  }
}

@media screen and (min-width: 320px) and (max-width: 500px) {
  .listado {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    align-items: center;
  }
  .header_filter {
    display: grid;
    grid-template-columns: repeat(1fr);
    grid-gap: 10px;
    margin-bottom: 1rem;
  }
}
.eliminar_categoria {
  font-size: 14px;
  font-weight: 700;
}
@media screen and (min-width: 501px) and (max-width: 768px) {
  .listado {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    align-items: center;
  }

  .header_filter {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin-bottom: 1rem;
  }
}

@media screen and (min-width: 769px) and (max-width: 4000px) {
  .listado {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 10px;
    align-items: center;
  }

  .header_filter {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    width: 80%;
    margin-bottom: 1rem;
  }
}
</style>
