import Vue from 'vue'
import App from './App.vue'

import 'lin-ui2/dist/css/index.css';
import LUI from 'lin-ui2';
Vue.use(LUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
