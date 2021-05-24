<template>
  <div>
    <v-container>
      <!-- :src="`http://188.166.153.99/media/${image.image}`" -->
      <!-- v-html="product.description" -->
      <v-row>
        <v-col cols="12" md="5" class="my-4">
          <ProductZoomer
            :base-images="Pimages"
            :base-zoomer-options="zoomerOptions"
          />
        </v-col>
        <v-col>
          <v-col>
            <v-container>
              <v-row justify="start">
                <v-col cols="">
                  <h3>Overview</h3>
                </v-col>
              </v-row>
              <v-row justify="start" class="ml-4 text-left">
                <div class="headline">
                  <!-- {{ product.name }} -->
                  Apple MacBook Pro 13 | MacOS Big Sur 2020 | 16GB RAM | 1TB SSD
                  | WARRANTY |
                </div>
              </v-row>
              <v-row justify="start" class="ma-4">
                <span> Brand: {{ product.vendor.storeName }}</span>

                <v-rating
                  v-model="rating"
                  color="yellow darken-3"
                  background-color="grey darken-1"
                  dense
                  readonly
                  half-increments
                  hover
                  size="18"
                ></v-rating>
                <span class="caption ml-2 mt-1">({{ 3 }} review)</span>
              </v-row>
              <v-divider></v-divider>
              <v-row class="mt-3 ml-2">
                <p class="text-caption">
                  Condition: Used “LAPTOP IS FULLY TESTED AND 100% FUNCTIONAL,
                  CLEANED, AND READY TO USE!”
                </p>
              </v-row>
              <v-row class="mt-3 ml-2">
                <p class="text-caption text-start">
                  Customization: Customized logo(Min. Order: 1000 Pieces)
                  Customized packaging(Min. Order: 1000 Pieces) Graphic
                  customization(Min. Order: 1000 Pieces)
                </p>
              </v-row>
              <v-row>
                <v-col cols="6" md="2">Unit Price:</v-col>
                <v-col cols="6" md="3">
                  <v-row
                    ><h2 class="text-weight-bolder">
                      ETB {{ product.sellingPrice }}
                    </h2>
                  </v-row>
                  <v-row>
                    <h5 class="text-decoration-line-through text-weight-normal">
                      ETB {{ product.dealerPrice }}
                    </h5>
                  </v-row>
                </v-col>
                <v-col cols="12" sm="12" md="3" lg="3" class="">
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
                  ><v-btn dark class="btn mt-2 mr-2" tile color="#09b750"
                    >Buy it Now</v-btn
                  >
                  <v-btn class="btn mt-2 mr-2" tile dark color="#09b750"
                    >Add to Cart</v-btn
                  ></v-col
                >
              </v-row>
              <v-divider class="my-6"></v-divider>
              <v-row>
                <v-btn dark color="#09b750" class="btn mr-3">Make Offer</v-btn>

                <v-btn
                  elevation="0"
                  color="btn"
                  style="background-color:white;color:#09b750;border:1px solid #09b750;"
                  >Add to Wishlist
                </v-btn>
                <v-spacer></v-spacer>
              </v-row>
            </v-container>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
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

      productImages: [
        "/images/1N.jpg",
        "/images/2N.jpg",
        "/images/3N.jpg",
        "/images/4N.jpg",
        "/images/5N.jpg",
        "/images/6N.jpg",
      ],

      zoomerOptions: {
        zoomFactor: 4,
        pane: "container",
        hoverDelay: 300,
        namespace: "inline-container",
        move_by_click: false,
        scroll_items: 7,
        choosed_thumb_border_color: "#dd2c00",
        scroller_position: "bottom",
      },
      Pimages: {
        // optional, if not present will use normal_size instead
        thumbs: [
          {
            id: "1",
            url: "/images/1N.jpg",
          },
          {
            id: "2",
            url: "/images/2N.jpg",
          },
          {
            id: "3",
            url: "/images/3N.jpg",
          },
          {
            id: "4",
            url: "/images/4N.jpg",
          },
          {
            id: "5",
            url: "/images/5N.jpg",
          },
          {
            id: "6",
            url: "/images/6N.jpg",
          },
        ],

        // required
        normal_size: [
          {
            id: "1",
            url: "/images/1N.jpg",
          },
          {
            id: "2",
            url: "/images/2N.jpg",
          },
          {
            id: "3",
            url: "/images/3N.jpg",
          },
          {
            id: "4",
            url: "/images/4N.jpg",
          },
          {
            id: "5",
            url: "/images/5N.jpg",
          },
          {
            id: "6",
            url: "/images/6N.jpg",
          },
        ],

        //optional, if not present will use normal_size instead
        large_size: [
          {
            id: "1",
            url: "/images/1.jpg",
          },
          {
            id: "2",
            url: "/images/2.jpg",
          },
          {
            id: "3",
            url: "/images/3.jpg",
          },
          {
            id: "4",
            url: "/images/4.jpg",
          },
          {
            id: "5",
            url: "/images/5.jpg",
          },
          {
            id: "6",
            url: "/images/6N.jpg",
          },
        ],
      },

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
