<template>
  <div class="contenedor-imagenes">
    <img
      class="oculta-pokemon"
      :src="imagenFuente"
      alt="no se carga la imagen"
    />
    <img
      class="mostrar-pokemon"
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
  position: relative;
  height: 300px;
}

.mostrar-pokemon,
.oculta-pokemon {
  position: absolute;
  height: 80%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.oculta-pokemon {
  filter: brightness(0);
}

.mostrar-pokemon {
  animation: change 1s linear infinite;
}

@keyframes change {
  0%,
  100% {
    filter: drop-shadow(0 10px 1px red) drop-shadow(0 0 20px white) drop-shadow(0 0 30px cyan);
  }
  25% {
    filter: drop-shadow(0 10px 1px blue) drop-shadow(0 0 20px white) drop-shadow(0 0 30px cyan);
  }
  50% {
    filter: drop-shadow(0 10px 1px green) drop-shadow(0 0 20px white) drop-shadow(0 0 30px cyan);
  }
  75% {
    filter: drop-shadow(0 10px 1px yellow) drop-shadow(0 0 30px white) drop-shadow(0 0 50px cyan);
  }
}
</style>
