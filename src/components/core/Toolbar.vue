<template>
  <div class="pr-0 mr-0">
    <v-row style="background-color:#43DB80" class="ma-0">
      <v-col cols="2">
        <span>
          <v-app-bar-nav-icon
            class="hidden-md-and-up"
            @click="sidebar = !sidebar"
          ></v-app-bar-nav-icon>
        </span>
      </v-col>
      <v-col>
        <h2>{{ user.username }}</h2></v-col
      >
      <v-spacer></v-spacer>
      <v-col cols="2">
        <v-row class="mx-0">
          <v-btn class="ma-2" icon dark x-large>
            <v-icon>mdi-account</v-icon>
          </v-btn>
          <v-btn @click="userLogout" class="ma-2" icon dark x-large>
            <v-icon>mdi-door</v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
  components: {},
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
    ...mapGetters(["appTitle", "isTokenSet", "user"]),
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
