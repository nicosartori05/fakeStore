<script setup>
import { ref,defineProps, onMounted } from 'vue';
import CardProduct from '../../productos/components/cardProduct/CardProduct.vue';

defineProps({
  productsRecomended: [],
});
const scrollContainer = ref(null);

onMounted(() => {
    
})
function scrollLeft() {
    smoothScroll(scrollContainer.value, -400, 500);
}

function scrollRight() {
    smoothScroll(scrollContainer.value, 400, 500); 
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
    <div class="row m-auto">
                <div class="col-12 my-4">
                    <h4>Productos recomendados</h4>
                </div>
                 <div class="carrousel-contenedor">
                    <button class="prev-button" @click="scrollLeft"><i class="fi fi-rr-angle-left"></i></button>
                    <div class="carrousel" ref="scrollContainer">
                        <div class="col-sm-12 col-md-7 col-lg-6 col-xl-4 mx-3" v-for="producto of productsRecomended" :key="producto.id">
                            <CardProduct :product="producto" :recomendado="true"></CardProduct>
                        </div>
                    </div>
                    <button class="next-button" @click="scrollRight"><i class="fi fi-rr-angle-right"></i></button>
                </div>
            </div>
</template>
<style scoped>
.carrousel-contenedor {
    display: flex;
    align-items: center;
    width: 100%;
}

.prev-button,
.next-button {
    background-color: transparent;
    border: none;
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