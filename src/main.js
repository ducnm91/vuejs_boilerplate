import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/* ============
 * Plugins
 * ============
 *
 * Import and bootstrap the plugins.
 */

import './plugins/vue-highlight';
import './plugins/vue-bootstrap';
import { router } from './plugins/vue-router';
import i18n from './plugins/vue-i18n';
import './plugins/axios';



new Vue({
  render: h => h(App),
  router,
  i18n
}).$mount('#app')
