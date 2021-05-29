<template>
  <div class="mt-5 mx-5" v-if="!!category">
    <v-row justify="space-around">
      <v-col class="hidden-sm-and-down" cols="3">
        <v-row class="mb-4">
          <div
            :class="!$vuetify.theme.dark ? 'leftContLight' : 'leftContDark'"
            style="width:100%;text-align:start;"
          >
            <div class="mb-4" style="font-size:20px;">CATEGORIES</div>
            <div class="my-1" style="cursor: pointer;">
              All Categories
            </div>
            <div
              class="my-1"
              style="cursor: pointer;"
              v-for="item in sampleCategories"
              :key="item.id"
              @click="
                $router.push({
                  path: `/category/${item.id}`,
                })
              "
            >
              {{ item.name }}
            </div>
          </div>
        </v-row>
        <v-row class="my-4">
          <div
            :class="!$vuetify.theme.dark ? 'leftContLight' : 'leftContDark'"
            style="width:100%;text-align:start;"
          >
            <div class="mb-4" style="font-size:20px;">BY BRANDS</div>
            <v-checkbox
              class="my-0"
              v-for="item in categories"
              :key="item.pcatId"
              :src="item.src"
              v-model="checkbox1"
              :label="item.parentCatName"
            ></v-checkbox>
          </div>
        </v-row>
      </v-col>
      <v-col class="test1" cols="11" md="8">
        <section class="sec" id="best-sale-items">
          <v-row>
            <h2 style="font-weight:normal;">Best Sale Items</h2>
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
                v-for="(n, i) in sampleProducts"
                :key="i"
              >
                <ProductCard
                  :vendor="n.vendor"
                  :productName="n.name"
                  :productImages="n.productimageSet"
                  :sellingPrice="n.sellingPrice"
                  :productId="`${n.id}`"
                  :productCategory="n.category"
                  :width="150"
                  :height="150"
                />
              </v-slide-item>
            </v-slide-group>
          </v-row>
        </section>
        <section class="sec" id="recomended-sale-items">
          <v-row>
            <h2 style="font-weight:normal;">Recomended Items</h2>
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
                v-for="(n, i) in sampleProducts"
                :key="i"
              >
                <ProductCard
                  :vendor="n.vendor"
                  :productName="n.name"
                  :productImages="n.productimageSet"
                  :sellingPrice="n.sellingPrice"
                  :productId="`${n.id}`"
                  :productCategory="n.category"
                  :width="150"
                  :height="150"
                />
              </v-slide-item>
            </v-slide-group>
          </v-row>
        </section>
        <section class="sec" id="products-found">
          <div>
            <v-row
              class="pa-3"
              :style="
                $vuetify.theme.dark
                  ? 'background-color:#121212'
                  : 'background-color:#F5F5F5;'
              "
              ><div class="mt-3">{{ `${all.length}` }} Products found</div>
              <v-spacer></v-spacer>
              <v-menu open-on-click bottom offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <div
                    :style="
                      $vuetify.theme.dark
                        ? 'background-color:#121212;color:white'
                        : 'background-color:#F5F5F5;'
                    "
                    class="dropDown"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    <div class="pl-3">sort</div>
                  </div>
                </template>

                <v-list>
                  <v-list-item v-for="(item, index) in sortBy" :key="index">
                    <v-list-item-title>{{ item }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-row>
            <v-row>
              <v-col md="3" v-for="(n, index) in all" :key="index">
                <ProductMobile
                  :vendor="n.vendor"
                  :productName="n.name"
                  :productImages="n.productimageSet"
                  :sellingPrice="n.sellingPrice"
                  :productId="`${n.id}`"
                  :productCategory="n.category"
                  :width="150"
                  :height="150"
                />
              </v-col>
            </v-row>
          </div>
        </section>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProductCard from "./landing/ProductCard";
import ProductMobile from "./landing/ProductMobile";
export default {
  components: {
    ProductCard,
    ProductMobile,
  },
  created() {
    this.getFilteredProducts();
  },
  methods: {
    async getFilteredProducts() {
      await this.$store.dispatch("filterProducts", {
        pcat: this.$route.params.id,
        page: 1,
        pageSize: 6,
        ranged: false,
        minP: 0,
        maxP: 1000000,
      });
    },
  },
  computed: {
    category() {
      return this.$store.getters.getCategoryId(this.$route.params.id);
    },
    filteredProducts() {
      return this.$store.getters.filteredProducts;
    },
    categories() {
      return this.$store.getters.categories;
    },
    dealOfTheDay() {
      return this.$store.getters.products;
    },
    all() {
      return this.$store.getters.sampleProducts;
    },
    sampleProducts() {
      return this.$store.getters.sampleProducts;
    },
    sampleCategories() {
      return this.$store.getters.sampleCategories;
    },
  },

  data() {
    return {
      sortBy: [
        "sort by latest",
        "sort by latest",
        "sort by latest",
        "sort by latest",
        "sort by latest",
      ],
      checkbox1: null,
      model: null,
    };
  },
};
</script>

<style scoped>
.leftContLight {
  padding: 2rem;
  background-color: #f5f5f5;
}
.leftContDark {
  padding: 2rem;
  background-color: #1f1e1e;
}
.sec {
  margin-bottom: 20px;
}
.dropDown {
  border: 1px solid green;
}
</style>
