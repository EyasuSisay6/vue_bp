import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/src/styles/main.sass";
// import colors from 'vuetify/es5/util/colors'
// import VuetifyConfirm from 'vuetify-confirm'
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

const theme = JSON.parse(localStorage.getItem("dark")) || false;
const opts = {
  theme: {
    dark: theme !== false,
    themes: {
      light: {
        primary: '#07A04B',
        secondary: '#D6CD29',
        accent: '#EF3926',
        error: '#E5220E',
        info: '#078239',
        success: '#09B750',
        warning: '#FFF431',
      }
    }
  },
  iconfont: "mdi",
};

export default new Vuetify(opts);
