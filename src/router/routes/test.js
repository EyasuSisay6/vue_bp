export default [
  {
    path: "/test",
    name: "test",
    component: () =>
      import(/* webpackChunkName: "landing" */ "@/components/Test.vue"),
  },
];
