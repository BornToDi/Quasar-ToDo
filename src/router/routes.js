const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Registration.vue") },
      { path: "login", component: () => import("pages/login.vue") },
      { path: "user", component: () => import("pages/userPage.vue") },
      { path: "adress", component: () => import("pages/usarAdress.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
