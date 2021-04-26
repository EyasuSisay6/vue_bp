<template>
  <v-app class="">
    <v-container fluid>
      <v-navigation-drawer v-model="drawer" absolute bottom temporary>
        <v-card elevation="0" class="pa-2">
          <h4>Store Near You</h4>
        </v-card>
        <div class="my-10" v-for="(s, i) in storeList" :key="i">
          <StoreCard :image="s.image" :title="s.title" :distance="s.distance" />
          <v-divider></v-divider>
        </div>
      </v-navigation-drawer>

      <v-row justify="center">
        <v-col cols="12" sm="12" md="3" class="text-left hidden-sm-and-down">
          <h1>Stores near you</h1>
          <v-card class="my-2" elevation="0">
            <v-text-field
              prepend-inner-icon="mdi-magnify"
              label="search store"
              outlined
              hide-details
            ></v-text-field>
          </v-card>

          <v-card class="my-2" elevation="0">
            <v-text-field
              prepend-inner-icon="mdi-map-marker"
              label="current location"
              outlined
              hide-details
              disabled
            ></v-text-field>
          </v-card>

          <v-card elevation="0" class="pa-2">
            <h4>Store Near You</h4>
          </v-card>

          <div class="my-10" v-for="(s, i) in storeList" :key="i">
            <StoreCard
              :image="s.image"
              :title="s.title"
              :distance="s.distance"
            />
            <v-divider></v-divider>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="9" class="my-10">
           <material-card :heading="heading" color="accent">
            <v-card-text>
              <v-sheet>
                <iframe
                  :src="`https://www.google.com/maps/embed?${iframe}`"
                  allowfullscreen
                  frameborder="0"
                  height="850"
                  style="border: 0"
                  width="100%"
                />
              </v-sheet>
            </v-card-text>
          </material-card>
        </v-col>
      </v-row>
      <NearYouBtn v-on:open-drawer="openDrawer" class="hidden-md-and-up" />
    </v-container>
  </v-app>
</template>

<script>
import StoreCard from "./StoreCard.vue";
import NearYouBtn from "@/components/storeFinder/NearYouBtn.vue";
export default {
  name: "map",
  components: {
    StoreCard,
    NearYouBtn,
  },
  data() {
    return {
      drawer: false,
      coordinates: {
        lat: 0,
        lng: 0,
      },
      storeList: [
        {
          image:
            "http://45.76.97.89:3000/uploads/51a0ff71f98649af8b17284ed14f955d.jpg",
          title: "Lorem ipsum dolor sit amet",
          distance: 12,
        },
        {
          image:
            "http://45.76.97.89:3000/uploads/51a0ff71f98649af8b17284ed14f955d.jpg",
          title: "Lorem ipsum dolor sit amet",
          distance: 12,
        },
        {
          image:
            "http://45.76.97.89:3000/uploads/51a0ff71f98649af8b17284ed14f955d.jpg",
          title: "Lorem ipsum dolor sit amet",
          distance: 12,
        },
        {
          image:
            "http://45.76.97.89:3000/uploads/51a0ff71f98649af8b17284ed14f955d.jpg",
          title: "Lorem ipsum dolor sit amet",
          distance: 12,
        },
        {
          image:
            "http://45.76.97.89:3000/uploads/51a0ff71f98649af8b17284ed14f955d.jpg",
          title: "Lorem ipsum dolor sit amet",
          distance: 12,
        },
        {
          image:
            "http://45.76.97.89:3000/uploads/51a0ff71f98649af8b17284ed14f955d.jpg",
          title: "Lorem ipsum dolor sit amet",
          distance: 12,
        },
        {
          image:
            "http://45.76.97.89:3000/uploads/51a0ff71f98649af8b17284ed14f955d.jpg",
          title: "Lorem ipsum dolor sit amet",
          distance: 12,
        },
      ],
      maps: [
        {
          heading: "Satellite Map",
          iframe:
            "pb=!1m18!1m12!1m3!1d26356315.701909266!2d-113.65984645545673!3d36.25591957613731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2sus!4v1566158729223!5m2!1sen!2sus",
        },
      ],
    };
  },
  methods: {
    openDrawer() {
      this.drawer = !this.drawer;
    },
  },
  created() {
    //get user's coordinates from browser's coordinates
    this.$getLocation({})
      .then((coordinates) => {
        this.coordinates = coordinates;
      })
      .catch((error) => alert(error));
  },
};
</script>