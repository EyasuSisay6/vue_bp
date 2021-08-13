<template>
  <v-app>
    <v-main
      :style="
        $vuetify.theme.dark
          ? 'background-color:black'
          : 'background-color:white'
      "
      class="text-center"
    >
      <loading />
      <v-container class="pa-0" fluid>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
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
        {
          httpEquiv: "Content-Security-Policy",
          content: "upgrade-insecure-requests",
        },
      ],
    };
  },
  components: {
    Loading,
    Footer,
  },
  computed: {
    appTitle() {
      return this.$store.getters.appTitle;
    },
  },
  created() {},
  methods: {},
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
