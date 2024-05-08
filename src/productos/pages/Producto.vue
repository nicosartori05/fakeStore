<script setup>
import { getProductById,getProductsByCategory } from '../services/producto';
import CardProduct from '../components/cardProduct/CardProduct.vue';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import Spinner from "../../core/components/Spinner.vue";

const router = useRouter();

const loading = ref(true);
const loadingCarrousel = ref(true);
const productId = ref(null); 
const product = ref(null); 
const productsRecomended = ref(null); 
const scrollContainer = ref(null);

onMounted(async () => {
    productId.value = router.currentRoute.value.params.id;

    if (productId.value) { // Aquí verificamos si productId.value existe
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
    const data = await getProductsByCategory(categoria,limit);
    productsRecomended.value = data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
  }
}

function scrollLeft() {
    smoothScroll(scrollContainer.value, -400, 500); // Ajusta la distancia y la duración de la animación según sea necesario
}

function scrollRight() {
    smoothScroll(scrollContainer.value, 400, 500); // Ajusta la distancia y la duración de la animación según sea necesario
}
function smoothScroll(element, distance, duration) {
    const start = element.scrollLeft;
    const startTime = performance.now();

    function scroll(timestamp) {
        const time = timestamp - startTime;
        const easing = easeInOutQuad(time, start, distance, duration);
        element.scrollLeft = easing;
        if (time < duration) requestAnimationFrame(scroll);
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(scroll);
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

            <div class="row m-auto">
                <div class="col-12 my-4">
                    <h4>Productos recomendados</h4>
                </div>
                <div class="carrousel-contenedor">
                    <button class="prev-button" @click="scrollLeft"><i class="fi fi-rr-angle-left"></i></button>
                    <div class="carrousel" ref="scrollContainer">
                        <div class="col-sm-12 col-md-7 col-lg-6 col-xl-4 mx-3" v-for="producto of productsRecomended" :key="producto.id">
                            <CardProduct :product="producto"></CardProduct>
                        </div>
                    </div>
                    <button class="next-button" @click="scrollRight"><i class="fi fi-rr-angle-right"></i></button>
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

.carrousel-contenedor {
    display: flex;
    align-items: center;
    width: 100%;
}

.prev-button,
.next-button {
    background-color: transparent;
    border: none;
    padding: 5px 10px;
    margin: 0 10px;
    cursor: pointer;
    i{
        font-size: 2rem;
    }
}

.carrousel{
    display: flex;
    overflow-x: auto;
    scrollbar-width:none;
    padding-bottom: 2rem;
}
</style>