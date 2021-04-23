export default [
    {
      path: '/store-finder',
      name: '/store-finder',
      component: () =>
        import(
          /* webpackChunkName: "landing" */ '@/components/Map.vue'
        ),
    },
  ];
  