<template>
  <div>
    <v-row>
      <v-col class="pr-0" cols="3">
        <v-card class="mt-1 mx-0" elevation="0" height="450px">
          <v-navigation-drawer absolute>
            <template v-slot:prepend>
              <v-list-item two-line>
                <v-list-item-avatar>
                  <img src="https://randomuser.me/api/portraits/men/30.jpg" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title style="font-weight:bolder"
                    >testashewa@test.com</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </template>

            <v-divider></v-divider>

            <v-list dense>
              <v-list-item
                @click="title = item.title"
                v-for="item in items"
                :key="item.title"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content class="text-start">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-col>
      <v-col>
        <v-row>
          <Notifications title="Notifications" v-if="title == 'Notifications'"
            >Notification</Notifications
          >
          <div v-if="title == 'Invoices'">Invoices</div>
          <div v-if="title == 'Address'">
            <v-row class="mx-2 mt-3" justify="center">
              <v-col cols="12">
                <GmapMap
                  :center="{ lat: 10, lng: 10 }"
                  :zoom="7"
                  style="width: 600px; height: 300px"
                >
                </GmapMap
              ></v-col>
            </v-row>
            <v-divider class="my-5"></v-divider>
            <v-row class="ml-2">
              <v-spacer></v-spacer>
              <p class="text-h6">Connect with us</p>
              <v-spacer></v-spacer>
            </v-row>
            <v-row class="ml-4">
              <v-spacer></v-spacer>
              <v-btn icon tile large color="#4867AA">
                <v-icon large>mdi-facebook</v-icon></v-btn
              >
              <v-btn icon tile large color="#F1493D">
                <v-icon large>mdi-email</v-icon></v-btn
              >
              <v-btn icon tile large color="#5DA9DD">
                <v-icon large>mdi-twitter</v-icon></v-btn
              >
              <v-spacer></v-spacer>
            </v-row>
          </div>
          <WishList
            title="Recent Viewed Products"
            col="11"
            v-if="title == 'Recent Viewed Products'"
          >
            Recent Viewed Products
          </WishList>
          <WishList col="11" v-if="title == 'Wishlist'"></WishList>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import WishList from "./wishList/WishList";
import Notifications from "./Orders";
import { gmapApi } from "vue2-google-maps";
export default {
  computed: {
    google: gmapApi,
  },
  components: {
    WishList,
    Notifications,
  },
  data() {
    return {
      items: [
        { title: "Notifications", icon: "mdi-bell" },
        { title: "Invoices", icon: "mdi-message-outline" },
        { title: "Address", icon: "mdi-pin" },
        { title: "Recent Viewed Products", icon: "mdi-clock-outline" },
        { title: "Wishlist", icon: "mdi-heart-outline" },
        { title: "Logout", icon: "mdi-logout" },
      ],
      title: "Notifications",
    };
  },
};
</script>
