<template>
  <h3>{{ componentTitle }}</h3>
  <h3>{{ titulo }}</h3>
  <p>{{ number }} <sup>2</sup> = {{ getSquareComputed }}</p>
  <p>{{ number }} <sup>2</sup> = {{ getSquareComputed }}</p>
  <p>{{ number }} <sup>2</sup> = {{ getSquareComputed }}</p>
  <button @click="add">+</button>
  <button @click="subtract">-</button>
</template>

<script>
export default {
  name: "Contador",
  data() {
    return {
      number: 5,
      componentTitle: this.titulo,
    };
  },
  methods: {
    getSquare() {
      console.log("Entro al metodo cuadrado");
      return this.number * this.number;
    },
    add() {
      this.number++;
    },
    subtract() {
      this.number--;
    },
  },
  computed: {
    getSquareComputed() {
      console.log("Entro al metodo cuadrado commputado");
      return this.number * this.number;
    },
  },
  props: ["titulo", "valor dos"],
};
</script>

<style>
button {
  margin: 10px;
  background-color: #41b883;
  color: #35495e;
  width: 60px;
  border-radius: 5px;
  font-size: 25px;
  cursor: pointer;
  border: 1px outset #35495e;
  transition: 0.5s transform;
}

button:hover {
  transform: scale(1.1);
  transition: 0.5s transform;
  font-weight: bold;
  box-shadow: 0 0 6px 1px #35495e;
}
</style>
