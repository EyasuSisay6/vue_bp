export default [
    {
      path: "/profile",
      name: "ProfileView",
      component: () =>
        import("@/components/vendor/Profile.vue"),
    },
  ];
  