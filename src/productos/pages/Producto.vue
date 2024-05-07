<script setup>
import { getProductById } from '../services/producto';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import Spinner from "../../core/components/Spinner.vue";

const router = useRouter();

const loading = ref(true);
const productId = ref(null); 
const product = ref(null); 

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
            console.log(product.value);
        }
    } catch (error) {
        console.error("Error al obtener producto:", error);
    }
}
</script>

<template>
    <Spinner :loading="loading"></Spinner>
    <div v-if="product">
        <div class="row header mt-5 border-bottom pb-5">
            <div class="col-sm-12 col-md-6 col-lg-5 border-sm-end col-xl-4 text-center">
                <img :src="product.image" v-if="product.image" :alt="product.title">
            </div>
            <div class="col-sm-12 col-md-6 col-lg-7 col-xl-8 my-4">
                <div class="row ms-2">
                    <div class="col-sm-12 product_title">
                        <h2>{{ product.title }}</h2>
                    </div>
                    <div class="col-sm-12 product_category">
                        <p> {{ product.category }}</p>
                    </div>
                    <div class="col-sm-12 product_description mt-2">
                        <p> {{ product.description }}</p>
                    </div>
                    <div class="col-sm-12 product_price mt-2">
                        <h3>${{ product.price }}</h3>
                    </div>
                    <div class="col-sm-12 buy_button text-center mt-4">
                        <button class="btn btn-success btn-lg w-100">BUY NOW</button>
                    </div>

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
    width: 80%;
    margin: 0 auto;    
}

@media screen and(min-width:768px){
    .header div{
        padding-right: 1rem;
        border-right: 1px solid green;
    }
}

</style>