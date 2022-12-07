import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "/menu",
    component: Home,
  },
  {
    path: "/categoria/:name-:id",
    name: "/categoria",
    component: () =>
      import("../views/Category.vue"),
  },
  {
    path: "/busca",
    query: { q: ':search' }, 
    name: "/busca",
    component: () =>
      import("../views/Search.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
      import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
