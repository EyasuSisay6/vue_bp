<template>
  <v-container style="background-color:white" fluid class="mb-3">
    <v-layout row wrap class="mx-10">
      <Heading :title="$t('signup.TITLE')" />
      <v-flex xs12 sm6 offset-sm3>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(submit)">
            <v-layout column>
              <v-flex>
                <ValidationProvider rules="required|email" v-slot="{ errors }">
                  <v-text-field
                    id="email"
                    name="email"
                    type="email"
                    :label="$t('signup.EMAIL')"
                    v-model="email"
                    :error="errors.length > 0"
                    :error-messages="errors[0]"
                    autocomplete="off"
                  ></v-text-field>
                </ValidationProvider>
              </v-flex>
              <v-flex>
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <v-text-field
                    id="userName"
                    name="userName"
                    label="Name"
                    v-model="userName"
                    :error="errors.length > 0"
                    :error-messages="errors[0]"
                    autocomplete="off"
                  ></v-text-field>
                </ValidationProvider>
              </v-flex>
              <v-flex>
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <v-select
                    id="deliveryType"
                    name="deliveryType"
                    label="Delivery Type"
                    :items="[
                      'EMS',
                      'DHL',
                      'CASH ON DELIVERY',
                      'RIDE DELIVERY',
                      'MOTER CYCLE',
                      'PHYSICAL PICK',
                      'BUS',
                    ]"
                    v-model="deliveryType"
                    :error="errors.length > 0"
                    :error-messages="errors[0]"
                    autocomplete="off"
                  ></v-select>
                </ValidationProvider>
              </v-flex>
              <v-flex>
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <v-text-field
                    id="address"
                    name="address"
                    label="Address"
                    v-model="address"
                    :error="errors.length > 0"
                    :error-messages="errors[0]"
                    autocomplete="off"
                  ></v-text-field>
                </ValidationProvider>
              </v-flex>
              <v-flex>
                <VuePhoneNumberInput
                  default-country-code="ET"
                  v-model="yourValue"
                />
              </v-flex>
              <v-flex>
                <ValidationProvider
                  rules="required|min:5"
                  v-slot="{ errors }"
                  vid="password"
                >
                  <v-text-field
                    id="password"
                    name="password"
                    type="password"
                    :label="$t('signup.PASSWORD')"
                    v-model="password"
                    :error="errors.length > 0"
                    :error-messages="errors[0]"
                    ref="password"
                    autocomplete="off"
                  ></v-text-field>
                </ValidationProvider>
              </v-flex>
              <v-flex>
                <ValidationProvider
                  rules="required|min:5|confirmed:password"
                  v-slot="{ errors }"
                >
                  <v-text-field
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    :label="$t('signup.CONFIRM_PASSWORD')"
                    v-model="confirmPassword"
                    :error="errors.length > 0"
                    :error-messages="errors[0]"
                    autocomplete="off"
                  ></v-text-field>
                </ValidationProvider>
              </v-flex>
              <v-flex text-xs-center mt-5>
                <SubmitButton :buttonText="$t('signup.SIGN_ME_UP')" />
              </v-flex>
            </v-layout>
          </form>
        </ValidationObserver>
      </v-flex>
      <ErrorMessage />
    </v-layout>
  </v-container>
</template>

<script>
import router from "@/router";
import { mapActions } from "vuex";

export default {
  metaInfo() {
    return {
      title: this.$store.getters.appTitle,
      titleTemplate: `${this.$t("signup.TITLE")} - %s`,
    };
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      userName: "",
      deliveryType: "",
      yourValue: "",
      accountType: "",
      email: "",
      password: "",
      address: "",
      confirmPassword: "",
    };
  },
  methods: {
    ...mapActions(["userSignUp"]),
    async submit() {
      console.log({
        firstName: this.firstName,
        lastName: this.lastName,
        userName: this.userName,
        email: this.email,
        password: this.password,
        phone: this.yourValue,
      });
      await this.userSignUp({
        userName: this.userName,
        email: this.email,
        password: this.password,
        phone: this.yourValue,
        address: this.address,
        deliveryType: this.deliveryType,
      });
    },
  },
  created() {
    if (this.$store.state.auth.isTokenSet) {
      router.push({ name: "landing" });
    }
  },
};
</script>
