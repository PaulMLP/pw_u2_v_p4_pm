<template>
  <h1>Juego Pokemon</h1>
  <h1 v-if="!pokemonCorrecto">Espere por favor...</h1>
  <div v-else class="juego">
    <PokemonImg
      :pockemonId="pokemonCorrecto.id"
      :muestraPockemon="showPokemon"
    ></PokemonImg>
    <PokemonOps
      :options="pokemonsArray"
      @seleccionar="manejoDatoOpciones($event)"
    />
    <h1 v-if="showPokemon" class="win">YOU WIN!!</h1>
    <h1 v-if="lose" class="lose">YOU LOSE!!</h1>
  </div>
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOps from "../components/PokemonOps.vue";
import getPokemonFacade from "../helpers/clientePokemonAPI";

export default {
  data() {
    return {
      pokemonsArray: [],
      pokemonCorrecto: null,
      showPokemon: false,
      lose: false,
    };
  },
  components: {
    PokemonImg,
    PokemonOps,
  },
  methods: {
    async chargeStartGame() {
      this.pokemonsArray = await getPokemonFacade();
      const indicePokemon = Math.floor(Math.random() * 4);
      this.pokemonCorrecto = this.pokemonsArray[indicePokemon];
    },
    manejoDatoOpciones(idSeleccionado) {
      console.log("evento en el padre");
      console.log("id seleccionado " + idSeleccionado);
      this.showPokemon =
        idSeleccionado == this.pokemonCorrecto.id ? true : false;
      this.lose = !this.showPokemon;
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
.juego {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.win,
.lose {
   margin-top: 20px;
  animation: enfasis 0.6s linear infinite;
}
.win {
  color: gold;
  text-shadow: 0 0 10px green;
}
.lose {
  color: brown;
  text-shadow: 0 0 10px red;
}
@keyframes enfasis {
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}
</style>
