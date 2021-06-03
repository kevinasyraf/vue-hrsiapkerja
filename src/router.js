import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
      {
        path: "/",
        alias: "/login",
        name: "login",
        component: () => import("./components/Login")
      },
      // {
      //   path: '/admin',
      //   name: 'admin',
      //   component: AdminShell,
      //   children: [
      //     {
      //       path: 'home',
      //       name: 'admin_home',
      //       component: AdminHomeView
      //     },
      //   ]
      // },
      {
        path: "/lowongan",
        name: "lowongan",
        component: () => import("./components/DaftarLowongan")
      },
      {
        path: "/pelamar",
        name: "pelamar",
        component: () => import("./components/DaftarPelamar")
      },
      {
        path: "/lowongan/:id",
        name: "detail-lowongan",
        component: () => import("./components/Lowongan")
      },
      {
        path: "/pelamar/:id",
        name: "detail-pelamar",
        component: () => import("./components/Pelamar")
      },
      {
        path: "/tambahlowongan",
        name: "tambah-lowongan",
        component: () => import("./components/TambahLowongan")
      },
      {
        path: "/tambahpelamar",
        name: "tambah-pelamar",
        component: () => import("./components/TambahPelamar")
      },
      {
        path: "/submisitugas",
        name: "submisi-tugas",
        component: () => import("./components/SubmisiTugas")
      }
    ]
  });