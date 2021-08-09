<template>
  <div>
    Profile Page
  </div>
</template>
<script>
import { gmapApi } from "vue2-google-maps";
export default {
  computed: {
    google: gmapApi,
  },
  data() {
    return {
      items: [
        { title: "Notifications", icon: "mdi-bell" },
        { title: "Invoices", icon: "mdi-message-outline" },
        { title: "Address", icon: "mdi-pin" },
        { title: "Recent Viewed Products", icon: "mdi-clock-outline" },
        { title: "Wishlist", icon: "mdi-heart-outline" },
        { title: "Logout", icon: "mdi-logout" },
      ],
      title: "Notifications",
    };
  },
};
</script>
