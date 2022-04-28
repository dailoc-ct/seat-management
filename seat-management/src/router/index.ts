import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import GetData from "../views/GetData.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: GetData,
  },
  {
    path: "/b-way",
    name: "b-way",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BWay.vue"),
  },
  {
    path: "/c-way",
    name: "c-way",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PrototypeDemo.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
