<template>
  <div class="wrap-home flex">
    <h1 data-title="DigitalArchitecture" class="text-fill">
      DigitalArchitecture
    </h1>
  </div>
</template>

<script>
  export default {
    name: "Home",
    components: {},
  };
</script>

<style scoped>
  .wrap-home {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(../assets/background.png);
    background-position: center;
    background-size: cover;
    /* background: lightblue; */
    z-index: 1;
  }
  .text-fill {
    background: white;
    font-size: 5vw;
    position: relative;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
  .text-fill::before {
    content: attr(data-title);
    background: linear-gradient(#ffd7a5, #ffa5d9, #a5e6ff);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0;
    transition: all 1s ease-in-out;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
  .text-fill:hover::before {
    width: 100%;
  }
</style>
