export default [
    {
      path: '/find-store',
      name: 'store-finder',
      component: () =>
        import(
          /* webpackChunkName: "landing" */ '@/components/Map.vue'
        ),
    },
  ];
  