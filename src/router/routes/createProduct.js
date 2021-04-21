export default [
  {
    path: "/create-product",
    name: "createProduct",
    component: () =>
      import(
        /* webpackChunkName: "landing" */ "@/components/product/CreateProduct.vue"
      ),
  },
];
