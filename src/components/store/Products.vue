<template>
  <div>
    <NavBar :id="id" color="#232F3E"></NavBar>
    <v-row class="mt-2 mx-2" justify="center">
      <v-col cols="12" lg="8" md="12">
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
    <div class="text-center">
      <v-pagination v-model="page" :length="6"></v-pagination>
    </div>
  </div>
</template>

<script>
import ProductCard from "../../components/landing/ProductCard";
import NavBar from "./NavBar";
export default {
  components: { ProductCard, NavBar },
  computed: {
    all() {
      return this.$store.getters.products;
    },
  },
  data() {
    return {
      id: this.$route.params.id,
      sortBy: [
        "sort by latest",
        "sort by latest",
        "sort by latest",
        "sort by latest",
        "sort by latest",
      ],
      page: 1,
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
