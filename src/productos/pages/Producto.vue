<script setup>
import { getProductById,getProductsByCategory } from '../services/producto';
import CardProduct from '../components/cardProduct/CardProduct.vue';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import Spinner from "../../core/components/Spinner.vue";

const router = useRouter();

const loading = ref(true);
const productId = ref(null); 
const product = ref(null); 
const productsRecomended = ref(null); 

onMounted(async () => {
    productId.value = router.currentRoute.value.params.id;

    if (productId.value) {
        await obtenerProducto(productId.value);
    } else {
        console.error('No se proporcionó ningún ID de producto en los parámetros de la ruta');
    }
});

async function obtenerProducto(productId) {
    try {
        const data = await getProductById(productId);
        product.value = data;
        if (product.value) {
            loading.value = false;
            await obtenerProductosRecomendados(product.value.category,4)
            console.log(product.value);
        }
    } catch (error) {
        console.error("Error al obtener producto:", error);
    }
}

async function obtenerProductosRecomendados(categoria,limit) {
  try {
    let data = await getProductsByCategory(categoria,limit);
    data = data.filter(producto => producto.id !== product.value.id);
    productsRecomended.value = data;
    console.log('productsRecomended', productsRecomended.value)
  } catch (error) {
    console.error("Error al obtener productos:", error);
  }
}


</script>

<template>
    <Spinner :loading="loading"></Spinner>
    <div v-if="product">
        <div class="row header pt-5 border-bottom pb-5">
            <div class="col-sm-12 col-md-6 col-lg-5 border-sm-end col-xl-4 text-center">
                <img :src="product.image" v-if="product.image" :alt="product.title">
            </div>
            <div class="col-sm-12 col-md-6 col-lg-7 col-xl-8 my-4">
                <div class="row">
                    <div class="product_title">
                        <h2>{{ product.title }}</h2>
                    </div>
                    <div class="product_category">
                        <p> {{ product.category }}</p>
                    </div>
                    <div class="product_description mt-2">
                        <p> {{ product.description }}</p>
                    </div>
                    <div class="product_price mt-2">
                        <h3>${{ product.price }}</h3>
                    </div>
                    <div class="buy_button text-center mt-4">
                        <button class="btn btn-success">COMPRAR AHORA</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="row">
                <div class="col-12 my-4">
                    <h4>Productos recomendados</h4>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3" v-for="producto of productsRecomended" :key="producto.id">
                    <cardProduct :product="producto"></cardProduct>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header{
    display: flex;
    align-items: center;
    /* width: 100%; */
}
.header img{
    width:100%;
    max-width: 400px;
    max-height: 400px;
    margin: 0 auto;    
}
.buy_button button{
    width: 70%;
}

</style>