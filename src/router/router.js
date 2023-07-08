import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../modules/pokemon/pages/BienvenidaPage"),
  },
  {
    path: "/juego",
    component: () => import("../modules/pokemon/pages/PokemonPage"),
  },
  {
    path: "/premios",
    component: () => import("../modules/pokemon/pages/PremiosPage"),
  },
  {
    path: "/:pathMatch(.*)*", //wildcard
    component: () => import("../modules/pokemon/pages/NotFoundPage"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, //definicion de rutas
});

export default router;
