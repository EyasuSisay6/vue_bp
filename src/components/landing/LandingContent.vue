<template>
  <div>
    <section id="first-ad">
      <v-row no-gutters justify="space-between">
        <v-col sm="8">
          <v-carousel hide-delimiters height="420" class="py-5 pr-5">
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-col>

        <v-col sm="4" class="py-5 pl-5">
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
          <v-col v-for="(n, i) in categories" :key="i">
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
        <v-btn text depressed>New Arrivals</v-btn>
        <v-btn text depressed>Best Seller</v-btn>
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
        <v-btn text depressed>New Arrivals</v-btn>
        <v-btn text depressed>Best Seller</v-btn>
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
        <v-btn text depressed>New Arrivals</v-btn>
        <v-btn text depressed>Best Seller</v-btn>
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
        <v-col sm="8"
          ><div class="pb-5">
            <v-img
              src="http://vuestorefronts.com/_nuxt/img/ad-1.f602a3d.jpg"
              aspect-ratio="1.7"
              height="190"
            ></v-img></div
        ></v-col>
        <v-col sm="4"
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
  },
  data() {
    return {
      model: null,
      rating: 4,
      dealOfTheDay: [
        {
          price: 555,
          image:
            "http://45.76.97.89:3000/uploads/51a0ff71f98649af8b17284ed14f955d.jpg",
        },
        {
          price: 1233,
          image:
            "http://45.76.97.89:3000/uploads/bb783d18223044cca198d84a4e0e3191.jpg",
        },
        {
          price: 324,
          image:
            "http://45.76.97.89:3000/uploads/5a88e8516a6e44cb86ba41516dca0d56.jpg",
        },
        {
          price: 692,
          image:
            "http://45.76.97.89:3000/uploads/e2132e11d3c34da89511593297697922.jpg",
        },
        {
          price: 625,
          image:
            "http://45.76.97.89:3000/uploads/04ec8d58423647c98d6dbd3544c1c355.jpg",
        },
        {
          price: 750,
          image:
            "http://45.76.97.89:3000/uploads/1e1f0f78e33d4ce7828d21465e84da7d.jpg",
        },
      ],
      electronics: [
        {
          price: 555,
          image:
            "http://45.76.97.89:3000/uploads/a48664eaed094c769046b4128dd341e4.jpg",
        },
        {
          price: 1233,
          image:
            "http://45.76.97.89:3000/uploads/95aa7cb09ba04ce2b529ebceabb6f02c.jpg",
        },
        {
          price: 324,
          image:
            "http://45.76.97.89:3000/uploads/5a88e8516a6e44cb86ba41516dca0d56.jpg",
        },
        {
          price: 692,
          image:
            "http://45.76.97.89:3000/uploads/9c3e74c3b8e04684ba6c8cd333bdc8ec.jpg",
        },
        {
          price: 625,
          image:
            "http://45.76.97.89:3000/uploads/a85ac7daaa614747b209894c37a0bdbd.jpg",
        },
        {
          price: 750,
          image:
            "http://45.76.97.89:3000/uploads/04ec8d58423647c98d6dbd3544c1c355.jpg",
        },
      ],
      clothings: [
        {
          price: 555,
          image:
            "http://45.76.97.89:3000/uploads/b5deb586612e4c808272da9913b8109b.jpg",
        },
        {
          price: 1233,
          image: "http://45.76.97.89:3000/uploads/1_33e3c32a03.jpg",
        },
        {
          price: 324,
          image:
            "http://45.76.97.89:3000/uploads/0f04c128bb2945608bed459cdff45b2d.jpg",
        },
        {
          price: 692,
          image:
            "http://45.76.97.89:3000/uploads/283e9ff36993434c9d228a5f7681e330.jpg",
        },
        {
          price: 625,
          image:
            "http://45.76.97.89:3000/uploads/d903b17699d842f4ab1327eff18f04d0.jpg",
        },
        {
          price: 750,
          image:
            "http://45.76.97.89:3000/uploads/1e1f0f78e33d4ce7828d21465e84da7d.jpg",
        },
      ],
      home: [
        {
          price: 555,
          image:
            "http://45.76.97.89:3000/uploads/e6965d2ab9ef4537ab17517394fe9ce4.jpg",
        },
        {
          price: 1233,
          image:
            "http://45.76.97.89:3000/uploads/20c71a1cecd047928f943f23a58c05f8.jpg",
        },
        {
          price: 324,
          image:
            "http://45.76.97.89:3000/uploads/aefd853e2fd942bb860b9eb4d8b8d7c0.jpg",
        },
        {
          price: 692,
          image:
            "http://45.76.97.89:3000/uploads/d5c5d5570e1046f080ad62c7e35fe56d.jpg",
        },
        {
          price: 625,
          image:
            "http://45.76.97.89:3000/uploads/d36aa60d7915475abcbb346de7274cac.jpg",
        },
        {
          price: 750,
          image:
            "http://45.76.97.89:3000/uploads/afd6ccaff3fe4895903ec49b51b181d0.jpg",
        },
      ],
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
