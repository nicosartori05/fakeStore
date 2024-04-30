<!-- Spinner.vue
<template>
    <div class="spinner-container" v-if="showSpinner">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showSpinner: false
      };
    }
  };
  </script>
  
  <style scoped>
  .spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  </style> -->
  <!-- Loader.vue -->
<template>
    <div v-if="loading" class="loader">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      loading: {
        type: Boolean,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5); /* Fondo semi-transparente */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>