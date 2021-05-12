<template>
  <v-app>
    <Toolbar />
    <v-main class="text-center">
      <loading />
      <v-container
        :class="$vuetify.theme.dark ? 'darkB' : 'lightB'"
        class="pa-0"
        fluid
      >
        <transition
          :class="$vuetify.theme.dark ? 'darkB' : 'lightB'"
          name="fade"
          mode="out-in"
        >
          <router-view :class="$vuetify.theme.dark ? 'darkB' : 'lightB'" />
        </transition>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Toolbar from "@/components/core/Toolbar.vue";
import Loading from "@/components/core/Loading.vue";
import Footer from "@/components/core/Footer.vue";

export default {
  name: "App",
  metaInfo() {
    return {
      title: this.appTitle,
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        { name: "msapplication-TileColor", content: "#ffc40d" },
        { name: "theme-color", content: "#ffffff" },
        {
          name: "apple-mobile-web-app-title",
          content: this.appTitle,
        },
        { name: "application-name", content: this.appTitle },
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
    Toolbar,
    Loading,
    Footer,
  },
  computed: {
    appTitle() {
      return this.$store.getters.appTitle;
    },
  },
  created() {
    this.parentCats();
    this.getAllProducts();
  },
  methods: {
    async getAllProducts() {
      await this.$store.dispatch("getAllProducts", { page: 1, pageSize: 5 });
    },
    async parentCats() {
      this.$store.dispatch("parentCats");
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.darkB {
  background-color: #121212;
}
.lightB {
  background-color: white;
}
</style>
