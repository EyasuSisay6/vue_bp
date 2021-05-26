<template>
  <div>
    <v-container>
      <!-- :src="`http://188.166.153.99/media/${image.image}`" -->
      <!-- v-html="product.description" -->
      <v-row>
        <v-col cols="5" md="5" class="my-4">
          <zoom-on-hover
            :img-normal="active.url_normal"
            :img-zoom="active.url_zoom"
            :scale="1.3"
          ></zoom-on-hover>

          <v-slide-group multiple show-arrows>
            <v-slide-item v-for="n in Pimages.thumbs" :key="n.id">
              <div
                :style="active.id == n.id ? 'border:3px solid green' : ''"
                class="ma-1"
                @click="toggle(n)"
              >
                <v-img height="50px" width="50px" :src="n.url"></v-img>
              </div>
            </v-slide-item>
          </v-slide-group>
        </v-col>
        <v-col>
          <v-col>
            <v-container>
              <v-row justify="start">
                <v-col>
                  <p class="text-h4">Overview</p>
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
                  <v-card elevation="0">
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
                  ><v-btn
                    dark
                    class="btn mt-2 mr-2"
                    tile
                    elevation="0"
                    color="btn"
                    style="background-color:white;color:#09b750;border:1px solid #09b750;"
                    >Buy it Now</v-btn
                  >
                  <v-btn
                    class="btn mt-2 mr-2"
                    tile
                    dark
                    elevation="0"
                    color="btn"
                    style="background-color:white;color:#09b750;border:1px solid #09b750;"
                    >Add to Cart</v-btn
                  ></v-col
                >
              </v-row>
              <v-divider class="my-6"></v-divider>
              <v-row>
                <v-btn
                  dark
                  elevation="0"
                  color="btn"
                  style="background-color:white;color:#09b750;border:1px solid #09b750;"
                  class="btn mr-3"
                  >Make Offer</v-btn
                >

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
      tab: null,
      active: {
        id: "1",
        url_normal: "/images/1N.jpg",
        url_zoom: "/images/1.jpg",
      },
      sheet: false,
      rating: 4.5,
      quantity: 1,
      zoomerOptions: {
        zoomFactor: 3,
        pane: "pane",
        hoverDelay: 300,
        namespace: "zoomer-bottom",
        move_by_click: false,
        scroll_items: 4,
        choosed_thumb_border_color: "#dd2c00",
        scroller_position: "bottom",
        zoomer_pane_position: "right",
      },
      Pimages: {
        // optional, if not present will use normal_size instead
        thumbs: [
          {
            id: "1",
            url: "/images/1S.jpg",
          },
          {
            id: "2",
            url: "/images/2S.jpg",
          },
          {
            id: "3",
            url: "/images/3S.jpg",
          },
          {
            id: "4",
            url: "/images/4S.jpg",
          },
          {
            id: "5",
            url: "/images/5S.jpg",
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
        ],
      },
    };
  },
  computed: {},
  methods: {
    increment() {
      this.quantity = parseInt(this.quantity, 10) + 1;
      console.log(this.$vuetify.breakpoint.name);
    },
    decrement() {
      this.quantity =
        this.quantity > 1 ? parseInt(this.quantity, 10) - 1 : this.quantity;
    },
    toggle(n) {
      this.active.url_normal = this.Pimages.normal_size.find(
        (e) => e.id == n.id
      ).url;
      this.active.url_zoom = this.Pimages.large_size.find(
        (e) => e.id == n.id
      ).url;
      this.active.id = n.id;
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

.favorite {
  cursor: pointer;
}
</style>
