export default [
  {
    path: "/sample",
    name: "Sample",
    component: () =>
      import(/* webpackChunkName: "landing" */ "@/components/Sample.vue"),
  },
];
