import Vue from "vue";
import VueRouter from "vue-router";
import Days from "../views/Days.vue";
import Times from "../views/Times.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Days",
    component: Days
  },
  {
    path: "/day/:id",
    name: "Times",
    component: Times
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
