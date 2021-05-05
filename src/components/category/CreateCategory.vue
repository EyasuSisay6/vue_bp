<template>
  <div class="mx-auto" style="text-align:start; width:90%;">
    <p class="my-3 text-h5 font-weight-bold">New Category</p>
    <v-divider class="mb-5"></v-divider>
    <v-row justify="space-between">
      <v-col cols="12" md="5">
        <v-row>
          <v-col cols="12">
            <p class="text-subtitle-1 font-weight-bold mb-1 subTitle">
              Category Name
            </p>
            <v-text-field
              background-color="#ebe9e9"
              v-model="title"
              class="mb-0"
              height="50"
              solo
              flat
            ></v-text-field>
          </v-col>
        </v-row>
        <p class="text-subtitle-1 font-weight-bold mb-1 subTitle">
          Description
        </p>
        <v-textarea
          background-color="#ebe9e9"
          class="mb-0"
          height="200"
          solo
          flat
        ></v-textarea>
      </v-col>
      <v-col align-self="center" cols="12" md="4" sm="6">
        <v-card class="mx-auto backG" max-width="300" tile>
          <v-list class="backG" disabled>
            <v-subheader
              ><v-row class="mt-5 mr-2">
                <v-col cols="10">
                  <v-text-field
                    height="50"
                    placeholder="Sub-categories"
                    class="mb-0"
                    :items="['items', 'items', 'items']"
                    solo
                    flat
                  ></v-text-field>
                </v-col>
                <v-col cols="2">
                  <v-btn class="mt-1" fab dark small color="primary">
                    <v-icon dark>
                      mdi-plus
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row></v-subheader
            >
            <v-list-item-group v-model="selectedItem" color="primary">
              <v-list-item v-for="(item, i) in 4" :key="i">
                <v-list-item-content>
                  <v-list-item-title>Test</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon>mdi-close</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
        <v-row class="mt-5">
          <v-col cols="12">
            <v-row justify="center">
              <v-btn dark color="error" large class="mr-4">Cancel</v-btn>
              <v-btn @click="onSubmit()" dark color="#09b750" large class="ml-4"
                >Publish</v-btn
              >
            </v-row>
          </v-col>
        </v-row>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: null,
      title: "",
      showLoading: false,
      imageUrl:
        "https://cdn1.iconfinder.com/data/icons/facebook-ui/48/additional_icons-03-512.png",
    };
  },
  methods: {
    onSubmit() {
      console.log("Submitted");
      this.$store.commit("SHOW_LOADING", true);
      this.$store.commit("CREATE_CATEGORY", {
        image: this.imageUrl,
        title: this.title,
      });
      this.$store.commit("SHOW_LOADING", false);
    },
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
.backG {
  background-color: #ebe9e9;
}
</style>
