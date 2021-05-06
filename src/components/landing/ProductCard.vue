<template>
  <div>
    <v-card
      :color="$vuetify.theme.dark ? '#121212' : ''"
      elevation="0"
      :width="width"
      ><v-img :src="image" :height="height"> </v-img>
      <p class="overline ma-0 pa-0">{{ shop }}</p>
      <v-divider class="mb-2 pa-0"></v-divider>
      <p class="h4 font-weight-bold ma-0" style="color:#09B750;">
        {{ price }} ETB
      </p>
      <div>
        <a
          @click="
            $router.push({
              path: `/ProductDetails/${1}`,
            })
          "
          class="subtitle-2"
          style="text-decoration:none;"
          >{{ title }}</a
        >
      </div>
      <v-rating
        :value="rating"
        readonly
        background-color="green lighten-3"
        color="#09B750"
        small
      ></v-rating>
      <v-divider></v-divider>
      <v-row class="mt-1" justify="center">
        <v-btn
          @click="addToCart({ image, price, title, id: 1 })"
          icon
          class="hover-icon"
          style=""
          ><v-icon small>mdi-cart-outline</v-icon></v-btn
        >
        <v-btn
          @click="
            $router.push({
              path: `/ProductDetails/${1}`,
            })
          "
          icon
          class="hover-icon"
          style=""
          ><v-icon small>mdi-eye-outline</v-icon></v-btn
        >
        <v-btn
          @click="addToWish({ image, price, title, id: 1 })"
          icon
          class="hover-icon"
          style=""
          ><v-icon small>mdi-heart-outline</v-icon></v-btn
        >
        <v-btn icon class="hover-icon" style=""
          ><v-icon small>mdi-chart-box-outline</v-icon></v-btn
        >
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 250,
    },
    height: {
      type: Number,
      default: 300,
    },
  },
  data() {
    return {
      sh: false,
    };
  },
  methods: {
    addToCart(product) {
      this.$store.commit("ADD_PRODUCT_TO_CART_LIST", product);
    },
    addToWish(product) {
      this.$store.commit("ADD_PRODUCT_TO_WISH_LIST", product);
    },
  },
};
</script>

<style scoped>
.hover-icon:hover {
  background-color: #09b750;
  color: white;
}
</style>
