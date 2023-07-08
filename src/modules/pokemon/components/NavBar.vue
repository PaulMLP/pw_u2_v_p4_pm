<template>
  <div class="nav">
    <router-link
      to="/"
      :class="{ active: activeLink === 'welcome' }"
      @click="setActiveLink('welcome')"
      >Bienvenida</router-link
    >
    <router-link
      to="/juego"
      :class="{ active: activeLink === 'juego' }"
      @click="setActiveLink('juego')"
      >Juego</router-link
    >
    <router-link
      to="/premios"
      :class="{ active: activeLink === 'premios' }"
      @click="setActiveLink('premios')"
      >Premios</router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeLink: "",
    };
  },
  created() {
    this.activeLink = localStorage.getItem("activeLink") || ""; // Recupera el enlace activo del almacenamiento local
  },
  methods: {
    setActiveLink(link) {
      this.activeLink = link;
      localStorage.setItem("activeLink", link); // Guarda el enlace activo en el almacenamiento local
    },
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: flex-end;
  height: 50px;
  padding: 0px;
  font-weight: bold;
  background-color: #a5a5a5;
}

.nav a {
  font-size: 1.3rem;
  color: #636363;
  text-decoration: none;
  margin: 0px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav a:hover,
.nav a.active {
  outline: none;
  background-color: #d2d2d2;
  color: #333;
}
</style>
