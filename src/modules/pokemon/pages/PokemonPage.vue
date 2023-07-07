<template>
  <div v-if="!showResult" class="contenedor">
    <h1>Juego Pokemon</h1>
    <div class="info">
      <div class="puntaje">Puntaje: {{ puntaje }}</div>
      <div class="intentos">Intentos: {{ intentos }}</div>
    </div>
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
    </div>
  </div>
  <div v-else class="resultado">
    <h1 id="nombre-correcto">Es {{ pokemonCorrecto.name }}!!</h1>
    <div :class="ganar ? 'win' : 'lose'">
      <div class="mensaje">
        <strong>{{ ganar ? "GANASTE!!" : "PERDISTE!!" }}</strong>
      </div>
      <PokemonImg
        :pockemonId="pokemonCorrecto.id"
        :muestraPockemon="showPokemon"
      ></PokemonImg>
      <div class="puntajeResultado">
        <img
          class="gif"
          :src="
            ganar
              ? 'https://www.icegif.com/wp-content/uploads/2022/01/icegif-1479.gif'
              : 'https://64.media.tumblr.com/f87e82f01cf7da8d92d005685ce86d05/tumblr_mrqt8vUPk91sapdi7o1_500.gif'
          "
          :alt="ganar ? 'gif win no carga' : 'gif lose no carga'"
        />
        <div>
          Tu puntaje fue de {{ puntaje }} <br />
          Intento {{ intentos }}
        </div>
      </div>
    </div>
    <button @click="reiniciar">Nuevo Juego</button>
  </div>
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOps from "../components/PokemonOps.vue";
import getPokemonFacade from "../helpers/clientePokemonAPI";

export default {
  data() {
    return {
      puntaje: 0,
      intentos: 0,
      pokemonsArray: [],
      pokemonCorrecto: null,
      showPokemon: false,
      showResult: false,
      ganar: false,
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
      this.verificarEleccion(idSeleccionado);
    },
    verificarEleccion(id) {
      this.intentos++;
      if (id == this.pokemonCorrecto.id) {
        this.puntaje =
          this.intentos == 1
            ? 5
            : this.intentos == 2
            ? 2
            : this.intentos == 3
            ? 1
            : 0;
        this.ganar = true;
        this.showResult = true;
        this.showPokemon = true;
      } else {
        if (this.intentos == 3) {
          this.showPokemon = true;
          this.ganar = false;
          this.showResult = true;
        }
      }
    },
    reiniciar() {
      this.puntaje = 0;
      this.intentos = 0;
      this.pokemonsArray = [];
      this.pokemonCorrecto = null;
      this.showPokemon = false;
      this.showResult = false;
      this.ganar = false;
      this.chargeStartGame();
    },
  },
  mounted() {
    console.log("se monto el componente");
    this.chargeStartGame();
  },
};
</script>

<style scoped>
h1,
.intentos,
.puntaje {
  text-shadow: 0 0 1px blue;
}
.info {
  display: flex;
  justify-content: center;
  gap: 100px;
  font-size: 25px;
  font-weight: bold;
}
.juego,
.resultado {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 40px;
}
.win,
.lose {
  display: flex;
  flex-direction: column;
  height: auto;
}
.win {
  color: gold;
  text-shadow: 0 0 10px green;
}
.lose {
  color: brown;
  text-shadow: 0 0 10px red;
}
.mensaje {
  height: 4.5rem;
}
strong {
  font-size: 3rem;
  animation: enfasis 0.6s linear infinite;
}

@keyframes enfasis {
  50% {
    font-size: 3.5rem;
  }
  100% {
    font-size: 3rem;
  }
}
.puntajeResultado {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  gap: 30px;
}
.gif {
  width: 120px;
}
button {
  width: 150px;
  height: 30px;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.5s;
}
button:hover {
  background: #333;
  color: white;
  transform: scale(1.1);
}
</style>
