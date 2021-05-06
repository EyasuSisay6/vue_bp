<template>
  <v-app id="inspire">
    <v-main>
      Test
      {{ product }}
      <Overview id="overview" :product="product" ref="overview" />
      <Details id="details" ref="details" />
    </v-main>
  </v-app>
</template>

<script>
import Details from "@/components/product/Details.vue";
import Overview from "@/components/product/Overview";
export default {
  data() {
    return {
      value: 1,
      tab: null,
      favorited: false,
    };
  },
  computed: {
    product() {
      return this.$store.getters.getProductId(this.$route.params.id);
    },
  },
  components: {
    Overview,
    Details,
  },
  methods: {
    scrollMeTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
  },
};
</script>

<style scoped>
.call {
  text-transform: none;
  position: absolute;
  left: 0;
  bottom: 150px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}
.v-bottom-navigation {
  justify-content: start;
  overflow-x: scroll;
}

.toolbar {
  scrollbar-width: none;
}

.case {
  text-transform: none;
}

.btn {
  text-transform: none;
  border: none;
}

a {
  height: 100%;
  /* padding: 1em 1.5em; */
  text-decoration: none;
}
</style>
