<template>
  <div style="width:150px">
    <!-- :src="`http://188.166.153.99/media/${productImages[0].image}`" -->
    <v-card width="150">
      <v-img
        :src="productImages.image[0]"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        width="150"
        height="150"
      >
        <v-card-title class="text-md-h6 text-subtitle-2"
          >{{ sellingPrice }} ETB</v-card-title
        >
      </v-img>
    </v-card>
    <p class="text-subtitle-2 ma-0 pa-0">{{ productName }}</p>
    <v-rating
      :value="3"
      readonly
      background-color="green lighten-3"
      color="#09B750"
      x-small
    ></v-rating>
    <v-divider></v-divider>
    <v-row class="mt-1 mb-2" justify="center">
      <v-btn
        @click="
          addToCart({
            image: productImages.image[0],
            price: sellingPrice,
            title: productName,
            id: productId,
            category: productCategory.categoryName,
          })
        "
        icon
        class="hover-icon"
        style=""
        ><v-icon small>mdi-cart-outline</v-icon></v-btn
      >
      <v-btn
        @click="
          $router.push({
            path: `/ProductDetails/${productId}`,
          })
        "
        icon
        class="hover-icon"
        style=""
        ><v-icon small>mdi-eye-outline</v-icon></v-btn
      >
      <v-btn
        @click="
          addToWish({
            image: productImages.image[0],
            price: sellingPrice,
            title: productName,
            id: productId,
            category: productCategory.categoryName,
          })
        "
        icon
        class="hover-icon"
        style=""
        ><v-icon small>mdi-heart-outline</v-icon></v-btn
      >
      <v-btn icon class="hover-icon" style=""
        ><v-icon small>mdi-chart-box-outline</v-icon></v-btn
      >
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    vendor: {
      type: Object,
      required: true,
    },
    sellingPrice: {
      type: Number,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productImages: {
      type: Object,
      required: true,
    },
    productCategory: {
      type: Object,
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
.outerCard {
  width: 150px;
}
</style>
