<template>
  <div>
    <v-data-table
      :headers="IOheaders"
      :items="
        value === 'pending'
          ? pending
          : value === 'completed'
          ? completed
          : canceled
      "
      :items-per-page="7"
    >
      <template v-slot:[`item.action`]="{ item }">
        <v-btn icon @click="moreTrue(item.id)">
          <v-icon>
            mdi-dots-vertical
          </v-icon>
        </v-btn>
      </template>
      <template v-slot:[`item.accept`]="{ item }">
        <v-btn color="success" @click="acceptOrder(item.id)">
          Accept
        </v-btn>
      </template>
    </v-data-table>
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
    <v-dialog
      v-model="vis"
      style="background-color:red"
      :overlay-opacity="0.8"
      width="600"
      transition="dialog-bottom-transition"
    >
      <v-card v-if="!!order">
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
              :value="order.id"
              disabled
            ></v-text-field
          ></v-col>
          <v-col>
            <p class="text-subtitle-1 mx-1 font-weight-bold mb-1 subTitle">
              Product
            </p>
            <p v-for="(p, i) in order.orders" :key="p.id">
              {{ i + 1 }}: {{ p.product.name }} - Quantity:{{ p.quantity }}
            </p>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="ma-0">
          <v-col>
            <div background-color="#ebe9e9">
              <p class="text-subtitle-1 mx-1 font-weight-bold mb-1 subTitle">
                User Information
              </p>
              <p class="text-subtitle-2 mx-1 font-weight-bold mb-1 subTitle">
                Username : {{ order.user.username }}
              </p>
              <p class="text-subtitle-2 mx-1 font-weight-bold mb-1 subTitle">
                Phone Number : {{ order.user.phone }}
              </p>
            </div>
          </v-col>
          <v-col>
            <div background-color="#ebe9e9">
              <p class="text-subtitle-1 mx-1 font-weight-bold mb-1 subTitle">
                Vendors Information
              </p>
              <p v-for="p in order.orders" :key="p.id">
                {{ p.product.vendor.storeName }}: {{ p.product.vendor.phone }}
              </p>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="ma-0">
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
              :value="order.price"
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
              :items="['pending', 'completed', 'canceled']"
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
          <v-btn @click="vis = false" class="ma-5" color="error">Cancel</v-btn>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vis: false,
      order: null,
      value: "pending",
      filter: "pending",
      reference: "",
      status: "",
      id: "",
      IOheaders: [
        { text: "ID", value: "id" },
        { text: "User", value: "username" },
        { text: "Total Price (in Birr)", value: "totalPrice" },
        { text: "Status", value: "status" },
        { text: "More", value: "action", sortable: false },
      ],
    };
  },
  created() {
    this.$store.dispatch("getPending");
    this.$store.dispatch("getCompleted");
    this.$store.dispatch("getCanceled");
  },
  methods: {
    acceptOrder(order) {
      this.$store.dispatch("pickupOrders", order);
    },
    moreTrue(order) {
      this.vis = true;
      this.value === "pending"
        ? (this.order = this.allPendingOrders.find((o) => o.id == order))
        : this.value === "completed"
        ? (this.order = this.allCompletedOrders.find((o) => o.id == order))
        : (this.order = this.allCanceledOrders.find((o) => o.id == order));
    },
    changeStatus() {
      this.$store.dispatch("changeStatus", {
        id: this.order.id,
        reference: this.reference,
        status: this.status,
      });
      this.vis = false;
    },
  },
  computed: {
    canceled() {
      return this.$store.state.orders.canceled.map((order) => {
        return {
          id: order.id,
          username: order.user.username,
          totalPrice: order.price,
          status: order.status,
        };
      });
    },
    pending() {
      return this.$store.state.orders.pending.map((order) => {
        return {
          id: order.id,
          username: order.user.username,
          totalPrice: order.price,
          status: order.status,
        };
      });
    },
    completed() {
      return this.$store.state.orders.completed.map((order) => {
        return {
          id: order.id,
          username: order.user.username,
          totalPrice: order.price,
          status: order.status,
        };
      });
    },
    allCanceledOrders() {
      return this.$store.state.orders.canceled;
    },
    allPendingOrders() {
      return this.$store.state.orders.pending;
    },
    allCompletedOrders() {
      return this.$store.state.orders.completed;
    },
  },
};
</script>

<style></style>
