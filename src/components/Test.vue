<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2">
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
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hello, Friend!</h1>
                        <h5 class="text-center">
                          Enter your personal details and start journay with us
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn outlined dark @click="step++">SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" style="background-color:#09B750">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Welcome Back!</h1>
                        <h5 class="text-center">
                          To Keep connected with us please login with your
                          personnel info
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn outlined dark @click="step--">Sign in</v-btn>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2">
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
                <v-window-item :value="3">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 mb-5">
                          Sign up as a Vendor
                        </h1>
                        <v-row class="fill-height">
                          <v-col cols="12" md="6">
                            <v-text-field
                              label="Vendor Name"
                              name="VendorName"
                              prepend-icon="mdi-account"
                              type="text"
                              color="#09B750"
                            />
                            <v-text-field
                              label="Vendor Email"
                              name="VendorEmail"
                              prepend-icon="mdi-email"
                              type="text"
                              color="#09B750"
                            />
                            <v-text-field
                              label="Vendor Phone"
                              name="VendorPhone"
                              prepend-icon="mdi-phone"
                              type="text"
                              color="#09B750"
                            />
                          </v-col>

                          <v-col cols="12" md="6">
                            <v-text-field
                              label="Vendor Address"
                              name="VendorAddress"
                              prepend-icon="mdi-home"
                              type="text"
                              color="#09B750"
                            />
                            <v-text-field
                              label="Admin Commission"
                              name="adminCommission"
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
                          </v-col>
                        </v-row>
                        <div class="text-center mt-5 mb-5">
                          <v-btn @click="signup" color="#09B750" dark
                            >SIGN UP</v-btn
                          >
                        </div>
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" md="4" style="background-color:#09B750">
                      <v-card-text class="white--text mt-12">
                        <h5 class="text-center">
                          If you have made a mistake or want to make some
                          changes
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn outlined dark @click="step = 2">Go back</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="4">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 mb-5">
                          Sign up as a Supplier
                        </h1>
                        <v-row class="fill-height">
                          <v-col cols="12" md="6">
                            <v-text-field
                              label="Supplier Name"
                              name="supplierName"
                              prepend-icon="mdi-account"
                              type="text"
                              color="#09B750"
                            />
                            <v-text-field
                              label="Supplier Email"
                              name="supplierEmail"
                              prepend-icon="mdi-email"
                              type="text"
                              color="#09B750"
                            />
                            <v-text-field
                              label="Supplier Phone"
                              name="supplierPhone"
                              prepend-icon="mdi-phone"
                              type="text"
                              color="#09B750"
                            />
                          </v-col>

                          <v-col cols="12" md="6">
                            <v-text-field
                              label="Supplier Address"
                              name="supplierAddress"
                              prepend-icon="mdi-home"
                              type="text"
                              color="#09B750"
                            />
                            <v-text-field
                              label="Admin Commission"
                              name="adminCommission"
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
                          </v-col>
                        </v-row>
                        <div class="text-center mt-5 mb-5">
                          <v-btn @click="signup" color="#09B750" dark
                            >SIGN UP</v-btn
                          >
                        </div>
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" md="4" style="background-color:#09B750">
                      <v-card-text class="white--text mt-12">
                        <h5 class="text-center">
                          If you have made a mistake or want to make some
                          changes
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn outlined dark @click="step = 2">Go back</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="5">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 mb-5">
                          Sign up as an Affiliate
                        </h1>
                        <v-row class="fill-height">
                          <v-col cols="12" md="6">
                            <v-text-field
                              label="Affiliate Name"
                              name="AffiliateName"
                              prepend-icon="mdi-account"
                              type="text"
                              color="#09B750"
                            />
                            <v-text-field
                              label="Affiliate Email"
                              name="AffiliateEmail"
                              prepend-icon="mdi-email"
                              type="text"
                              color="#09B750"
                            />
                            <v-text-field
                              label="Affiliate Phone"
                              name="AffiliatePhone"
                              prepend-icon="mdi-phone"
                              type="text"
                              color="#09B750"
                            />
                            <v-text-field
                              label="Id No"
                              name="IdNo"
                              prepend-icon="mdi-pen"
                              type="text"
                              color="#09B750"
                            />
                          </v-col>

                          <v-col cols="12" md="6">
                            <v-text-field
                              label="Affiliate Address"
                              name="AffiliateAddress"
                              prepend-icon="mdi-home"
                              type="text"
                              color="#09B750"
                            />
                            <v-text-field
                              label="Commission"
                              name="Commission"
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
                          </v-col>
                        </v-row>
                        <div class="text-center mt-5 mb-5">
                          <v-btn @click="signup" color="#09B750" dark
                            >SIGN UP</v-btn
                          >
                        </div>
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" md="4" style="background-color:#09B750">
                      <v-card-text class="white--text mt-12">
                        <h5 class="text-center">
                          If you have made a mistake or want to make some
                          changes
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn outlined dark @click="step = 2">Go back</v-btn>
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
  methods: {
    signup() {
      if (
        this.accountType == "Customer" ||
        this.accountType == "Delivery Personal"
      ) {
        return;
      }
      if (this.accountType == "Vendor") {
        this.step = 3;
      }
      if (this.accountType == "Supplier") {
        this.step = 4;
      }
      if (this.accountType == "Affiliate") {
        this.step = 5;
      }
    },
  },
};
</script>
