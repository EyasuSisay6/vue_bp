export default [
  {
    path: "/category/:id",
    name: "singleCategory",
    component: () =>
      import(/* webpackChunkName: "landing" */ "@/components/Category.vue"),
  },
];
