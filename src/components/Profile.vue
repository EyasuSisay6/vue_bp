<template>
  <div>
    <p class="text-subtitle-1 font-weight-bold mb-1 subTitle">
      Email
    </p>
    <v-text-field
      background-color="#ebe9e9"
      class="mb-0"
      height="50"
      solo
      flat
      v-model="email"
      :value="userData.email"
    ></v-text-field>
    <p class="text-subtitle-1 font-weight-bold mb-1 subTitle">
      New Password
    </p>
    <v-text-field
      background-color="#ebe9e9"
      class="mb-0"
      height="50"
      solo
      flat
      type="password"
    ></v-text-field>
    <v-btn @click="updateUser" color="success" class="ma-2 white--text">
      Save
    </v-btn>
    <v-btn color="error" class="ma-2 white--text">
      Cancel
    </v-btn>
  </div>
</template>
<script>
import { gmapApi } from "vue2-google-maps";
export default {
  computed: {
    google: gmapApi,
  },
  data() {
    return {};
  },
};
</script>
