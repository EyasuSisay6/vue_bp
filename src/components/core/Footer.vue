<template>
  <div>
    <div class="hidden-md-and-down">
      <v-footer dark padless class="d-block text-center">
        <v-card flat tile class="green lighten-1 white--text text-start">
          <v-card-text>
            <v-row align="center">
              <v-spacer></v-spacer>
              <v-col cols="5">
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>Newsletter</v-list-item-title>
                    <v-list-item-subtitle
                      >Subscribe to get information about products and
                      coupons</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col cols="4">
                <v-row align="center">
                  <v-text-field
                    solo
                    dense
                    flat
                    light
                    class="mt-7"
                    height="50px"
                    placeholder="Email Address"
                  ></v-text-field>
                  <v-btn color="black" dark height="50px" tile>Subscribe</v-btn>
                </v-row>
              </v-col>
              <v-spacer></v-spacer>
            </v-row>
          </v-card-text>

          <v-divider></v-divider>
        </v-card>
        <v-card flat tile class="green lighten-1 white--text text-center">
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0">
            <v-row>
              <v-spacer></v-spacer>
              <v-col>
                <v-list style="background-color:transparent;" dense flat>
                  <v-subheader class="text-center text-h6 white--text pl-4"
                    >Our Courses</v-subheader
                  >
                  <v-list-item-group>
                    <v-list-item
                      style="min-height:30px"
                      v-for="(item, i) in courses"
                      :key="i"
                    >
                      <v-list-item-content class="py-0">
                        <v-list-item-title
                          ><p class="text-start mb-0">{{ item }}</p>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                <v-list style="background-color:transparent;" dense flat>
                  <v-subheader class="text-center text-h6 white--text pl-4"
                    >About</v-subheader
                  >
                  <v-list-item-group>
                    <v-list-item
                      style="min-height:30px"
                      v-for="(item, i) in about"
                      :key="i"
                    >
                      <v-list-item-content class="py-0">
                        <v-list-item-title
                          ><p class="text-start mb-0">{{ item }}</p>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                <v-list style="background-color:transparent;" dense flat>
                  <v-subheader class="text-center text-h6 white--text pl-4"
                    >Our E-commerce</v-subheader
                  >
                  <v-list-item-group>
                    <v-list-item
                      style="min-height:30px"
                      v-for="(item, i) in ec"
                      :key="i"
                    >
                      <v-list-item-content class="py-0">
                        <v-list-item-title
                          ><p class="text-start mb-0">{{ item }}</p>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                <v-list style="background-color:transparent;" dense flat>
                  <v-subheader class="text-center text-h6 white--text pl-4"
                    >Make Money</v-subheader
                  >
                  <v-list-item-group>
                    <v-list-item
                      style="min-height:30px"
                      v-for="(item, i) in grow"
                      :key="i"
                    >
                      <v-list-item-content class="py-0">
                        <v-list-item-title
                          ><p class="text-start mb-0">{{ item }}</p>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-col>

              <v-spacer></v-spacer>
            </v-row>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Ashewa</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </div>
    <div class="hidden-lg-and-up">
      <v-footer height="60">
        <v-bottom-navigation fixed color="#09B750" horizontal>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-btn
            @click="
              $router.push({
                path: `/`,
              })
            "
          >
            <v-icon color="#09B750">mdi-home</v-icon>
          </v-btn>

          <v-btn
            @click="
              $router.push({
                path: '/wishList',
              })
            "
            text
          >
            <v-badge color="#09B750" :content="`${totalWishList.length}`">
              <v-icon color="#09B750">mdi-heart</v-icon>
            </v-badge>
          </v-btn>

          <v-btn
            @click="
              $router.push({
                name: 'ShoppingCart',
              })
            "
            text
          >
            <v-badge color="#09B750" :content="`${totalCartList.length}`">
              <v-icon color="#09B750">mdi-cart</v-icon>
            </v-badge>
          </v-btn>
          <v-btn tile>
            <p class="mt-4">Ask more</p>
          </v-btn>

          <v-btn tile color="#09B750">
            <p class="mt-4 white--text">Buy now</p>
          </v-btn>
        </v-bottom-navigation>
      </v-footer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Footer",
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      courses: [
        "Digital Marketing",
        "Web Designer",
        "MLM Trainings",
        "Personal Development",
        "Project Management",
      ],
      about: ["Ashewa story", "Community", "Blog", "Job Vacancy", "Contact"],
      ec: ["Ashewa story", "Community", "Blog", "Job Vacancy", "Contact"],
      grow: ["Ashewa story", "Community", "Blog", "Job Vacancy", "Contact"],
    };
  },
  computed: {
    ...mapGetters(["totalWishList", "totalCartList"]),
    appVersion() {
      return this.$store.getters.appVersion;
    },
    totalWishList() {
      return this.$store.getters.totalWishList;
    },
    totalCartList() {
      return this.$store.getters.totalCartList;
    },
  },
};
</script>
<style scoped></style>
