import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import apolloProvider from "./apollo.js";
import "./assets/css/tailwind.css";

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
