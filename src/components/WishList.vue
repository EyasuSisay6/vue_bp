<template>
  <v-app>
    <v-main>
      <WishList />
    </v-main>
  </v-app>
</template>

<script>
import WishList from "./wishList/WishList";

export default {
  components: {
    WishList,
  },
  data() {
    return {};
  },
};
</script>
