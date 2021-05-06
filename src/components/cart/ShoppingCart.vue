<template>
  <v-app>
    <v-container class="mt-2">
      <v-row>
        <v-col cols="12" md="8">
          <v-row class="mt-2 hidden-sm-and-down"></v-row>

          <v-row justify="center" class="mx-16 my-2">
            <v-col cols="12">
              <v-row justify="center">
                <h1 :class="textClass">Shopping Cart</h1>
              </v-row>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="8">
              <v-simple-table class="hidden-sm-and-down">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">PRODUCT</th>
                      <th class="text-left">PRICE</th>
                      <th class="text-left">QUANTITY</th>
                      <th class="text-left">TOTAL</th>
                      <th class="text-left">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in totalCartList" :key="item.name">
                      <td>
                        <v-row class="my-4" justify="start">
                          <v-img
                            contain
                            :src="item.image"
                            height="80"
                            width="100"
                          ></v-img>
                          <v-col>
                            <span
                              class="display blue--text"
                              style="font-size: 18"
                              >{{ item.name }}
                            </span>
                          </v-col>
                        </v-row>
                      </td>
                      <td>{{ item.price }}</td>
                      <td>{{ 1 }}</td>
                      <td>{{ 2 }}</td>
                      <td>
                        <v-btn
                          @click="removeProduct(item.productId)"
                          small
                          color="error"
                        >
                          <v-icon left dark>
                            mdi-trash-can-outline
                          </v-icon>
                          {{ item.action }}Remove
                        </v-btn>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>

              <v-row
                justify="start"
                class="hidden-md-and-up"
                v-for="item in totalCartList"
                :key="item.name"
              >
                <v-col cols="12">
                  <v-row justify="start" class="py-2 mx-1 mb-1">
                    <v-col class="text-left pl-0" cols="6">
                      <span>PRODUCT:</span>
                    </v-col>
                    <v-col cols="6" class="text-left">
                      <v-row justify="start">
                        <v-col cols="6">
                          <v-img
                            contain
                            :src="item.image"
                            height="60"
                            width="80"
                          ></v-img>
                        </v-col>
                        <v-col cols="6">
                          <span>{{ item.name }}</span>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                </v-col>
                <v-col cols="12">
                  <v-row justify="space-between" class="py-2 mx-1 mb-1">
                    <span>PRICE:</span>
                    <span>
                      {{ item.price }}
                    </span>
                  </v-row>
                  <v-divider></v-divider>
                </v-col>
                <v-col cols="12">
                  <v-row justify="space-between" class="py-2 mx-1 mb-1">
                    <span>QUANTITY:</span>
                    <span>
                      {{ item.quantity }}
                    </span>
                  </v-row>
                  <v-divider></v-divider>
                </v-col>
                <v-col cols="12">
                  <v-row justify="space-between" class="py-2 mx-1 mb-1">
                    <span>TOTAL:</span>
                    <span>
                      {{ item.total }}
                    </span>
                  </v-row>
                  <v-divider></v-divider>
                </v-col>
                <v-col cols="12">
                  <v-row justify="space-between" class="py-2 mx-1 mb-1">
                    <span>ACTION:</span>
                    <v-btn
                      @click="removeProduct(item.productId)"
                      small
                      color="error"
                    >
                      <v-icon left dark>
                        mdi-trash-can-outline
                      </v-icon>
                      {{ item.action }}Remove
                    </v-btn>
                  </v-row>
                  <v-divider></v-divider>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <!-- 
          <v-row justify="center" class="mt-16">
            <v-col cols="10" sm="10" md="8" class="text-left">
              <v-btn
                depressed
                height="50"
                class="btn"
                :width="btnWidth + '%'"
                color="primary"
                to="/"
              >
                <v-icon class="mr-2"> mdi-arrow-left </v-icon>
                Back to Home
              </v-btn>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col md="8">
              <v-row justify="center">
                <v-col cols="12" sm="10" md="4" lg="4">
                  <v-col cols="12">
                    <v-row justify="space-between">
                      Coupon Discount
                      <v-icon> mdi-chevron-down </v-icon>
                    </v-row>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="" outlined dense></v-text-field>
                  </v-col>
                  <v-col cols="12" class="text-left">
                    <v-btn depressed outlined class="apply-btn btn" height="40">
                      Apply
                    </v-btn>
                  </v-col>
                </v-col>
              </v-row>
            </v-col>
          </v-row> -->
        </v-col>
        <v-col cols="12" md="4">
          <v-col cols="12" sm="12" md="12" lg="12">
            <v-row justify="center" class="my-2">
              <v-col cols="10" class="grey lighten-2">
                <v-row justify="space-between" class="ma-4">
                  <span>Subtotal</span>
                  <span>$2</span>
                </v-row>
                <v-divider></v-divider>
                <v-row justify="space-between" class="ma-4">
                  <span>Subtotal</span>
                  <span>$2</span>
                </v-row>
                <v-divider></v-divider>
                <v-row justify="space-between" class="ma-4">
                  <span>Subtotal</span>
                  <span>$2</span>
                </v-row>
                <v-divider></v-divider>
                <v-row justify="space-between" class="ma-4">
                  <h3>Total</h3>
                  <h3 class="red--text">$227.34</h3>
                </v-row>
              </v-col>
            </v-row>

            <v-row class="mb-14" justify="center">
              <v-col cols="10" class="px-0">
                <v-btn
                  width="100%"
                  height="50"
                  class="btn"
                  depressed
                  color="primary"
                  to="/checkout"
                >
                  Proceed to checkout
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
      headers: [
        { text: "PRODUCT", value: "name", sortable: false },
        { text: "PRICE", value: "price", sortable: false },
        { text: "QUANTITY", value: "quantity", sortable: false },
        { text: "TOTAL", value: "total", sortable: false },
      ],
      products: [
        {
          image:
            "http://45.76.97.89:3000/uploads/1e1f0f78e33d4ce7828d21465e84da7d.jpg",
          name: "Lorem ipsum dolor sit amet consectetur",
          price: "$ 106.72",
          quantity: 1,
          total: "$ 106.72",
        },
        {
          image:
            "http://45.76.97.89:3000/uploads/1e1f0f78e33d4ce7828d21465e84da7d.jpg",
          name: "Lorem ipsum dolor sit amet consectetur",
          price: "$ 106.72",
          quantity: 1,
          total: "$ 106.72",
        },
      ],
    };
  },
  methods: {
    removeProduct(id) {
      this.$store.commit("REMOVE_PRODUCT_FROM_CART_LIST", id);
    },
  },
  computed: {
    totalCartList() {
      switch (this.$store.getters.totalCartList.length) {
        case 0:
          return [];
        default:
          return this.$store.getters.totalCartList;
      }
    },
    btnWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 100;
        case "sm":
          return 25;
        case "md":
          return 25;
        case "lg":
          return 25;
        case "xl":
          return 25;
        default:
          return 25;
      }
    },
  },
};
</script>

<style scoped>
.apply-btn:hover {
  background-color: #07a04b;
  color: white;
}

.btn {
  text-transform: none;
}
</style>
