<template>
  <!-- <PokemonPage /> -->
  <CaracolaMagica/>
</template>

<script>
import CaracolaMagica from './components/CaracolaMagica.vue';
import PokemonPage from "./modules/pokemon/pages/PokemonPage.vue";

export default {
  name: "App",
  components: {
    PokemonPage,
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
}
</style>
