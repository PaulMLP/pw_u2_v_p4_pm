<template>
  <h1>BIENVENIDA</h1>
  <Rules class="rules" />
</template>

<script>
import Rules from "../components/Rules.vue";
export default {
  components: { Rules },
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: #333;
  background-color: #d2d2d2;
  margin: 0;
  height: 70px;
  line-height: 70px;
}
</style>
