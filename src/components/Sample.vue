<template>
  <div>
    <Toolbar />
    <div class="ma-10">
      <v-row justify="center" class="ma-0">
        <v-col cols="12">
          <v-data-table
            :headers="headers"
            :items="sampleData"
            :items-per-page="5"
          >
            <template v-slot:[`item.status`]="{ item }">
              <v-chip label :color="getColor(item.status)" dark>
                {{ item.status }}
              </v-chip>
            </template>
            <template v-slot:[`item.action`]="{}">
              <v-btn icon @click="vis = true">
                <v-icon>
                  mdi-dots-vertical
                </v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-col>
        <v-bottom-navigation width="700" v-model="value">
          <v-btn value="completed">
            <span>Completed</span>

            <v-icon>mdi-check</v-icon>
          </v-btn>

          <v-btn value="pending">
            <span>Pending</span>

            <v-icon>mdi-clock</v-icon>
          </v-btn>

          <v-btn value="delayed">
            <span>Delayed</span>

            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
          <v-btn value="canceled">
            <span>Canceled</span>

            <v-icon>mdi-cancel</v-icon>
          </v-btn>
        </v-bottom-navigation>
        {{ dataO }}
      </v-row>
      <v-dialog
        persistent
        v-model="vis"
        style="background-color:red"
        :overlay-opacity="0.8"
        width="600"
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-row class="ma-0">
            <v-col>
              <p class="text-subtitle-1 mx-1 font-weight-bold mb-1 subTitle">
                Order Id
              </p>
              <v-text-field
                background-color="#ebe9e9"
                class="mb-0"
                height="50"
                solo
                flat
                value="Test"
                disabled
              ></v-text-field
            ></v-col>
            <v-col>
              <p class="text-subtitle-1 mx-1 font-weight-bold mb-1 subTitle">
                Product
              </p>
              <v-text-field
                background-color="#ebe9e9"
                class="mb-0"
                height="50"
                solo
                flat
                value="Test"
                disabled
              ></v-text-field
            ></v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="ma-0">
            <v-col>
              <div background-color="#ebe9e9">
                <p class="text-subtitle-1 mx-1 font-weight-bold mb-1 subTitle">
                  User Information
                </p>
                <p class="text-subtitle-2 mx-1 font-weight-bold mb-1 subTitle">
                  Username :
                </p>
                <p class="text-subtitle-2 mx-1 font-weight-bold mb-1 subTitle">
                  Phone Number :
                </p>
              </div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="ma-0">
            <v-col>
              <p class="text-subtitle-1 mx-1 font-weight-bold mb-1 subTitle">
                Total Distance
              </p>
              <v-text-field
                background-color="#ebe9e9"
                class="mb-0"
                height="50"
                solo
                flat
                value="Test"
                disabled
              ></v-text-field
            ></v-col>
            <v-col>
              <p class="text-subtitle-1 mx-1 font-weight-bold mb-1 subTitle">
                Delivery Price
              </p>
              <v-text-field
                background-color="#ebe9e9"
                class="mb-0"
                height="50"
                solo
                flat
                value="Test"
                disabled
              ></v-text-field
            ></v-col>
            <v-col>
              <p class="text-subtitle-1 mx-1 font-weight-bold mb-1 subTitle">
                Total Price
              </p>
              <v-text-field
                background-color="#ebe9e9"
                class="mb-0"
                height="50"
                solo
                flat
                value="Test"
                disabled
              ></v-text-field
            ></v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="ma-0">
            <v-col cols="6">
              <p class="text-subtitle-1 mx-1 font-weight-bold mb-1 subTitle">
                Status
              </p>
              <v-select :items="['Delivered', 'Pending', 'Failed']"></v-select>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row justify="center" class="ma-0">
            <v-btn @click="vis = false" class="ma-5" color="primary"
              >Apply</v-btn
            >
            <v-btn @click="vis = false" class="ma-5" color="error"
              >Cancel</v-btn
            >
          </v-row>
        </v-card>
      </v-dialog>
      <v-dialog
        persistent
        v-model="visb"
        style="background-color:red"
        :overlay-opacity="0.8"
        width="600"
        transition="dialog-bottom-transition"
      >
        <v-card class="pa-5">
          <p class="text-subtitle-1 font-weight-bold mb-1 subTitle">
            Email
          </p>
          <v-text-field
            background-color="#ebe9e9"
            class="mb-0"
            height="50"
            solo
            flat
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
          <v-btn @click="visb = false" color="success" class="ma-2 white--text">
            Save
          </v-btn>
          <v-btn @click="visb = false" color="error" class="ma-2 white--text">
            Cancel
          </v-btn>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script>
