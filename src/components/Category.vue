<template>
  <div class="mt-5 mx-5" v-if="!!category">
    <v-row justify="space-around">
      <v-col cols="3">
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
              v-for="(item, i) in categories"
              :key="i"
              :src="item.src"
            >
              {{ item.title }}
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
              v-for="(item, i) in categories"
              :key="i"
              :src="item.src"
              v-model="checkbox1"
              :label="item.title"
            ></v-checkbox>
          </div>
        </v-row>
      </v-col>
      <v-col class="test1" cols="8">
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
        <section class="sec" id="products-found">
          <div>
            <v-row
              class="pa-3"
              :style="
                $vuetify.theme.dark
                  ? 'background-color:#121212'
                  : 'background-color:#F5F5F5;'
              "
              ><div class="mt-3">85 Products found</div>
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
                    <div class="pl-3">sort by latest</div>
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
              <v-col md="3" v-for="(item, index) in 12" :key="index">
                <ProductCard
                  shop="Ashewa Store"
                  title="Lorem, ipsum dolor consectetur"
                  :image="all[index].image"
                  :price="all[index].price"
                  :rating="3"
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
export default {
  components: {
    ProductCard,
  },
  computed: {
    category() {
      return this.$store.getters.getCategoryId(this.$route.params.id);
    },
    categories() {
      return this.$store.getters.categories;
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
      all: [
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
