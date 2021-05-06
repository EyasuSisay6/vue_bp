<template>
  <v-app>
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="100vh"
    >
      <v-main>
        <Checkout/>
      </v-main>

      <Footer />
    </v-sheet>
  </v-app>
</template>

<script>
import Checkout from "./cart/Checkout";

export default {
  components: {
    Checkout,
  },
  data() {
    return {};
  },
};
</script>