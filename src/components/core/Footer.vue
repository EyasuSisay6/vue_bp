<template>
  <div>
    <v-footer>
      <v-spacer></v-spacer>
      <div>
        Ashewa Delivery
      </div>
      <v-spacer></v-spacer>
    </v-footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Footer",
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      courses: [
        "Digital Marketing",
        "Web Designer",
        "MLM Trainings",
        "Personal Development",
        "Project Management",
      ],
      about: ["Ashewa story", "Community", "Blog", "Job Vacancy", "Contact"],
      ec: ["Ashewa story", "Community", "Blog", "Job Vacancy", "Contact"],
      grow: ["Ashewa story", "Community", "Blog", "Job Vacancy", "Contact"],
    };
  },
  computed: {
    ...mapGetters(["totalWishList", "totalCartList"]),
    appVersion() {
      return this.$store.getters.appVersion;
    },
    totalWishList() {
      return this.$store.getters.totalWishList;
    },
    totalCartList() {
      return this.$store.getters.totalCartList;
    },
  },
};
</script>
<style scoped></style>
