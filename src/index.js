import Vue from "vue";
import App from "./components/App";
import router from "./router";
import VueTheMask from 'vue-the-mask';
import bootstrap from 'bootstrap';

Vue.use(VueTheMask);

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");