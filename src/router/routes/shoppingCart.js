export default [
    {
        path: '/cart',
        name: 'ShoppingCart',
        component: () =>
            import(
          /* webpackChunkName: "landing" */ '@/components/ShoppingCart.vue'
            ),
    },
];
