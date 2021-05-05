<template>
  <vue-countdown
    :time="2 * 24 * 60 * 60 * 1000"
    v-slot="{ hours, minutes, seconds }"
  >
    <v-chip class="ml-5 text-h6" dark label color="green"
      >End in:{{ "  " }}{{ hours }}:{{ minutes }}:{{ seconds }}</v-chip
    >
  </vue-countdown>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
