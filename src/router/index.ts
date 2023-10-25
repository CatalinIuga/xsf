import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/signin",
    name: "Signin",
    component: () => import("../views/Signin.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/Signup.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("../views/503.vue"),
  },
  {
    path: "/writeups",
    name: "Writeups",
    component: () => import("../views/503.vue"),
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("../views/503.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
