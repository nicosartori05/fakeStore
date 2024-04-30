import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../Home/pages/Home.vue';
import Productos from '../productos/pages/Productos.vue';
const routes = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
        path:'/',
        component: Home,
    },
    {
      path:'/productos',
      component: Productos
    }
  ]
})

export default routes;
