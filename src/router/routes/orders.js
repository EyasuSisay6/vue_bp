export default [
  {
    path: "/orders",
    name: "orders",
    component: () =>
      import(/* webpackChunkName: "landing" */ "@/components/Orders.vue"),
  },
];