import Toolbar from "./core/Toolbar.vue";
import { mapGetters } from "vuex";
export default {
  created() {
    if (!this.isTokenSet) {
      this.$router.push("/login");
    }
    this.$store.dispatch("getPending");
    this.$store.dispatch("getCanceled");
    this.$store.dispatch("getDelayed");
    this.$store.dispatch("getCompleted");
  },
  components: {
    Toolbar,
  },
  data() {
    return {
      vis: false,
      visb: false,
      value: "pending",
      headers: [
        {
          text: "Order ID",
          value: "orderId",
        },
        { text: "User", value: "user" },
        { text: "Product", value: "product" },
        { text: "Amount", value: "amount" },
        { text: "Total Distance (in km)", value: "totalDistance" },
        { text: "Delivery Price (in Birr)", value: "deliveryPrice" },
        { text: "Total Price (in Birr)", value: "totalPrice" },
        { text: "Status", value: "status" },
        { text: "More", value: "action", sortable: false },
      ],
      d: [
        {
          orderId: "123-456-789",
          user: "Jhon Doe",
          product: "Samsung Galaxy S10",
          amount: 1,
          totalDistance: 50,
          deliveryPrice: 70,
          totalPrice: 500,
          status: "Delivered",
        },
        {
          orderId: "123-456-789",
          user: "Jhon Doe",
          product: "Samsung Galaxy S10",
          amount: 1,
          totalDistance: 50,
          deliveryPrice: 70,
          totalPrice: 500,
          status: "Delivered",
        },
        {
          orderId: "123-456-789",
          user: "Jhon Doe",
          product: "Samsung Galaxy S10",
          amount: 1,
          totalDistance: 50,
          deliveryPrice: 70,
          totalPrice: 500,
          status: "Delivered",
        },
      ],
      p: [
        {
          orderId: "123-456-789",
          user: "Jhon Doe",
          product: "Samsung Galaxy S10",
          amount: 1,
          totalDistance: 50,
          deliveryPrice: 70,
          totalPrice: 500,
          status: "Pending",
        },
        {
          orderId: "123-456-789",
          user: "Jhon Doe",
          product: "Samsung Galaxy S10",
          amount: 1,
          totalDistance: 50,
          deliveryPrice: 70,
          totalPrice: 500,
          status: "Pending",
        },
        {
          orderId: "123-456-789",
          user: "Jhon Doe",
          product: "Samsung Galaxy S10",
          amount: 1,
          totalDistance: 50,
          deliveryPrice: 70,
          totalPrice: 500,
          status: "Pending",
        },
      ],
      f: [
        {
          orderId: "123-456-789",
          user: "Jhon Doe",
          product: "Samsung Galaxy S10",
          amount: 1,
          totalDistance: 50,
          deliveryPrice: 70,
          totalPrice: 500,
          status: "Failed",
        },
        {
          orderId: "123-456-789",
          user: "Jhon Doe",
          product: "Samsung Galaxy S10",
          amount: 1,
          totalDistance: 50,
          deliveryPrice: 70,
          totalPrice: 500,
          status: "Failed",
        },
        {
          orderId: "123-456-789",
          user: "Jhon Doe",
          product: "Samsung Galaxy S10",
          amount: 1,
          totalDistance: 50,
          deliveryPrice: 70,
          totalPrice: 500,
          status: "Failed",
        },
      ],
      de: [
        {
          orderId: "123-456-789",
          user: "Jhon Doe",
          product: "Samsung Galaxy S10",
          amount: 1,
          totalDistance: 50,
          deliveryPrice: 70,
          totalPrice: 500,
          status: "Delayed",
        },
        {
          orderId: "123-456-789",
          user: "Jhon Doe",
          product: "Samsung Galaxy S10",
          amount: 1,
          totalDistance: 50,
          deliveryPrice: 70,
          totalPrice: 500,
          status: "Delayed",
        },
        {
          orderId: "123-456-789",
          user: "Jhon Doe",
          product: "Samsung Galaxy S10",
          amount: 1,
          totalDistance: 50,
          deliveryPrice: 70,
          totalPrice: 500,
          status: "Delayed",
        },
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
      if (this.value == "completed") {
        return this.$store.state.orders.completed;
      }
      if (this.value == "delayed") {
        return this.$store.state.orders.delayed;
      }
      if (this.value == "canceled") {
        return this.$store.state.orders.canceled;
      }
      return this.$store.state.orders.pending;
    },
  },
  methods: {
    getColor(status) {
      if (status == "Delivered") return "green";
      else if (status == "Pending") return "orange";
      else if (status == "Delayed") return "yellow";
      else return "red";
    },
    getCompleted() {
      this.$store.dispatch("getCompleted");
    },
    getCanceled() {
      this.$store.dispatch("getCanceled");
    },
    getDelivered() {
      this.$store.dispatch("getDelivered");
    },
    getFailed() {
      this.$store.dispatch("getFailed");
    },
  },
};
</script>
