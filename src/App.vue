<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Contador titulo="Test One" valor dos="7"/>
  <Contador titulo="Test Two" valor dos="7"/>
   <Contador titulo="Test Tree" valor dos="7"/>
</template>

<script>
import Contador from "./components/Contador.vue";

export default {
  name: "App",
  components: {
    Contador,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  filter: drop-shadow(10px 5px 1px rgb(0, 0, 0, 0.6));
}
</style>
