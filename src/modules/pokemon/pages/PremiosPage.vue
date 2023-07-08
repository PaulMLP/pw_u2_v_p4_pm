<template>
  <div class="page-reward">
    <div class="container">
      <h1>Premios del Juego Pokémon</h1>

      <section class="sec-one">
        Primer premio: "Campeón Pokémon" <br />
        Obtienes el título de "Maestro Pokémon" y reconocimiento especial.
        <img
          src="https://img.game8.co/3413661/d2c5afc15f91c186933d635edb020f6d.png/show"
          alt="insignia"
        />
      </section>
      <section class="sec-two">
        Segundo premio: "Entrenador Pokémon" <br />
        Obtienes una medalla de bronce y un set de cartas de Pokémon.
        <img
          src="https://static.wixstatic.com/media/09335a_903e4eacdbc64183a0dee519aeb08d5a~mv2.png/v1/fill/w_560,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/09335a_903e4eacdbc64183a0dee519aeb08d5a~mv2.png"
          alt="insignia"
        />
      </section>
      <section class="sec-one">
        Tercer premio: "Investigador Pokémon" <br />
        Obtienes un paquete de investigación de Pokémon exclusivo.
        <img
          src="https://static.wikia.nocookie.net/pokemon/images/4/40/Pok%C3%A9mon_World_Coronation_Series_Logo.png"
          alt="insignia"
        />
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.page-reward {
  background: #d2d2d2;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
}
.container {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
}
section {
  border: black solid 1px;
  padding-top: 20px;
  width: auto;
  height: 350px;
  margin-left: -20px;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  line-height: 2rem;
  letter-spacing: 0.1rem;
  color: #333;
}
.sec-one,
.sec-two {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sec-one {
  background: #333;
  color: #d2d2d2;
}
img {
  margin-top: 30px;
  width: 250px;
  height: 250px;
}
</style>
