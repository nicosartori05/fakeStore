import axios from 'axios';
import { ref } from 'vue';

const spinner = ref(false);

// Interceptor de solicitudes
axios.interceptors.request.use(
  function (config) {
    console.log('intercepto la llamada')
    spinner.value = true; // Muestra el spinner antes de realizar la solicitud
    return config;
  },
  function (error) {
    spinner.value = false; // Oculta el spinner si hay un error en la solicitud
    return Promise.reject(error);
  }
);

// Interceptor de respuestas
axios.interceptors.response.use(
  function (response) {
    console.log('intercepto la llamada')

    spinner.value = false; // Oculta el spinner cuando se recibe una respuesta
    return response;
  },
  function (error) {
    spinner.value = false; // Oculta el spinner si hay un error en la respuesta
    return Promise.reject(error);
  }
);

export { axios, spinner };