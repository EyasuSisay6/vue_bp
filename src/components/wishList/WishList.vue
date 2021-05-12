<template>
  <v-container class="mt-2">
    <v-row class="mt-5">
      <v-spacer></v-spacer>
      <v-col cols="12" md="8">
        <v-row justify="end">
          <v-col><h1 class="mx-auto text-h4 mb-4">Wish List</h1></v-col>
        </v-row>

        <v-data-table
          :headers="headers"
          :items="totalWishList"
          :items-per-page="3"
        >
          <template v-slot:[`item.image`]="{ item }">
            <v-img
              height="200"
              width="200"
              :src="`http://188.166.153.99/media/${item.image}`"
            ></v-img>
          </template>
          <template v-slot:[`item.action`]="{ item }">
            <v-btn @click="removeProduct(item.productId)" small color="error">
              <v-icon left dark>
                mdi-trash-can-outline
              </v-icon>
              {{ item.action }}Remove
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>
<script>
export default {
  computed: {
    totalWishList() {
      return this.$store.getters.totalWishList;
    },
  },
  data() {
    return {
      headers: [
        { text: "Image", value: "image" },
        {
          text: "Product ID",
          align: "start",
          sortable: false,
          value: "productId",
        },
        { text: "Product", value: "name" },
        { text: "Price", value: "price" },
        { text: "Action", value: "action" },
      ],
      search: "",
    };
  },
  methods: {
    getColor(status) {
      if (status == "Delivered") return "green";
      else if (status == "On going") return "orange";
      else return "red";
    },
    removeProduct(id) {
      this.$store.commit("REMOVE_PRODUCT_FROM_WISH_LIST", id);
    },
  },
};
</script>
