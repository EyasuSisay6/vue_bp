<template>
  <section v-if="data.length > 0">
    <v-app-bar v-if="title != 'Deal of the day'" dense flat>
      <v-toolbar-title class="font-weight-bold">{{ title }} </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="hidden-sm-and-down" text depressed>New Arrivals</v-btn>
      <v-btn class="hidden-sm-and-down" text depressed>Best Seller</v-btn>
      <v-btn text depressed>View All</v-btn>
    </v-app-bar>
    <v-app-bar v-if="data.length > 0 && title == 'Deal of the day'" dense flat>
      <v-toolbar-title class="font-weight-bold"
        >Deal of the day</v-toolbar-title
      >
      <Countdown class="hidden-sm-and-down"></Countdown>
      <v-spacer></v-spacer>
      <v-btn text depressed>View All</v-btn>
    </v-app-bar>
    <v-row class="hidden-sm-and-down">
      <v-slide-group
        v-model="model"
        class="pa-4"
        active-class="success"
        show-arrows
      >
        <v-slide-item class="mr-5 mb-4" v-for="(n, i) in data" :key="i">
          <ProductCard
            :vendor="n.vendor"
            :productName="n.productName"
            :productImages="n.productImages"
            :sellingPrice="n.sellingPrice"
            :productId="n.productId"
            :productCategory="n.productCategory"
          />
        </v-slide-item>
      </v-slide-group>
    </v-row>
    <v-row class="hidden-md-and-up">
      <v-col
        v-for="(n, i) in data"
        :key="i"
        cols="6"
        lg="3"
        md="4"
        sm="6"
        class="mx-auto"
      >
        <ProductMobile
          :vendor="n.vendor"
          :productName="n.productName"
          :productImages="n.productImages"
          :sellingPrice="n.sellingPrice"
          :productId="n.productId"
          :productCategory="n.productCategory"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import ProductCard from "./ProductCard";
import ProductMobile from "./ProductMobile";
export default {
  components: {
    ProductCard,
    ProductMobile,
  },
  props: {
    data: Array,
    title: String,
  },
  data() {
    return {
      model: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>
