<template>
  <div class="contenedor-imagenes">
    <img
      class="ocultaPokemon"
      :src="imagenFuente"
      alt="no se carga la imagen"
    />
    <img
      class="mostrarPokemon"
      v-if="muestraPockemon"
      :src="imagenFuente"
      alt="no se carga la imagen"
    />
  </div>
</template>

<script>
export default {
  props: {
    pockemonId: {
      type: Number,
      required: true,
    },
    muestraPockemon: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    imagenFuente() {
      // return (
      //   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
      //   this.pockemonId +
      //   ".svg"
      // );
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pockemonId}.svg`;
    },
  },
};
</script>

<style scoped>
.contenedor-imagenes {
  height: 300px;
}

.mostrarPokemon,
.ocultaPokemon {
  position: absolute;
  height: 40%;
  left: 50%;
  transform: translate(-50%, 0%);
}

.ocultaPokemon {
  filter: brightness(0);
}
.mostrarPokemon {
  filter: drop-shadow(0 10px 1px red) drop-shadow(0 10px 20px yellow);
  animation: change 1s linear infinite;
}
@keyframes change {
  25% {
    filter: drop-shadow(0 10px 1px blue) drop-shadow(0 10px 20px yellow);
  }
  50% {
    filter: drop-shadow(0 10px 1px green) drop-shadow(0 10px 20px yellow);
  }
  75% {
    filter: drop-shadow(0 10px 1px yellow) drop-shadow(0 10px 20px yellow);
  }
  100% {
    filter: drop-shadow(0 10px 1px red) drop-shadow(0 10px 20px yellow);
  }
}
</style>
