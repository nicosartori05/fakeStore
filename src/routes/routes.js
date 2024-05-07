import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../Home/pages/Home.vue';
import Productos from '../productos/pages/Productos.vue';
import Producto from '../productos/pages/Producto.vue';
const routes = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
        path:'/',
        component: Home,
    },
    {
      path:'/productos',
      component: Productos,
        },
    {
      path:'/productos/detalle/:id',
      component: Producto,
        },
      ]
    }
)

export default routes;
