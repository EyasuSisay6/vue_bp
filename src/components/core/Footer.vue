<template>
  <v-footer fixed height="60" class="d-block text-center">
    <div class="hidden-md-and-down">
      {{ appVersion }} - {{ $t("footer.MADE_WITH") }}
      <v-icon small class="red--text mx-0 px-0">mdi-cards-heart</v-icon>
      &nbsp;{{ $t("footer.BY") }}: Ashewa
    </div>
    <v-bottom-navigation
      class="hidden-lg-and-up"
      :value="value"
      color="#09B750"
      horizontal
    >
      <v-spacer></v-spacer>
      <v-btn>
        <v-icon color="#09B750">mdi-home</v-icon>
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn text>
        <v-badge color="#09B750" content="0">
          <v-icon color="#09B750">mdi-cart</v-icon>
        </v-badge>
      </v-btn>

      <v-spacer></v-spacer>
    </v-bottom-navigation>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    appVersion() {
      return this.$store.getters.appVersion;
    },
  },
};
</script>
<style scoped>
.mobileResp {
}
</style>
