<template>
  <div class="pr-0 mr-0">
    <v-row align="stretch">
      <v-col
        cols="12"
        class="hidden-md-and-down"
        md="2"
        style="background-color: #09b74fb0;"
      >
        <v-img
          style="margin:15px auto;cursor:pointer"
          height="120px"
          width="120px"
          src="/images/logo.png"
          @click="
            $router.push({
              path: `/`,
            })
          "
        ></v-img>
      </v-col>
      <v-col class="pl-0 ml-0" cols="12" md="10">
        <div>
          <v-app-bar
            class="app hidden-md-and-down"
            height="100px"
            style="background-color: #09b74fb0;"
            flat
          >
            <v-row no-gutters>
              <v-spacer></v-spacer>
              <v-col sm="5" class="hidden-md-and-down">
                <v-row class="test">
                  <v-menu open-on-click bottom offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <div class="dropDown" dark v-bind="attrs" v-on="on">
                        <div class="pl-3">
                          {{ selected.length > 12 ? "All" : selected }}
                        </div>
                        <v-icon color="#b5b5b5">
                          mdi-chevron-down
                        </v-icon>
                      </div>
                    </template>

                    <v-list>
                      <v-list-item
                        style="cursor:pointer"
                        @click="selected = item.title"
                        v-for="(item, index) in categories"
                        :key="index"
                      >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                  <v-text-field
                    solo
                    dense
                    flat
                    light
                    height="50px"
                    placeholder="I'm shopping for..."
                  ></v-text-field>
                  <v-btn color="black" dark height="50px" tile>search</v-btn>
                </v-row>
              </v-col>
              <v-spacer></v-spacer>
              <v-col sm="3">
                <div class="iconsList">
                  <v-row>
                    <div
                      @mouseenter="color1 = 'white'"
                      @mouseleave="color1 = 'black'"
                    >
                      <router-link :to="{ name: 'about' }"
                        ><v-badge bottom overlap color="black" content="0"
                          ><v-icon size="40" :color="color1"
                            >mdi-chart-box-outline</v-icon
                          ></v-badge
                        ></router-link
                      >
                    </div>

                    <v-spacer></v-spacer>
                    <div
                      @mouseenter="color2 = 'white'"
                      @mouseleave="color2 = 'black'"
                    >
                      <router-link :to="{ name: 'whishList' }">
                        <v-badge
                          bottom
                          overlap
                          color="black"
                          :content="`${totalWishList.length}`"
                        >
                          <v-icon
                            :style="`cursor: pointer; text-decoration:none;`"
                            size="40"
                            :color="color2"
                            >mdi-heart-outline</v-icon
                          ></v-badge
                        ></router-link
                      >
                    </div>

                    <v-spacer></v-spacer>
                    <div
                      @mouseenter="color3 = 'white'"
                      @mouseleave="color3 = 'black'"
                    >
                      <router-link :to="{ name: 'ShoppingCart' }">
                        <v-badge
                          bottom
                          overlap
                          color="black"
                          :content="`${totalCartList.length}`"
                        >
                          <v-icon
                            :style="`cursor: pointer; text-decoration:none;`"
                            size="40"
                            :color="color3"
                            >mdi-cart-outline</v-icon
                          ></v-badge
                        ></router-link
                      >
                    </div>

                    <v-spacer></v-spacer>
                    <v-icon size="40" color="black">mdi-account-outline</v-icon>
                    <v-btn
                      v-if="isTokenSet"
                      @click="userLogout"
                      text
                      @mouseenter="color4 = 'white'"
                      @mouseleave="color4 = 'black'"
                      :color="color4"
                    >
                      Logout</v-btn
                    >
                    <div v-if="!isTokenSet" class="innerAuth">
                      <div
                        @mouseenter="color4 = 'white'"
                        @mouseleave="color4 = 'black'"
                      >
                        <router-link
                          :to="{ path: '/login' }"
                          :style="
                            `color:${color4};cursor: pointer; text-decoration:none;`
                          "
                          >{{ $t("login.TITLE") }}</router-link
                        >
                      </div>
                      <div
                        @mouseenter="color5 = 'white'"
                        @mouseleave="color5 = 'black'"
                      >
                        <router-link
                          :to="{ name: 'signup' }"
                          :style="
                            `color:${color5};cursor: pointer; text-decoration:none;`
                          "
                          >{{ $t("signup.TITLE") }}</router-link
                        >
                      </div>
                    </div>
                    <v-spacer></v-spacer>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </v-app-bar>
          <div class="appbarBorder">
            <v-app-bar
              flat
              height="50px"
              dark
              style="background-color: #09b74fb0;"
            >
              <v-row no-gutters>
                <v-col style="height:50px;">
                  <v-row>
                    <v-col cols="2" class="hidden-md-and-up">
                      <span>
                        <v-app-bar-nav-icon
                          @click="sidebar = !sidebar"
                        ></v-app-bar-nav-icon>
                      </span>
                    </v-col>
                    <v-col>
                      <v-menu open-on-hover bottom offset-y>
                        <template v-slot:activator="{ on, attrs }">
                          <div class="dropDownS" dark v-bind="attrs" v-on="on">
                            <div class="pl-3">Shop by Category</div>
                          </div>
                        </template>

                        <v-list>
                          <v-list-item
                            v-for="(item, index) in sampleCategories"
                            :key="index"
                            @click="
                              $router.push({
                                path: `/category/${item.id}`,
                              })
                            "
                          >
                            <v-list-item-title>{{
                              item.name
                            }}</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col class="hidden-md-and-down" sm="4">
                  <v-row>
                    <v-col>
                      <router-link
                        style="text-decoration:none;"
                        :to="{ name: 'landing' }"
                      >
                        <div class="dropDownB" dark>
                          Home
                        </div>
                      </router-link>
                    </v-col>
                    <v-col>
                      <router-link
                        style="text-decoration:none;"
                        :to="{ name: 'landing' }"
                      >
                        <div class="dropDownB" dark>
                          Shops
                        </div>
                      </router-link>
                    </v-col>

                    <v-col>
                      <router-link
                        style="text-decoration:none;"
                        :to="{ name: 'landing' }"
                      >
                        <div class="dropDownB" dark>
                          Blogs
                        </div>
                      </router-link>
                    </v-col>
                  </v-row>
                </v-col>
                <v-spacer class="hidden-md-and-down"></v-spacer>
                <v-col class="hidden-md-and-down">
                  <v-row>
                    <v-col class="hidden-sm-and-down">
                      <div class="dropDownB" style="width:120px;">
                        Sell on Ashewa
                      </div>
                    </v-col>
                    <v-divider
                      class="mt-4"
                      light
                      vertical
                      style="height:40px;color:black;"
                    ></v-divider>
                    <v-col>
                      <div class="mt-2">
                        <LocaleChanger />
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-app-bar>
          </div>
        </div>
        <v-navigation-drawer v-model="sidebar" absolute disable-resize-watcher>
          <v-list>
            <v-list-item>
              <v-list-item-content>{{ appTitle }}</v-list-item-content>
              <v-list-item-action>
                <v-btn icon @click.stop="sidebar = !sidebar">
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-list-item
              v-for="(item, index) in menuItems"
              :key="index"
              :to="{ name: item.link }"
              exact
            >
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>{{ item.title }}</v-list-item-content>
            </v-list-item>

            <v-list-group v-if="admin" prepend-icon="mdi-lock" no-action>
              <v-list-item slot="activator" class="pl-0">
                <v-list-item-content>{{
                  $t("adminItems.ADMIN")
                }}</v-list-item-content>
              </v-list-item>
              <v-list-item
                v-for="(item, index) in adminItems"
                :key="index"
                :to="{ name: item.link }"
                exact
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list-group>

            <v-list-item v-if="isTokenSet" @click="userLogout">
              <v-list-item-action>
                <v-icon>mdi-exit-to-app</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                {{ $t("menuItems.LOGOUT") }}
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-action></v-list-item-action>
              <v-icon>mdi-weather-sunny</v-icon>
              <v-list-item-action class="ml-2">
                <v-switch id="themeSwitcher" v-model="isDark" inset></v-switch>
              </v-list-item-action>
              <v-icon>mdi-weather-night</v-icon>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LocaleChanger from "@/components/core/LocaleChanger";
