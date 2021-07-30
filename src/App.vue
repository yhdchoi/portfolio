<template>
  <div class="flex-row">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";

  export default {
    components: { Header, Footer },
  };
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

  * {
    margin: 0;
    padding: 0;
  }
</style>
