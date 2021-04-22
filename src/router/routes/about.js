export default [
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "landing" */ "@/components/About.vue"),
  },
];
