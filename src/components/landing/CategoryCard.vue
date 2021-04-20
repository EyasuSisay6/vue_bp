<template>
  <div class="card">
    <v-card elevation="0" width="200" class="mx-auto">
      <v-img :src="image" width="150" class="mx-auto"></v-img>
      <p class="text-center overline pt-2 mb-0">{{ title }}</p>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  border: 1px solid grey;
  padding: 25px;
}
</style>
