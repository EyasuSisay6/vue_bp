<template>
  <div id="app">
    <v-container class="container" id="#details">
      <v-row justify="start" class="my-5">
        <v-col cols="">
          <h3>Details</h3>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12">
          <v-row justify="center">
            <v-col cols="12" md="4" sm="10">
              <v-container v-for="detail in data" :key="detail.property">
                <v-row justify="center">
                  <v-col cols="6" class="my-3">
                    <v-row justify="start">
                      {{ detail.property }}
                    </v-row>
                  </v-col>
                  <v-col cols="6" class="my-3">
                    <v-row justify="start">
                      {{ detail.value_ }}
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>

            <v-col cols="12" md="4" sm="10" align-self="center">
              <v-img
                :src="require('../../assets/ford.webp')"
                max-height="300"
                max-width="500"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          property: "Model: ",
          value_: "2015 - 2019",
        },
        {
          property: "Body Style: ",
          value_: "Pickup",
        },
        {
          property: "Trim: ",
          value_: "Revo and Normal",
        },
        {
          property: "Steering Position: ",
          value_: "Right/Left Hand Steering",
        },
        {
          property: "Drive Train: ",
          value_: "AWD, FWD 4x4",
        },
        {
          property: "Mechanical Condition: ",
          value_: "Excellent",
        },
        {
          property: "Mileage: ",
          value_: "5,000 to 12,500 KM",
        },
        {
          property: "Transmission: ",
          value_: "Manual, Automatic",
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>