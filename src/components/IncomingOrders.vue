<template>
  <div>
    <v-data-table :headers="IOheaders" :items="orders" :items-per-page="7">
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
              disabled
              :items="['PENDING', 'COMPLETED', 'CANCELED']"
              v-model="order.status"
            ></v-select>
          </v-col>
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
      IOheaders: [
        { text: "ID", value: "id" },
        { text: "User", value: "username" },
        { text: "Total Price (in Birr)", value: "totalPrice" },
        { text: "Status", value: "status" },
        { text: "More", value: "action", sortable: false },
        { text: "Action", value: "accept", sortable: false },
      ],
    };
  },
  created() {
    this.$store.dispatch("incomingOrders");
  },
  methods: {
    acceptOrder(order) {
      this.$store.dispatch("pickupOrders", order);
    },
    moreTrue(order) {
      this.vis = true;
      this.order = this.allOrders.find((o) => o.id == order);
    },
  },
  computed: {
    // orders() {
    //   return this.$store.state.orders.incomingOrders;
    // },
    orders() {
      return this.$store.state.orders.incomingOrders.map((order) => {
        return {
          id: order.id,
          username: order.user.username,
          totalPrice: order.price,
          status: order.status,
        };
      });
    },
    allOrders() {
      return this.$store.state.orders.incomingOrders;
    },
    acceptedOrders() {
      return this.$store.state.orders.acceptedOrders;
    },
  },
};
</script>

<style></style>
