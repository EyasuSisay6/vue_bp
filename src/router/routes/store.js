export default [
  {
    path: "/store/:id/home",
    name: "storeHome",
    component: () =>
      import(/* webpackChunkName: "landing" */ "@/components/store/Home.vue"),
  },
  {
    path: "/store/:id/products",
    name: "storeProducts",
    component: () =>
      import(
        /* webpackChunkName: "landing" */ "@/components/store/Products.vue"
      ),
  },
  {
    path: "/store/:id/company",
    name: "storeCompany",
    component: () =>
      import(
        /* webpackChunkName: "landing" */ "@/components/store/Company.vue"
      ),
  },
  {
    path: "/store/:id/contacts",
    name: "storeContacts",
    component: () =>
      import(
        /* webpackChunkName: "landing" */ "@/components/store/Contacts.vue"
      ),
  },
];
