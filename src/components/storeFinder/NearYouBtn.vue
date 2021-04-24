<template>
  <v-row class="hidden-md-and-above">
    <v-btn text class="btn hidden-md-and-above" color="primary" @click="$emit('open-drawer')">
      <span>Near You</span>
      <v-icon>mdi-near-me</v-icon>
    </v-btn>

    <!-- <v-btn> -->
      <!-- <v-icon>mdi-map-marker</v-icon>
    </v-btn> -->
  </v-row>
</template>

<script>
export default {
    data () {
        return {
            nearYouDrawer: false
        }
    }
}
</script>

<style scoped>
.btn {
    text-transform: none;
}
</style>