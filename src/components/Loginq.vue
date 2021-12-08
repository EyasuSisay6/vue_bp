<template>
  <div class="login">
    <v-container fluid fill-height class="loginOverlay">
      <v-layout flex align-center justify-center>
        <v-flex xs12 sm4>
          <v-card>
            <v-card-title>
              <h4>Delivery account sign in</h4>
            </v-card-title>
            <v-card-text class="pt-4">
              <v-form ref="form">
                <v-text-field
                  label="Username"
                  v-model="email"
                  type="email"
                  required
                  append-icon="fa-info-circle"
                ></v-text-field>
                <v-text-field
                  label="Password"
                  v-model="password"
                  append-icon="fa-info-circle"
                  type="password"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="submit" class="green white--text">Sign in</v-btn>
            </v-card-actions>
          </v-card>
          <v-card>
            <v-card-actions>
              <v-row>
                <span style="font-size:16px" class="row-item border"
                  >Delivery</span
                >
                <a
                  style="font-size:16px"
                  class="link-color row-item border"
                  href="https://ashewa.com/sellOnAshewa"
                  >About</a
                >
                <a
                  style="font-size:16px"
                  class="link-color row-item"
                  href="https://retailer.ashewa.com/ship "
                  >Shipping Policy</a
                >
              </v-row>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <ErrorMessage />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    ...mapActions(["userLogin"]),
    async submit() {
      await this.userLogin({
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
.login {
  height: 100vh;
}
h4 {
  font-size: 1em !important;
  padding: 1em;
  color: black;
}
.v-card {
  text-align: center;
  margin: 1em;
}
.v-card__title {
  justify-content: center;
}
.v-btn {
  width: 100%;
}
.link-color {
  color: #d38841;
  text-decoration: none;
}
.v-card {
  padding: 1em;
}
.v-card__actions {
  display: block;
}
.green {
  margin-bottom: 1em;
}
.create {
  text-transform: capitalize;
  margin-bottom: 1em;
}
.row {
  font-size: 0.7em;
  justify-content: center;
}
.row-item {
  padding: 0 0.7em;
}
.border {
  border-right: 1px solid black;
}
</style>
