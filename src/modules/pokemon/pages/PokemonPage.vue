<template>
  <h1>Juego Pokemon</h1>
  <PokemonImg :pockemonId="471" :muestraPockemon="true"></PokemonImg>
  <PokemonOps :options="pokemonsArray" />
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOps from "../components/PokemonOps.vue";
import getPokemonFacade from "../helpers/clientePokemonAPI";

export default {
  data() {
    return {
      pokemonsArray: [],
    };
  },
  components: {
    PokemonImg,
    PokemonOps,
  },
  methods: {
    async chargeStartGame() {
      this.pokemonsArray = await getPokemonFacade();
    },
  },
  mounted() {
    console.log("se monto el componente");
    this.chargeStartGame();
  },
};
</script>

<style scoped>
h1 {
  text-shadow: 0 0 1px blue;
}
</style>
