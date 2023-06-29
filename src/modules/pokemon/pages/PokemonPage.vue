<template>
  <h1>Juego Pokemon</h1>
  <PokemonImg :pockemonId="104" :muestraPockemon="true"></PokemonImg>
  <PokemonOps />
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOps from "../components/PokemonOps.vue";

export default {
  components: {
    PokemonImg,
    PokemonOps,
  },
};
</script>

<style >

</style>
