<template>
  <div>
    <section id="first-ad">
      <v-row no-gutters justify="space-between">
        <v-col cols="12" md="8">
          <v-carousel hide-delimiters height="420" class="py-5 pr-5">
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-col>

        <v-col cols="6" md="4" class="py-5 pl-5">
          <div class="pb-5">
            <v-img
              src="http://vuestorefronts.com/img/slider/home-1/promotion-1.jpg"
              aspect-ratio="1.7"
              height="190"
            ></v-img>
          </div>
          <div>
            <v-img
              src="http://vuestorefronts.com/img/slider/home-1/promotion-2.jpg"
              aspect-ratio="1.7"
              height="190"
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </section>
    <section id="deal-of-the-day">
      <v-app-bar dense flat>
        <v-toolbar-title class="font-weight-bold"
          >Deal of the day</v-toolbar-title
        >
        <Countdown class="hidden-sm-and-down"></Countdown>
        <v-spacer></v-spacer>
        <v-btn text depressed>View All</v-btn>
      </v-app-bar>
      <v-row>
        <v-slide-group
          v-model="model"
          class="pa-4"
          active-class="success"
          show-arrows
        >
          <v-slide-item
            class="mr-5 mb-4"
            v-for="(n, i) in dealOfTheDay"
            :key="i"
          >
            <ProductCard
              shop="Ashewa Store"
              title="Lorem, ipsum dolor sit consectetur adipisicing elit. Itaque, iure."
              :image="n.image"
              :price="n.price"
              :rating="5"
            />
          </v-slide-item>
        </v-slide-group>
      </v-row>
    </section>
    <section id="second-ad">
      <v-row>
        <v-col
          ><div class="pb-5">
            <v-img
              src="http://vuestorefronts.com/img/collection/home-1/1.jpg"
              aspect-ratio="1.7"
              height="190"
            ></v-img></div
        ></v-col>
        <v-col
          ><div class="pb-5">
            <v-img
              src="http://vuestorefronts.com/img/collection/home-1/2.jpg"
              aspect-ratio="1.7"
              height="190"
            ></v-img></div
        ></v-col>
        <v-col
          ><div class="pb-5">
            <v-img
              src="http://vuestorefronts.com/img/collection/home-1/3.jpg"
              aspect-ratio="1.7"
              height="190"
            ></v-img></div
        ></v-col>
      </v-row>
    </section>
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
            cols="8"
            lg="3"
            md="4"
            sm="6"
            class="mx-auto"
            v-for="(n, i) in categories"
            :key="i"
          >
            <CategoryCard :title="n.title" :image="n.image" :id="n.id" />
          </v-col>
        </v-row>
      </div>
    </section>
    <section id="consumer-electronics">
      <v-app-bar dense flat>
        <v-toolbar-title class="font-weight-bold"
          >Consumer Electronics
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="hidden-sm-and-down" text depressed>New Arrivals</v-btn>
        <v-btn class="hidden-sm-and-down" text depressed>Best Seller</v-btn>
        <v-btn text depressed>View All</v-btn>
      </v-app-bar>
      <v-row>
        <v-slide-group
          v-model="model"
          class="pa-4"
          active-class="success"
          show-arrows
        >
          <v-slide-item
            class="mr-5 mb-4"
            v-for="(n, i) in electronics"
            :key="i"
          >
            <ProductCard
              shop="Ashewa Store"
              title="Lorem, ipsum dolor sit consectetur adipisicing elit. Itaque, iure."
              :image="n.image"
              :price="n.price"
              :rating="5"
            />
          </v-slide-item>
        </v-slide-group>
      </v-row>
    </section>
    <section id="clothing">
      <v-app-bar dense flat>
        <v-toolbar-title class="font-weight-bold">Clothing </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="hidden-sm-and-down" text depressed>New Arrivals</v-btn>
        <v-btn class="hidden-sm-and-down" text depressed>Best Seller</v-btn>
        <v-btn text depressed>View All</v-btn>
      </v-app-bar>
      <v-row>
        <v-slide-group
          v-model="model"
          class="pa-4"
          active-class="success"
          show-arrows
        >
          <v-slide-item class="mr-5 mb-4" v-for="(n, i) in clothings" :key="i">
            <ProductCard
              shop="Ashewa Store"
              title="Lorem, ipsum dolor sit consectetur adipisicing elit. Itaque, iure."
              :image="n.image"
              :price="n.price"
              :rating="5"
            />
          </v-slide-item>
        </v-slide-group>
      </v-row>
    </section>
    <section id="home-garden-kitchen">
      <v-app-bar dense flat>
        <v-toolbar-title class="font-weight-bold"
          >Home, Garden & Kitchen
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="hidden-sm-and-down" text depressed>New Arrivals</v-btn>
        <v-btn class="hidden-sm-and-down" text depressed>Best Seller</v-btn>
        <v-btn text depressed>View All</v-btn>
      </v-app-bar>
      <v-row>
        <v-slide-group
          v-model="model"
          class="pa-4"
          active-class="success"
          show-arrows
        >
          <v-slide-item class="mr-5 mb-4" v-for="(n, i) in home" :key="i">
            <ProductCard
              shop="Ashewa Store"
              title="Lorem, ipsum dolor sit consectetur adipisicing elit. Itaque, iure."
              :image="n.image"
              :price="n.price"
              :rating="5"
            />
          </v-slide-item>
        </v-slide-group>
      </v-row>
    </section>
    <section id="last-ad">
      <v-row>
        <v-col cols="12" md="8"
          ><div class="pb-5">
            <v-img
              src="http://vuestorefronts.com/_nuxt/img/ad-1.f602a3d.jpg"
              aspect-ratio="1.7"
              height="190"
            ></v-img></div
        ></v-col>
        <v-col cols="12" md="4"
          ><div class="pb-5">
            <v-img
              src="http://vuestorefronts.com/img/collection/home-1/3.jpg"
              aspect-ratio="1.7"
              height="190"
            ></v-img></div
        ></v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import ProductCard from "./ProductCard";
import CategoryCard from "./CategoryCard";

export default {
  components: {
    ProductCard,
    CategoryCard,
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
  padding: 40px;
}
.container {
  height: 100%;
  flex-direction: vertical;
}
</style>
