const {remote} = window.require("electron")
import {
    Layout,
    Button,
    Tabs,
    Menu,
    Modal,
    Table,
    Form,
    InputNumber,
    Tag,
    PageHeader,
    Icon,
    Input,
    Popconfirm,
    message
  } from 'ant-design-vue';

import Knex from "knex";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.prototype.$db = remote.getGlobal("$db")
Vue.prototype.$message = message

Vue.config.productionTip = false;

Vue.use(Layout);
Vue.use(Tabs);
Vue.use(Button);
Vue.use(Table);
Vue.use(Form);
Vue.use(InputNumber);
Vue.use(Input);
Vue.use(Menu);
Vue.use(Modal);
Vue.use(Tag);
Vue.use(Icon);
Vue.use(Popconfirm);

Vue.use(PageHeader);


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