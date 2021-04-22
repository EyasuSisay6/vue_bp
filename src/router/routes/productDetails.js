export default [
    {
      path: '/',
      name: 'ProductDetails',
      component: () =>
        import(
          /* webpackChunkName: "landing" */ '@/components/ProductDetails.vue'
        ),
    },
  ];
  