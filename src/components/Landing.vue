<template>
  <div>
    <Toolbar />
    <div class="ma-10">
      <v-row justify="center" class="ma-0">
        <v-col cols="12">
          <v-data-table :headers="headers" :items="dataO" :items-per-page="5">
            <template v-slot:[`item.status`]="{ item }">
              <v-chip label :color="getColor(item.status)" dark>
                {{ item.status }}
              </v-chip>
            </template>
            <template v-slot:[`item.action`]="{ item }">
              <v-btn icon @click="moreTrue(item.id)">
                <v-icon>
                  mdi-dots-vertical
                </v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-col>
        <v-bottom-navigation width="700" v-model="value">
          <v-btn @click="filter = 'completed'" value="completed">
            <span>Completed</span>

            <v-icon>mdi-check</v-icon>
          </v-btn>

          <v-btn @click="filter = 'pending'" value="pending">
            <span>Pending</span>

            <v-icon>mdi-clock</v-icon>
          </v-btn>

          <v-btn @click="filter = 'canceled'" value="canceled">
            <span>Canceled</span>

            <v-icon>mdi-cancel</v-icon>
          </v-btn>
        </v-bottom-navigation>
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
                :value="selectedProduct.id"
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
                :value="selectedProduct.productId"
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
                  Username : {{ selectedProduct.username }}
                </p>
                <p class="text-subtitle-2 mx-1 font-weight-bold mb-1 subTitle">
                  Phone Number : {{ selectedProduct.phone }}
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
                :value="selectedProduct.totalDistance"
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
                :value="selectedProduct.deliveryPrice"
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
                :value="selectedProduct.totalPrice"
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
              <v-select
                :items="['PENDING', 'COMPLETED', 'CANCELED']"
                v-model="status"
              ></v-select>
            </v-col>
            <v-col>
              <p class="text-subtitle-1 mx-1 font-weight-bold mb-1 subTitle">
                Reference Number
              </p>
              <v-text-field
                background-color="#ebe9e9"
                class="mb-0"
                height="50"
                solo
                flat
                v-model="reference"
              ></v-text-field
            ></v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row justify="center" class="ma-0">
            <v-btn @click="changeStatus" class="ma-5" color="primary"
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
    <ErrorMessage />
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
    this.$store.dispatch("getCompleted");
    this.$store.dispatch("getCanceled");
  },
  components: {
    Toolbar,
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
      headers: [
        {
          text: "Order ID",
          value: "id",
        },
        { text: "User", value: "username" },
        { text: "Product", value: "productId" },
        { text: "Amount", value: "price" },
        { text: "Total Distance (in km)", value: "totalDistance" },
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
          productId: Object.keys(JSON.parse(item.productIds)),
          amount: item.price,
          totalDistance: item.deliveryOption.totalDistance,
          deliveryPrice: item.deliveryOption.deliveryPrice,
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
            productId: Object.keys(JSON.parse(item.productIds)),
            amount: item.price,
            totalDistance: item.deliveryOption.totalDistance,
            deliveryPrice: item.deliveryOption.deliveryPrice,
            totalPrice: item.price,
            status: item.status,
          };
        });
        return ordersC.filter((item) => item.status == "COMPLETED");
      }
      if (this.filter == "canceled") {
        const ordersCa = this.$store.state.orders.canceled.map((item) => {
          return {
            id: item.id,
            username: item.user.username,
            phone: item.user.phone,
            productId: Object.keys(JSON.parse(item.productIds)),
            amount: item.price,
            totalDistance: item.deliveryOption.totalDistance,
            deliveryPrice: item.deliveryOption.deliveryPrice,
            totalPrice: item.price,
            status: item.status,
          };
        });
        return ordersCa.filter((item) => item.status == "CANCELED");
      }
      return orders.filter((item) => item.status == "PENDING");
    },
  },
  methods: {
    getColor(status) {
      if (status == "COMPLETED") return "green";
      else if (status == "PENDING") return "orange";
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
