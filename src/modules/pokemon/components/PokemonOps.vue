<template>
  <div class="contenedor-opciones">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contenedor-opciones {
  margin-top: 20px;
  display: flex;
  justify-content: center;
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
  transition: .6s;
}

li:hover {
  background: #333;
  color: white;
  transform: scale(1.1);
}
</style>
