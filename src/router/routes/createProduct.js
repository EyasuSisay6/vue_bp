export default [
  {
    path: '/checkout',
    name: 'checkout',
    component: () =>
      import(
        /* webpackChunkName: "landing" */ '@/components/Checkout.vue'
      ),
  },
];
