import { createRouter, createWebHistory } from "vue-router";
import Indesiciones from "../components/Indesiciones.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Indesiciones",
      component: Indesiciones,
    },
  ],
});

export default router;
