<template>
  <div>
    <router-link to="/">Bienvenida</router-link>
    <router-link to="/juego">Juego</router-link>
    <router-link to="/premios">Premios</router-link>
    <router-link to="/pokemon">Pokemon</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  gap: 10px;
  padding: 0px 30px;
}
div a {
  font-weight: bold;
  color: blueviolet;
  margin: 0 10px;
}
</style>
