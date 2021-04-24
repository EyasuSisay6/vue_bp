export default [
    {
      path: '/currency-switcher',
      name: 'currencySwitcher',
      component: () =>
        import(
          /* webpackChunkName: "landing" */ '@/components/currency/CurrencySwitcher.vue'
        ),
    },
  ];
  