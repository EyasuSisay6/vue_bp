export default [
  {
    path: '/landing',
    name: '/landing',
    component: () =>
      import(
        /* webpackChunkName: "landing" */ '@/components/Landing.vue'
      ),
  },
];
