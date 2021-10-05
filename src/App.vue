<template>
  <div class="flex-row">
    <Header />
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>

<script>
  import Header from "./components/Header.vue";

  export default {
    name: "App",
    metaInfo: {
      title: "Daniel",
    },
    components: { Header },
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
