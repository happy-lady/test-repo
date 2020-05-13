import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import NewMessage from "../views/message/NewMessage.vue";
import AccountPage from "../views/account/Page.vue";
import Login from "../views/account/Login.vue";
import MainPage from "../views/Main.vue";
import PageNotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/app/",
    component: MainPage,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "newmessage",
        name: "newmessage",
        component: NewMessage
      },
    ]
  },
  {
    path: "/app/account/",
    component: AccountPage,
    children: [
      {
        path: "login",
        name: "login",
        component: Login,
      },
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "*",
    component: PageNotFound,
    meta: { title: "Page Not Found" }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
