<template>
  <div>
    <v-card elevation="0">
      <v-row>
        <v-col cols="3">
          <v-avatar class="ml-4" :height="height" :width="width">
            <v-img :src="image" :height="height"></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="9" class="text-left">
          <h4>
            {{ title }}
          </h4>
          <span> {{ distance }} Km away </span>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      default: 60,
    },
    height: {
      type: Number,
      default: 60,
    },
  },
};
</script>