import ResizeText from "vue-resize-text";

export default {
  name: "Toolbar",
  metaInfo() {
    return {
      title: this.$store.getters.appTitle,
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        { name: "msapplication-TileColor", content: "#ffc40d" },
        { name: "theme-color", content: "#ffffff" },
        {
          name: "apple-mobile-web-app-title",
          content: this.$store.getters.appTitle,
        },
        { name: "application-name", content: this.$store.getters.appTitle },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", color: "#5bbad5", href: "/safari-pinned-tab.svg" },
        { rel: "favicon", href: "/favicon.ico" },
      ],
    };
  },
  components: {
    LocaleChanger,
  },
  directives: {
    ResizeText,
  },
  data() {
    return {
      isDark: false,
      sidebar: false,
      selected: "All",
      color1: "black",
      color2: "black",
      color3: "black",
      color4: "black",
      color5: "black",
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
    };
  },
  computed: {
    ...mapGetters([
      "appTitle",
      "isTokenSet",
      "user",
      "totalWishList",
      "totalCartList",
      "categories",
      "sampleCategories",
    ]),
    admin() {
      return this.user !== null ? this.user.role === "admin" : false;
    },
    adminItems() {
      return [
        {
          title: this.$t("adminItems.CITIES"),
          link: "admin-cities",
          icon: "mdi-city",
          class: "btnAdminCities",
        },
        {
          title: this.$t("adminItems.USERS"),
          link: "admin-users",
          icon: "mdi-account-supervisor",
          class: "btnAdminUsers",
        },
      ];
    },
    menuItems() {
      if (this.isTokenSet) {
        return [
          {
            title: this.$t("menuItems.HOME"),
            link: "landing",
            icon: "mdi-home",
            class: "btnHome",
          },
          {
            title: this.$t("menuItems.ABOUT"),
            link: "about",
            icon: "mdi-help-circle-outline",
            class: "btnAbout",
          },
          {
            title: this.$t("menuItems.MY_PROFILE"),
            link: "landing",
            icon: "mdi-face",
            class: "btnProfile",
          },
        ];
      }
      return [
        {
          title: this.$t("menuItems.HOME"),
          link: "landing",
          icon: "mdi-home",
        },
        {
          title: this.$t("menuItems.ABOUT"),
          link: "about",
          icon: "mdi-help-circle-outline",
          class: "btnAbout",
        },
        {
          title: this.$t("menuItems.LOGIN"),
          link: "login",
          icon: "mdi-lock",
          class: "btnLogin",
        },
        {
          title: this.$t("menuItems.SIGNUP"),
          link: "signup",
          icon: "mdi-plus-circle-outline",
          class: "btnLogin",
        },
      ];
    },
  },
  methods: {
    userLogout() {
      this.$store.dispatch("userLogout");
    },
  },
  watch: {
    isDark() {
      this.$vuetify.theme.dark = this.isDark;
      localStorage.setItem("dark", this.isDark);
    },
  },
  created() {
    const dark = localStorage.getItem("dark");
    this.isDark = dark ? JSON.parse(dark) : false;
  },
};
</script>
<style>
.iconsList {
  height: 40px;
}
.innerAuth {
  height: 40px;
  font-size: 15px;
  font-weight: bolder;
}
.icons {
  color: red;
}
.dropDownB {
  width: 80px;
  height: 52px;
  padding: 15px 5px;
  color: black;
  display: flex;
  justify-content: space-between;
}
.dropDownS {
  width: 80%;
  height: 52px;
  padding: 15px 5px;
  color: black;
  font-weight: bold;
  display: flex;
  border-top: 1px solid black;
}
.dropDown {
  width: 23%;
  padding: 15px 5px;
  font-size: 14px;
  height: 50px;
  background-color: white;
  color: black;
  display: flex;
  justify-content: space-between;
  border-right: 1px solid #b5b5b5;
}
.test {
  height: 50px;
  width: 100%;
  background-color: white;
}
.appBar {
  height: 80px;
  background-color: #09b750;
  flex-direction: vertical;
  align-items: center;
}
.appBarRow {
  height: 60px;
  background-color: #b5b5b5;
}
.appbarBorder {
  border-top: 1px solid #b5b5b5;
}
</style>
