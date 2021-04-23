export default [
  {
    path: "/whishList",
    name: "whishList",
    component: () =>
      import(/* webpackChunkName: "landing" */ "@/components/WishList.vue"),
  },
];
