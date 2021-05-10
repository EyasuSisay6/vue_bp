<template>
  <section id="first-ad">
    <v-row no-gutters justify="space-between">
      <v-col cols="12" md="8">
        <v-carousel
          hide-delimiters
          show-arrows-on-hover
          height="420"
          class="py-5"
        >
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" md="4" class="py-5 pl-5">
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
</template>

<script>
export default {
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

<style lang="scss" scoped></style>
