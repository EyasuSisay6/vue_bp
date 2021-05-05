import Vue from "vue";
import Heading from "@/components/common/Heading.vue";
import Description from "@/components/common/Description.vue";
import ErrorMessage from "@/components/common/ErrorMessage.vue";
import SuccessMessage from "@/components/common/SuccessMessage.vue";
import SubmitButton from "@/components/common/SubmitButton.vue";
import ProjectDescription from "@/components/common/ProjectDescription.vue";
import Countdown from "@/components/common/Countdown.vue";
import VueCountdown from "@chenfengyuan/vue-countdown";

Vue.component("Heading", Heading);
Vue.component("Description", Description);
Vue.component("ErrorMessage", ErrorMessage);
Vue.component("SuccessMessage", SuccessMessage);
Vue.component("SubmitButton", SubmitButton);
Vue.component("ProjectDescription", ProjectDescription);
Vue.component(`vue-${VueCountdown.name}`, VueCountdown);
Vue.component(`Countdown`, Countdown);
