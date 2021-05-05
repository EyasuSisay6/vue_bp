<template>
  <div>
    <NavBar :id="id" color="#232F3E"></NavBar>
    <v-row class="mx-2 mt-3" justify="center">
      <v-col cols="12" lg="6" md="12">
        <GmapMap
          :center="{ lat: 10, lng: 10 }"
          :zoom="7"
          style="width: 600px; height: 300px"
        >
        </GmapMap
      ></v-col>
      <v-divider vertical></v-divider>
      <v-col cols="12" lg="2" md="12">
        <v-row class="ml-2"><p class="text-h6">Phone Numbers</p></v-row>
        <v-row class="ml-2 mb-4">
          <div>
            <li>251-911-2334-34</li>
            <li>251-911-2334-34</li>
            <li>251-911-2334-34</li>
            <li>251-911-2334-34</li>
          </div>
        </v-row>
        <v-row class="ml-2"><p class="text-h6">Connect with us</p></v-row>
        <v-row class="ml-4">
          <v-btn icon tile large color="#4867AA">
            <v-icon large>mdi-facebook</v-icon></v-btn
          >
          <v-btn icon tile large color="#F1493D">
            <v-icon large>mdi-email</v-icon></v-btn
          >
          <v-btn icon tile large color="#5DA9DD">
            <v-icon large>mdi-twitter</v-icon></v-btn
          >
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import { gmapApi } from "vue2-google-maps";
export default {
  computed: {
    google: gmapApi,
  },
  components: {
    NavBar,
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style lang="scss" scoped></style>
