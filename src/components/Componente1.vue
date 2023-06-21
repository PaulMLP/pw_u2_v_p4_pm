<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: "Componente",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
h1{
    background-color: #41b883;
    padding: 30px;
    box-shadow: 0 0 10px;
}
</style>
