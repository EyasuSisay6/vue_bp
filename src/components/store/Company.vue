<template>
  <div>
    <NavBar :id="id" color="#232F3E"></NavBar>
    Company
  </div>
</template>

<script>
import NavBar from "./NavBar";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style lang="scss" scoped></style>
