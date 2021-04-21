<template>
  <div class="mx-auto" style="text-align:start; width:90%;">
    <p class="my-3 text-h5 font-weight-bold">New Product</p>
    <v-divider class="mb-5"></v-divider>
    <v-row justify="space-between">
      <v-col cols="12" md="4">
        <p class="mx-auto title text-h5">Basic</p>
        <p class="text-subtitle-1 font-weight-bold mb-1 subTitle">
          Product Name
        </p>
        <v-text-field
          background-color="#ebe9e9"
          class="mb-0"
          height="50"
          solo
          flat
        ></v-text-field>
        <p class="text-subtitle-1 font-weight-bold mb-1 subTitle">
          Subtitle
        </p>
        <v-text-field
          background-color="#ebe9e9"
          class="mb-0"
          height="50"
          solo
          flat
        ></v-text-field>
        <p class="text-subtitle-1 font-weight-bold mb-1 subTitle">
          Category
        </p>
        <v-select
          height="50"
          style="width:250px"
          background-color="#ebe9e9"
          class="mb-0"
          :items="['items', 'items', 'items']"
          solo
          flat
        ></v-select>
      </v-col>
      <v-col cols="12" md="4">
        <h1 class="mx-auto title mb-4">Product Detail</h1>
        <v-row>
          <v-col
            ><p class="text-subtitle-1 font-weight-bold mb-1 subTitle">
              Price
            </p>
            <v-text-field
              background-color="#ebe9e9"
              class="mb-0"
              height="50"
              solo
              flat
            ></v-text-field
          ></v-col>
          <v-col
            ><p class="text-subtitle-1 font-weight-bold mb-1 subTitle">
              Add discount
            </p>
            <v-text-field
              background-color="#ebe9e9"
              class="mb-0"
              height="50"
              solo
              flat
            ></v-text-field
          ></v-col>
        </v-row>
        <v-row class="mt-0">
          <v-col class="pt-0"
            ><p class="text-subtitle-1 font-weight-bold mb-1 subTitle">
              Color
            </p>
            <v-select
              background-color="#ebe9e9"
              class="mb-0"
              height="50"
              solo
              flat
            ></v-select
          ></v-col>
          <v-col class="pt-0"
            ><p class="text-subtitle-1 font-weight-bold mb-1 subTitle">
              Size
            </p>
            <v-select
              background-color="#ebe9e9"
              class="mb-0"
              height="50"
              solo
              flat
            ></v-select
          ></v-col>
        </v-row>
        <p class="text-subtitle-1 font-weight-bold mb-1 subTitle">
          Description
        </p>
        <v-text-field
          background-color="#ebe9e9"
          class="mb-0"
          height="50"
          solo
          flat
        ></v-text-field>
      </v-col>
      <v-col align-self="center" cols="12" sm="6" md="3">
        <v-card class="pa-0" color="#ebe9e9">
          <v-img class="ma-0" :src="imageUrl"></v-img>
        </v-card>
        <v-row justify="center" class="my-5">
          <v-btn color="blue-grey" class="ma-2 white--text" @click="onPickFile">
            Upload Image
            <v-icon right dark>
              mdi-cloud-upload
            </v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
    <input
      type="file"
      style="display: none"
      ref="fileInput"
      multiple
      accept="image/*"
      @change="onFilePicked"
    />
    <p class="mx-auto title text-h5">Selling Information</p>
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <p class="text-subtitle-1 font-weight-bold mb-1 subTitle">
          Amount( in stock )
        </p>
        <v-text-field
          background-color="#ebe9e9"
          class="mb-0"
          height="50"
          solo
          flat
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <p class="text-subtitle-1 font-weight-bold mb-1 subTitle">
          Reorder treashold
        </p>
        <v-text-field
          background-color="#ebe9e9"
          class="mb-0"
          height="50"
          solo
          flat
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-row class="mt-8" justify="center">
          <v-btn dark color="error" large class="mr-4">Cancel</v-btn>
          <v-btn dark color="#09b750" large class="ml-4">Publish</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: null,
      imageUrl:
        "https://cdn1.iconfinder.com/data/icons/facebook-ui/48/additional_icons-03-512.png",
    };
  },
  methods: {
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      console.log(filename);
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
      console.log(this.image);
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 10;
}
.subTitle {
  font-size: 10;
}
</style>
