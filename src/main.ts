const {remote} = window.require("electron")
import Knex from "knex";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.prototype.$db = remote.getGlobal("$db")

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


declare module 'vue/types/vue' {
  // 3. Declare augmentation for Vue
  interface Vue {
    $db: Knex
  }
}