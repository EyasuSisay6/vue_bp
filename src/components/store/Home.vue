<template>
  <div>
    <v-img id="test" src="/images/test.jpg"></v-img>
    <NavBar :id="id" color="#232F3E"></NavBar>
    <v-row class="mt-2 mx-2" justify="center">
      <v-col cols="12" lg="8" md="12">
        <section class="sec " id="best-sale-items">
          <v-row>
            <h2 style="font-weight:normal;">Top Deals</h2>
          </v-row>
          <v-divider class="my-4"></v-divider>
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
                  title="Lorem, ipsum dolor consectetur"
                  :image="n.image"
                  :price="n.price"
                  :rating="3"
                  :width="150"
                  :height="150"
                />
              </v-slide-item>
            </v-slide-group>
          </v-row>
        </section>
      </v-col>
      <v-col class="test1" cols="12" lg="8" md="12">
        <section class="sec" id="best-sale-items">
          <v-row>
            <h2 style="font-weight:normal;">Best Sellers</h2>
          </v-row>
          <v-divider class="my-4"></v-divider>
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
                  title="Lorem, ipsum dolor consectetur"
                  :image="n.image"
                  :price="n.price"
                  :rating="3"
                  :width="150"
                  :height="150"
                />
              </v-slide-item>
            </v-slide-group>
          </v-row>
        </section>
      </v-col>
      <v-col class="test1" cols="12" lg="8" md="12">
        <section class="sec" id="best-sale-items">
          <v-row>
            <h2 style="font-weight:normal;">New Arrivals</h2>
          </v-row>
          <v-divider class="my-4"></v-divider>
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
                  title="Lorem, ipsum dolor consectetur"
                  :image="n.image"
                  :price="n.price"
                  :rating="3"
                  :width="150"
                  :height="150"
                />
              </v-slide-item>
            </v-slide-group>
          </v-row>
        </section>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProductCard from "../../components/landing/ProductCard";
import NavBar from "./NavBar";
export default {
  components: { ProductCard, NavBar },
  computed: {
    dealOfTheDay() {
      return this.$store.getters.dealOfTheDay;
    },
  },
  data() {
    return {
      model: null,
      id: this.$route.params.id,
    };
  },
};
</script>

<style scoped>
section {
  padding: 10px;
}
.container {
  height: 100%;
  flex-direction: vertical;
}
.test1 {
  border: "2px solid";
}
</style>
