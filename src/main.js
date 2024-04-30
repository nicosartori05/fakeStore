import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'bootstrap' // Importa Bootstrap
import 'bootstrap/dist/css/bootstrap.css' // Importa los estilos de Bootstrap

import routes from './routes/routes';

createApp(App).use(routes).mount('#app')
