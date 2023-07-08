<template>
  <div class="contenedor-imagen">
    <img
      v-if="!muestraPockemon"
      class="ocultar-pokemon"
      :src="imagenFuente"
      alt="no se carga la imagen"
    />
    <img
      v-else
      class="mostrar-pokemon"
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
.contenedor-imagen {
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 20px 0px;
  height: 250px;
}
.ocultar-pokemon {
  height: 90%;
  filter: brightness(0);
}
.mostrar-pokemon {
  height: 90%;
  animation: change 1s linear infinite;
}

@keyframes change {
  0%,
  100% {
    filter: drop-shadow(0 10px 1px red) drop-shadow(0 0 20px white);
  }
  25% {
    filter: drop-shadow(0 10px 1px blue) drop-shadow(0 0 20px white);
  }
  50% {
    filter: drop-shadow(0 10px 1px green) drop-shadow(0 0 20px white);
  }
  75% {
    filter: drop-shadow(0 10px 1px yellow) drop-shadow(0 0 30px white);
  }
}
</style>
