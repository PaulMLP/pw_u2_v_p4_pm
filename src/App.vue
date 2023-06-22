<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <Contador title="Test One" :start="400+2"/>
  <Contador title="Test Two" :start="101"/> -->
  <CaracolaMagica/>
</template>

<script>
import CaracolaMagica from './components/CaracolaMagica.vue';
import Contador from "./components/Contador.vue";

export default {
  name: "App",
  components: {
    Contador,
    CaracolaMagica,
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
