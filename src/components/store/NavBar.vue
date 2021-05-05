<template>
  <div>
    <v-app-bar dark flat :color="color">
      <v-spacer></v-spacer>
      <p class="text-h4 mt-2">My Kitchen Store</p>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-app-bar dense flat dark :color="color">
      <v-spacer></v-spacer>
      <v-btn :to="{ path: `/store/${id}/home` }" text class="mr-2">Home</v-btn>
      <v-btn :to="{ path: `/store/${id}/products` }" text class="mr-2"
        >Products</v-btn
      >
      <v-btn :to="{ path: `/store/${id}/company` }" text class="mr-2"
        >Company</v-btn
      >
      <v-btn :to="{ path: `/store/${id}/contacts` }" text>Contacts</v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    color: String,
    id: String,
  },
};
</script>

<style lang="scss" scoped></style>
