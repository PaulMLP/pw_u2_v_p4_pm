<template>
  <div class="contenedor-opciones">
    <ul>
      <li
        v-for="pokemon in options"
        :key="pokemon.id"
        @click="$emit('seleccionar', pokemon.id)"
      >
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    eleccion() {
      console.log("prueba de evento");
    },
  },
};
</script>

<style scoped>
.contenedor-opciones {
  display: flex;
  justify-content: center;
  padding-right: 40px;
}
ul {
  list-style: none;
}
li {
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 2px #333;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 250px;
  height: 30px;
  cursor: pointer;
  background-color: white;
  transition: 0.6s;
}

li:hover {
  background: #333;
  color: white;
  transform: scale(1.1);
}

li:active {
  transform: scale(1.02);
  border: 3px solid yellow;
  color: yellow;
}
</style>
