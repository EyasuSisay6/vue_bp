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
            <v-col cols="12" md="6" sm="10" align-self="center">
              <v-row justify="center">
                <v-carousel>
                  <v-carousel-item
                    v-for="image in sellImages"
                    :key="image.path"
                    :src="image.path"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                  ></v-carousel-item>
                </v-carousel>
              </v-row>
            </v-col>

            <v-col cols="12" md="6" sm="10" class="">
              <v-container>
                <v-row justify="start" class="ml-4 text-left">
                  <div class="headline">
                    Lorem ipsum dolor sit amet consectetur
                  </div>
                </v-row>
                <v-row justify="start" class="ma-4">
                  <span> Brand: </span>
                  <span class="blue--text ml-2 mr-2"> {{ seller }} </span>
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
                  <span class="caption ml-2 mt-1">({{ rating }} review)</span>
                </v-row>
                <v-divider></v-divider>
                <v-row justify="start" class="ma-4">
                  <span class="mt-1 text-decoration-line-through">
                    {{ oldPrice }}
                  </span>
                  <h3 class="ml-2 red--text">
                    {{ newPrice }}
                  </h3>
                </v-row>
                <v-row justify="start" class="ma-4">
                  <span class="mr-2">Sold By:</span>
                  <span class="text-uppercase blue--text"> {{ seller }} </span>
                </v-row>
                <v-row class="text-left">
                  <v-list>
                    <v-list-item v-for="desc in description" :key="desc.desc">
                      <v-list-item-icon>
                        <v-icon> mdi-circle-small </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        {{ desc.desc }}
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-row>
                <v-row justify="start" class="my-2">
                  <v-col cols="6" sm="6">
                    <v-btn
                      rounded
                      elevation="1"
                      color="primary"
                      height="40"
                      min-width="150"
                      class="btn"
                    >
                      Send Inquery</v-btn
                    >
                  </v-col>
                  <v-col cols="6" sm="6">
                    <v-btn
                      rounded
                      elevation="1"
                      color="amber lighten-4 primary--text"
                      height="40"
                      min-width="150"
                      class="btn"
                    >
                      <v-icon> mdi-message-text </v-icon>
                      Chat Now
                    </v-btn>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="my-4">
                  <v-col cols="12" sm="12" md="12" lg="3" class="">
                    <v-card elevation="0" :width="width + '%'">
                      <div class="text-left">
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
                      color="secondary"
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
                      color="primary"
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
                    <v-btn
                      icon
                      @click="favorited = !favorited"
                      :width="width + '%'"
                    >
                      <v-icon large v-if="favorited" color="primary">
                        mdi-heart
                      </v-icon>
                      <v-icon large v-else> mdi-heart-outline </v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
              </v-container>
            </v-col>
          </v-row>
        </v-container>

        <v-col cols="12" class="">
          <v-row justify="center">
            <v-col cols="12" md="8" sm="10">
              <v-card>
                <v-bottom-sheet v-model="sheet">
                  <template v-slot:activator="{ on, attrs }">
                    <v-card v-bind="attrs" v-on="on">
                      <v-row justify="start" class="my-2">
                        <v-col cols="8" class="text-left pl-8">
                          <h4>Quick Access</h4>
                        </v-col>
                        <v-col cols="4" class="text-right pr-8">
                          <v-icon> mdi-chevron-right </v-icon>
                        </v-col>
                      </v-row>
                    </v-card>
                  </template>
                  <v-list>
                    <v-subheader> Quick Accesss </v-subheader>
                    <v-list-item v-for="info in data" :key="info.property">
                      <v-list-item-title>
                        <v-row justify="start">
                          <!-- <v-col cols="2"></v-col> -->
                          <v-col cols="6" class="text-left">
                            {{ info.property }}
                          </v-col>
                          <v-col cols="6" class="text-left">
                            {{ info.value_ }}
                          </v-col>
                        </v-row>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-bottom-sheet>
                <v-container
                  class="pl-8"
                  v-for="info in data"
                  :key="info.property"
                >
                  <v-row justify="start">
                    <v-col cols="6" class="text-left">
                      <span>{{ info.property }}</span>
                    </v-col>
                    <v-col cols="6" class="text-left">
                      <span>{{ info.value_ }}</span>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" class="my-5">
          <v-row justify="center">
            <v-col cols="12" md="8" sm="10" class="">
              <v-card class="">
                <v-card class="pa-6">
                  <v-row justify="start" class="">
                    <h4>Lead Time</h4>
                  </v-row>
                </v-card>

                <v-container v-for="data in leadData" :key="data.units">
                  <v-row justify="start">
                    <v-col cols="" class="text-left">
                      {{ data.units }}
                    </v-col>
                    <v-col cols="" class="text-left">
                      {{ data.days }}
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12">
          <v-row justify="center" class="">
            <v-col cols="12" md="8" sm="10">
              <v-card class="pa-4" color="indigo lighten-5">
                <v-row justify="space-between" class="mt-1">
                  <v-col cols="6" class="text-left">
                    <h3>Grassel GmbH</h3>
                  </v-col>
                  <v-col cols="6">
                    <v-icon color="orange">mdi-medal</v-icon>
                    <span> Gold Supplier </span>
                  </v-col>
                </v-row>

                <v-row justify="space-around" style="width: 150px">
                  <country-flag country="et" size="normal" />
                  <span> AT </span>
                  <span> 2YRS </span>
                </v-row>

                <v-row justify="space-between" class="mt-5">
                  <v-col class="text-left">
                    <h3>>=24h</h3>
                    <span class="">Response Time</span>
                  </v-col>
                  <v-col>
                    <h3>-</h3>
                    <span class="">On-time delivery rate</span>
                  </v-col>
                  <v-col class="text-right">
                    <h3>-</h3>
                    <span class="">Transactions</span>
                  </v-col>
                </v-row>

                <v-row justify="space-between" class="my-5">
                  <v-col class="text-left">
                    <h3>11-50</h3>
                    <span class="">Employees</span>
                  </v-col>
                  <v-col>
                    <h3>1-4</h3>
                    <span class="">R&D staffs</span>
                  </v-col>
                  <v-col class="text-right">
                    <h3>-</h3>
                    <span class="">patents</span>
                  </v-col>
                </v-row>

                <v-row justify="center" class="my-3">
                  <v-col cols="6">
                    <v-btn rounded color="primary" min-width="150" class="btn">
                      Follow
                    </v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn rounded color="primary" min-width="150" class="btn">
                      Visit Store
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12">
          <v-row justify="center">
            <v-col cols="12" md="8" sm="12">
              <v-card flat>
                <v-tabs v-model="tab" centered class="">
                  <v-tabs-slider></v-tabs-slider>
                  <v-tab href="#tab-1" class="case"> Select For You </v-tab>
                  <v-col cols="2"></v-col>
                  <v-tab href="#tab-2" class="case"> Hot Selling </v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab">
                  <v-tab-item v-for="i in 2" :key="i" :value="'tab-' + i">
                    <v-container v-if="i === 1">
                      <v-col cols="12">
                        <v-row justify="center">
                          <v-col
                            cols="4"
                            md="4"
                            sm="4"
                            v-for="data in recommended"
                            :key="data.src"
                          >
                            <v-card class="mx-auto my-6" width="250">
                              <v-img
                                :src="data.src"
                                height="130"
                                max-width="auto"
                              ></v-img>
                              <v-card-text class="py-0 text-left">
                                <h4>{{ data.price }}</h4>
                                <h4>{{ data.quantity }}</h4>
                              </v-card-text>
                            </v-card>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-container>

                    <v-col cols="12" v-if="i === 2">
                      <v-row justify="center">
                        <v-col
                          cols="4"
                          md="4"
                          sm="4"
                          v-for="data in hotSelling"
                          :key="data.src"
                        >
                          <v-card class="mx-auto my-6" width="250">
                            <v-img
                              :src="data.src"
                              height="130"
                              max-width="auto"
                            ></v-img>
                            <v-card-text class="py-0 text-left">
                              <h4>{{ data.price }}</h4>
                              <h4>{{ data.quantity }}</h4>
                            </v-card-text>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-tab-item>
                </v-tabs-items>
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12">
          <v-row justify="center">
            <v-col cols="12" sm="10" md="10">
              <v-row justify="center">
                <v-col cols="12" md="6" sm="6">
                  <v-btn
                    rounded
                    elevation="0.5"
                    color="amber lighten-4 primary--text"
                    height="45"
                    :width="btnWidth + '%'"
                    class="btn"
                  >
                    <v-icon class="mr-2"> mdi-message-text </v-icon>
                    Chat Now
                  </v-btn>
                </v-col>
                <v-col cols="12" md="6" sm="6">
                  <v-btn
                    rounded
                    elevation="0.5"
                    color="primary"
                    height="45"
                    :width="btnWidth + '%'"
                    class="btn"
                  >
                    <v-icon class="mr-2"> mdi-email-outline </v-icon>
                    Send Inquery
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import CountryFlag from "vue-country-flag";
export default {
  components: {
    CountryFlag,
  },
  data() {
    return {
      myImage: require("../../assets/ford.webp"),
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
          src: require("../../assets/revo.jpg"),
          price: "$340.90",
          quantity: "1 Piece (MOQ)",
        },
        {
          src: require("../../assets/r_revo.jpg"),
          price: "$340.90",
          quantity: "1 Piece (MOQ)",
        },
        {
          src: require("../../assets/b_revo.jpg"),
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
          src: require("../../assets/multi.jpg"),
          price: "$340.90",
          quantity: "3 Piece (MOQ)",
        },
        {
          src: require("../../assets/golden.jpg"),
          price: "$340.90",
          quantity: "1 Piece (MOQ)",
        },
        {
          src: require("../../assets/ferrari.jpg"),
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
        {
          desc:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        },
      ],
      sellImages: [
        {
          path: require("../../assets/ford.webp"),
        },
        {
          path: require("../../assets/golden.jpg"),
        },
        {
          path: require("../../assets/f_hilux.jpg"),
        },
        {
          path: require("../../assets/ferrari.jpg"),
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