export default [
  {
    path: "/wishList",
    name: "whishList",
    component: () =>
      import(/* webpackChunkName: "landing" */ "@/components/WishList.vue"),
  },
];
