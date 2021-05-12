<template>
  <v-app>
    <v-container>
      <v-row justify="start" class="my-4">
        <v-col cols="">
          <h3>Overview</h3>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-container class="" fluid>
          <v-row justify="center">
            <v-col cols="11" md="6" sm="10" align-self="start">
              <v-row justify="center">
                <v-carousel
                  class="hidden-sm-and-down"
                  hide-delimiters
                  height="400"
                  show-arrows-on-hover
                >
                  <v-carousel-item
                    v-for="image in product.productImages"
                    :key="image.image"
                    :src="`http://188.166.153.99/media/${image.image}`"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                  ></v-carousel-item>
                </v-carousel>
                <v-carousel
                  class="hidden-md-and-up"
                  hide-delimiters
                  height="250"
                  show-arrows-on-hover
                >
                  <v-carousel-item
                    v-for="image in product.productImages"
                    :key="image.image"
                    :src="`http://188.166.153.99/media/${image.image}`"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                  ></v-carousel-item>
                </v-carousel>
              </v-row>
              <v-row justify="center">
                <v-col
                  class="imgB"
                  cols="2"
                  v-for="image in product.productImages"
                  :key="image.image"
                >
                  <v-img
                    width="40px"
                    height="40px"
                    :src="`http://188.166.153.99/media/${image.image}`"
                  ></v-img>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12" md="6" sm="10" class="">
              <v-container>
                <v-row justify="start" class="ml-4 text-left">
                  <div class="headline">
                    {{ product.productName }}
                  </div>
                </v-row>
                <v-row justify="start" class="ma-4">
                  <span> Brand: </span>
                  <span class="green--text ml-2 mr-2">
                    {{ product.vendor.storName }}
                  </span>
                  |
                  <v-rating
                    v-model="rating"
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    dense
                    half-increments
                    hover
                    size="18"
                  ></v-rating>
                  <span class="caption ml-2 mt-1">({{ 3 }} review)</span>
                </v-row>
                <v-divider></v-divider>
                <v-row justify="start" class="ma-4">
                  <span class="mt-1 text-decoration-line-through">
                    {{ product.dealerPrice }}
                  </span>
                  <h3 class="ml-2 green--text">
                    {{ product.sellingPrice }}
                  </h3>
                </v-row>
                <v-row justify="start" class="ma-4">
                  <span class="mr-2">Sold By:</span>
                  <span class="text-uppercase green--text">
                    {{ product.vendor.storeName }}
                  </span>
                </v-row>
                <v-row class="text-left">
                  <v-list>
                    <v-list-item v-for="desc in 1" :key="desc">
                      <v-list-item-icon>
                        <v-icon> mdi-circle-small </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content v-html="product.productDesc">
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-row>
                <v-divider></v-divider>
                <v-row class="my-4">
                  <v-col cols="12" sm="12" md="12" lg="3" class="">
                    <v-card elevation="0" :width="width + '%'">
                      <div class="imgB">
                        <span class="">Quantity</span>
                      </div>
                      <v-row>
                        <v-col cols="4">
                          <v-btn icon depressed @click="decrement">
                            <v-icon> mdi-minus </v-icon>
                          </v-btn>
                        </v-col>
                        <v-col cols="4" align-self="center">
                          <span>{{ quantity }}</span>
                        </v-col>
                        <v-col cols="4">
                          <v-btn icon depressed @click="increment">
                            <v-icon> mdi-plus </v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="6"
                    lg="3"
                    :class="'mt-' + marginTop"
                  >
                    <v-btn
                      depressed
                      color="#09b750"
                      dark
                      height="40"
                      class="btn"
                      :width="width + '%'"
                    >
                      Add to cart
                    </v-btn>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="6"
                    lg="3"
                    class="text-right"
                    :class="'mt-' + marginTop"
                  >
                    <v-btn
                      depressed
                      color="#09b750"
                      dark
                      height="40"
                      class="btn"
                      :width="width + '%'"
                    >
                      Buy Now
                    </v-btn>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    lg="3"
                    class="text-center"
                    :class="'mt-' + marginTop"
                  >
                  </v-col>
                </v-row>
                <v-divider></v-divider>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  data() {
    return {
      myImage:
        "http://45.76.97.89:3000/uploads/1e1f0f78e33d4ce7828d21465e84da7d.jpg",
      tab: null,
      favorited: false,
      sheet: false,
      rating: 4.5,
      oldPrice: "$409.84",
      newPrice: "$359.62",
      seller: "Youngshop",
      quantity: 1,
      carousel: 0,
      data: [
        {
          property: "Port: ",
          value_: "Any",
        },
        {
          property: "Payment Terms: ",
          value_: "Western Union,T/T,MoneyGram",
        },
        {
          property: "Supply Ability: ",
          value_: "15 Unit/Units per Week",
        },
        {
          property: "Condition: ",
          value_: "Used",
        },
        {
          property: "Type: ",
          value_: "PICKUP",
        },
      ],
      leadData: [
        {
          units: "1 - 10 Units",
          days: "5 days",
        },
        {
          units: "> 10 Units",
          days: "Negotiable",
        },
      ],
      recommended: [
        {
          src:
            "http://45.76.97.89:3000/uploads/1e1f0f78e33d4ce7828d21465e84da7d.jpg",
          price: "$340.90",
          quantity: "1 Piece (MOQ)",
        },
        {
          src:
            "http://45.76.97.89:3000/uploads/1e1f0f78e33d4ce7828d21465e84da7d.jpg",
          price: "$340.90",
          quantity: "1 Piece (MOQ)",
        },
        {
          src:
            "http://45.76.97.89:3000/uploads/1e1f0f78e33d4ce7828d21465e84da7d.jpg",
          price: "$340.90",
          quantity: "1 Piece (MOQ)",
        },
        // {
        //   src: require("../assets/f_hilux.jpg"),
        //   price: "$340.90",
        //   quantity: "1 Piece (MOQ)",
        // },
      ],
      hotSelling: [
        {
          src:
            "http://45.76.97.89:3000/uploads/1e1f0f78e33d4ce7828d21465e84da7d.jpg",
          price: "$340.90",
          quantity: "3 Piece (MOQ)",
        },
        {
          src:
            "http://45.76.97.89:3000/uploads/1e1f0f78e33d4ce7828d21465e84da7d.jpg",
          price: "$340.90",
          quantity: "1 Piece (MOQ)",
        },
        {
          src:
            "http://45.76.97.89:3000/uploads/1e1f0f78e33d4ce7828d21465e84da7d.jpg",
          price: "$340.90",
          quantity: "1 Piece (MOQ)",
        },
        // {
        //   src: require("../assets/hyundai.jpg"),
        //   price: "$340.90",
        //   quantity: "1 Piece (MOQ)",
        // },
      ],
      description: [
        {
          desc:
            "Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
          desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
          desc:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing",
        },
      ],
      sellImages: [
        {
          path: "/images/test.jpg",
        },
        {
          path: "/images/test.jpg",
        },
        {
          path: "/images/test.jpg",
        },
        {
          path: "/images/test.jpg",
        },
      ],
    };
  },
  computed: {
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 100;
        case "sm":
          return 100;
        case "md":
          return 100;
        case "lg":
          return 100;
        case "xl":
          return 100;
        default:
          return 100;
      }
    },
    marginTop() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 0;
        case "sm":
          return 0;
        case "md":
          return 4;
        case "lg":
          return 6;
        case "xl":
          return 6;
        default:
          return 6;
      }
    },
    btnWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 80;
        case "sm":
          return 80;
        case "md":
          return 60;
        case "lg":
          return 60;
        case "xl":
          return 60;
        default:
          return 60;
      }
    },
  },
  methods: {
    increment() {
      this.quantity = parseInt(this.quantity, 10) + 1;
      console.log(this.$vuetify.breakpoint.name);
    },
    decrement() {
      this.quantity =
        this.quantity > 1 ? parseInt(this.quantity, 10) - 1 : this.quantity;
    },
  },
};
</script>

<style scoped>
.btn {
  text-transform: none;
}

.case {
  text-transform: none;
}
.minusplusnumber {
  border: 1px solid silver;
  /* border-radius: 5px; */
  background-color: #fff;
  margin: 0 5px 0 5px;
  display: inline-block;
  user-select: none;
}
.minusplusnumber div {
  display: inline-block;
}
.minusplusnumber #field_container input {
  width: 50px;
  text-align: center;
  font-size: 15px;
  padding: 8px;
  border: none;
}
.minusplusnumber .mpbtn {
  padding: 3px 10px 3px 10px;
  cursor: pointer;
  border-radius: 5px;
}
.minusplusnumber .mpbtn:hover {
  background-color: #ddd;
}
.minusplusnumber .mpbtn:active {
  background-color: #c5c5c5;
}

.favorite {
  cursor: pointer;
}
</style>
