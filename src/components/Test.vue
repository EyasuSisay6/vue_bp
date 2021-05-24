<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="11" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center text-md-h3 text-caption-2">
                          Login
                        </h1>

                        <v-form>
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="#09B750"
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="#09B750"
                          />
                        </v-form>
                        <h3 class="text-center mt-4">Forgot your password ?</h3>
                      </v-card-text>
                      <div class="text-center mt-3 mb-5">
                        <v-btn color="#09B750" dark>SIGN IN</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" style="background-color:#09B750">
                      <v-card-text class="white--text mt-5">
                        <h1
                          class="text-center  text-md-display-1 text-caption-2"
                        >
                          Hello, Friend!
                        </h1>
                        <h5 class="text-center">
                          Enter your personal details and start journay with us
                        </h5>
                      </v-card-text>
                      <div class="text-center mb-5">
                        <v-btn outlined dark @click="step++">SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" style="background-color:#09B750">
                      <v-card-text class="white--text mt-5">
                        <h1
                          class="text-center text-md-display-1 text-caption-2"
                        >
                          Welcome Back!
                        </h1>
                        <h5 class="text-center mt-2">
                          To Keep connected with us please login with your
                          personnel info
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn outlined dark @click="step--">Sign in</v-btn>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-5">
                        <h1 class="mb-5 text-center text-md-h3 text-caption-2">
                          Create Account
                        </h1>

                        <v-form>
                          <v-text-field
                            label="Name"
                            name="Name"
                            prepend-icon="mdi-account"
                            type="text"
                            color="#09B750"
                          />
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="#09B750"
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="#09B750"
                          />
                          <v-text-field
                            id="password"
                            label="Confirm Password"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="#09B750"
                          />
                          <v-select
                            id="accountType"
                            label="Account Type"
                            name="accountType"
                            v-model="accountType"
                            prepend-icon="mdi-lock"
                            :items="[
                              'Customer',
                              'Vendor',
                              'Supplier',
                              'Delivery Personal',
                              'Affiliate',
                            ]"
                            color="#09B750"
                          />
                          <div
                            v-if="
                              accountType == 'Vendor' ||
                                accountType == 'Supplier' ||
                                accountType == 'Affiliate'
                            "
                          >
                            <v-text-field
                              label="Phone Number"
                              name="phoneNumber"
                              prepend-icon="mdi-phone"
                              type="text"
                              color="#09B750"
                            />
                            <v-text-field
                              label="Commission"
                              name="commission"
                              prepend-icon="mdi-percent"
                              type="text"
                              color="#09B750"
                            />
                            <v-text-field
                              label="License Number"
                              name="licenseNumber"
                              prepend-icon="mdi-license"
                              type="text"
                              color="#09B750"
                            />
                          </div>
                          <v-text-field
                            label="Id No"
                            name="idNo"
                            prepend-icon="mdi-pen"
                            v-if="accountType == 'Affiliate'"
                            type="text"
                            color="#09B750"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5 mb-5">
                        <v-btn @click="signup" color="#09B750" dark
                          >SIGN UP</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    step: 1,
    accountType: "Customer",
  }),
  props: {
    source: String,
  },
};
</script>
