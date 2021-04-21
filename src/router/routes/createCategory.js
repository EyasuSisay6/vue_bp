export default [
  {
    path: "/create-category",
    name: "createCategory",
    component: () =>
      import(
        /* webpackChunkName: "landing" */ "@/components/category/CreateCategory.vue"
      ),
  },
];
