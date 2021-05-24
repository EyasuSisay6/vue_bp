<template>
  <div>
    <FirstAd />
    <ProductSlide title="Deal of the day" :data="sampleProducts" />
    <SecondAd />
    <section id="top-categories-of-the-month">
      <v-app-bar dense flat>
        <v-toolbar-title class="font-weight-bold"
          >Top Categories of The Month
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text depressed>View All</v-btn>
      </v-app-bar>
      <div class="mx-4 my-5">
        <v-row>
          <v-col
            cols="6"
            lg="3"
            md="4"
            sm="6"
            class="mx-auto"
            v-for="(n, i) in sampleCategories"
            :key="i"
          >
            <CategoryCard :title="n.name" :image="n.image" :id="n.id" />
          </v-col>
        </v-row>
      </div>
    </section>
    <ProductSlide title="Consumer Electronics" :data="electronics" />
    <ProductSlide title="Clothings" :data="clothings" />
    <ProductSlide title="Home, Garden & Kitchen" :data="home" />
    <ThirdAd />
  </div>
</template>

<script>
import CategoryCard from "./CategoryCard";
import ProductSlide from "./ProductSlide";
import FirstAd from "../advertisement/FirstAd";
import SecondAd from "../advertisement/SecondAd";
import ThirdAd from "../advertisement/ThirdAd";

export default {
  components: {
    CategoryCard,
    ProductSlide,
    FirstAd,
    SecondAd,
    ThirdAd,
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
    products() {
      return this.$store.getters.products;
    },
    totalProducts() {
      return this.$store.getters.totalProducts;
    },
    dealOfTheDay() {
      return this.$store.getters.dealOfTheDay;
    },
    electronics() {
      return this.$store.getters.electronics;
    },
    clothings() {
      return this.$store.getters.clothings;
    },
    home() {
      return this.$store.getters.home;
    },
    sampleCategories() {
      return this.$store.getters.sampleCategories;
    },
    sampleProducts() {
      return this.$store.getters.sampleProducts;
    },
  },
  data() {
    return {
      model: null,
      rating: 4,
      items: [
        {
          src: "http://vuestorefronts.com/_nuxt/img/1.9972a24.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  padding: 0px 10px 40px 10px;
}
.container {
  height: 100%;
  flex-direction: vertical;
}
</style>
