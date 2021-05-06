export default [
  {
    path: "/ProductDetails/:id",
    name: "ProductDetails",
    component: () => import("@/components/ProductDetails.vue"),
  },
];
