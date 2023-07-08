<template>
  <div class="container">
    <div class="container-1">
      <h1>Reglas del Juego Pokémon</h1>

      <p>
        En el siguiente juego, tendrás 3 intentos para adivinar el Pokémon
        oculto que aparece en pantalla. Se te presentarán 4 opciones para
        elegir. Aquí están las reglas del juego:
      </p>

      <ul>
        <li>
          Si adivinas correctamente en el primer intento, ganarás 5 puntos.
        </li>
        <li>
          Si adivinas correctamente en el segundo intento, ganarás 2 puntos.
        </li>
        <li>
          Si adivinas correctamente en el tercer intento, ganarás 1 punto.
        </li>
        <li>
          Si no logras adivinar correctamente en el tercer intento, perderás el
          juego.
        </li>
      </ul>

      <p>
        Recuerda que el objetivo es obtener la mayor cantidad de puntos posible
        adivinando el Pokémon correcto en el menor número de intentos. ¡Buena
        suerte!
      </p>
    </div>
    <div class="container-2">
      <img
        src="https://www.icegif.com/wp-content/uploads/2022/01/icegif-1479.gif"
        alt="no carga gif"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  color: #333;
}
.container {
  height: auto;
  display: flex;
  gap: 80px;
}
.container-1 {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}
.container-2 {
  height: auto;
  display: flex;
  align-items: center;
}
img {
  width: 350px;
  height: 350px;
}
p,
ul {
  width: 50vw;
  font-size: 1.2rem;
  text-align: justify;
  line-height: 2rem;
  letter-spacing: 0.1rem;
  color: #333;
}
</style>
