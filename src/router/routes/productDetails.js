export default [
    {
      path: '/',
      name: 'ProductDetails',
      component: () =>
        import(
           '@/components/ProductDetails.vue'
        ),
    },
  ];
  