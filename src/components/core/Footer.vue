<template>
  <v-footer height="60" class="d-block text-center">
    <div class="hidden-md-and-down">
      {{ appVersion }} - {{ $t("footer.MADE_WITH") }}
      <v-icon small class="red--text mx-0 px-0">mdi-cards-heart</v-icon>
      &nbsp;{{ $t("footer.BY") }}: Ashewa
    </div>
    <v-bottom-navigation
      fixed
      class="hidden-lg-and-up"
      color="#09B750"
      horizontal
    >
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-btn
        @click="
          $router.push({
            path: `/`,
          })
        "
      >
        <v-icon color="#09B750">mdi-home</v-icon>
      </v-btn>

      <v-btn
        @click="
          $router.push({
            path: '/wishList',
          })
        "
        text
      >
        <v-badge color="#09B750" :content="`${totalWishList.length}`">
          <v-icon color="#09B750">mdi-heart</v-icon>
        </v-badge>
      </v-btn>

      <v-btn
        @click="
          $router.push({
            name: 'ShoppingCart',
          })
        "
        text
      >
        <v-badge color="#09B750" :content="`${totalCartList.length}`">
          <v-icon color="#09B750">mdi-cart</v-icon>
        </v-badge>
      </v-btn>
      <v-btn tile>
        <p class="mt-4">Ask more</p>
      </v-btn>

      <v-btn tile color="#09B750">
        <p class="mt-4 white--text">Buy now</p>
      </v-btn>
    </v-bottom-navigation>
  </v-footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Footer",
  computed: {
    ...mapGetters(["totalWishList", "totalCartList"]),
    appVersion() {
      return this.$store.getters.appVersion;
    },
    totalWishList() {
      return this.$store.getters.totalWishList;
    },
    totalCartList() {
      return this.$store.getters.totalCartList;
    },
  },
};
</script>
<style scoped></style>
