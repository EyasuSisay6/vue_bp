<template>
  <div style="width:140px;margin:auto auto">
    <!-- :src="`http://188.166.153.99/media/${productImages[0].image}`" -->
    <v-card @mouseenter="mo = true" @mouseleave="mo = false" class="pa-1">
      <v-card width="139">
        <v-img
          :src="productImages.image[0]"
          class="white--text align-end"
          width="139"
          height="100"
        >
          <div style="background-color: rgba(0, 0, 0, 0.336);">
            <v-rating
              :value="3"
              readonly
              background-color="green lighten-3"
              color="#09B750"
              x-small
            ></v-rating>
          </div>
        </v-img>
      </v-card>
      <p class="text-subtitle-2 ma-0 pa-0 ml-2 mt-1 text-start">
        {{ productName }}
      </p>
      <v-card-title
        class="text-md-h6 ma-0 pa-0 ml-2 text-subtitle-1 "
        style="font-weight:bolder"
        >{{ sellingPrice }} ETB</v-card-title
      >
      <p
        class="text-caption ma-0 pa-0 ml-2 text-start grey--text"
        style="font-weight:lighter"
      >
        +shipping 100.0
      </p>
      <p
        class="text-caption ma-0 pa-0 ml-2 mt-1 text-start grey-darken-4--text"
        style="font-weight:lighter"
      >
        <v-icon small>mdi-pin</v-icon> Bole
      </p>
      <v-divider v-if="mo"></v-divider>
      <v-row v-if="mo" class="mt-1 mb-2" justify="center">
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
    </v-card>
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
      mo: false,
    };
  },
  methods: {
    addToCart(product) {
      if (!this.$store.state.auth.isTokenSet) {
        this.$router.push({ path: "/login" });
      } else {
        this.$store.commit("ADD_PRODUCT_TO_CART_LIST", product);
      }
    },
    addToWish(product) {
      if (!this.$store.state.auth.isTokenSet) {
        this.$router.push({ path: "/login" });
      } else {
        this.$store.commit("ADD_PRODUCT_TO_WISH_LIST", product);
      }
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
