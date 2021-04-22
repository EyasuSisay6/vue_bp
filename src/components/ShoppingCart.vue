<template>
  <v-app>
    
      <v-main>
        <ShoppingCart />
      </v-main>
      
  </v-app>
</template>

<script>
import ShoppingCart from "./cart/ShoppingCart";

export default {
  components: {
    ShoppingCart,
  },
  data() {
    return {};
  },
};
</script>