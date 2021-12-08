<template>
  <div>
    <Toolbar />
    <v-row class="ma-0 my-5">
      <v-col cols="12" md="6">
        <IncomingOrders></IncomingOrders>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="12" md="6">
        <AcceptedOrders></AcceptedOrders>
      </v-col>
    </v-row>

    <ErrorMessage />
  </div>
</template>
<script>
import Toolbar from "./core/Toolbar.vue";
import { mapGetters } from "vuex";
import IncomingOrders from "./IncomingOrders.vue";
import AcceptedOrders from "./AcceptedOrders.vue";
export default {
  created() {
    if (!this.isTokenSet) {
      this.$router.push("/login");
    }
  },
  components: {
    Toolbar,
    IncomingOrders,
    AcceptedOrders,
  },
  data() {
    return {
      vis: false,
      visb: false,
      filter: "pending",
      selected: 0,
      status: "",
      reference: "",
      selectedProduct: {},
      value: "pending",
      IOheaders: [
        { text: "User", value: "username" },
        { text: "Vendor", value: "vendor" },
        { text: "Total Price (in Birr)", value: "totalPrice" },
        { text: "Status", value: "status" },
        { text: "More", value: "action", sortable: false },
        { text: "Action", value: "accept", sortable: false },
      ],
      headers: [
        {
          text: "Order ID",
          value: "id",
        },
        { text: "User", value: "username" },
        { text: "Vendors", value: "vendors" },
        { text: "Delivery Price (in Birr)", value: "deliveryPrice" },
        { text: "Total Price (in Birr)", value: "totalPrice" },
        { text: "Status", value: "status" },
        { text: "More", value: "action", sortable: false },
      ],
    };
  },
  computed: {
    ...mapGetters(["isTokenSet", "user"]),
    sampleData() {
      if (this.value == "completed") {
        return this.d;
      }
      if (this.value == "delayed") {
        return this.de;
      }
      if (this.value == "canceled") {
        return this.f;
      }
      return this.p;
    },
    dataO() {
      const orders = this.$store.state.orders.orders.map((item) => {
        return {
          id: item.id,
          username: item.user.username,
          phone: item.user.phone,
          products: item.orders.product,
          deliveryPrice: item.deliveryOption.provider.totalPrice,
          vendors: item.orders.product.vendor,
          totalPrice: item.price,
          status: item.status,
        };
      });
      if (this.filter == "completed") {
        const ordersC = this.$store.state.orders.completed.map((item) => {
          return {
            id: item.id,
            username: item.user.username,
            phone: item.user.phone,
            products: item.orders.product,
            deliveryPrice: item.deliveryOption.provider.totalPrice,
            vendors: item.orders.product.vendor,
            totalPrice: item.price,
            status: item.status,
          };
        });
        return ordersC.filter((item) => item.status == "completed");
      }
      if (this.filter == "canceled") {
        const ordersCa = this.$store.state.orders.canceled.map((item) => {
          return {
            id: item.id,
            username: item.user.username,
            phone: item.user.phone,
            products: item.orders.product,
            deliveryPrice: item.deliveryOption.provider.totalPrice,
            vendors: item.orders.product.vendor,
            totalPrice: item.price,
            status: item.status,
          };
        });
        return ordersCa.filter((item) => item.status == "canceled");
      }
      return orders.filter((item) => item.status == "pending");
    },
  },
  methods: {
    getColor(status) {
      if (status == "completed") return "green";
      else if (status == "pending") return "orange";
      else return "red";
    },
    changeStatus() {
      this.$store.dispatch("changeStatus", {
        id: this.selectedProduct.id,
        reference: this.reference,
        status:
          this.status == "COMPLETED"
            ? "completed"
            : this.status == "CANCELED"
            ? "canceled"
            : "pending",
      });
      this.visb = false;
    },
    getCompleted() {
      this.$store.dispatch("getCompleted");
    },
    getCanceled() {
      this.$store.dispatch("getCanceled");
    },
    moreTrue(i) {
      this.vis = true;
      this.selected = i;
      this.selectedProduct = this.dataO.find((item) => item.id == i);
      this.status = this.selectedProduct.status;
    },
  },
};
</script>
