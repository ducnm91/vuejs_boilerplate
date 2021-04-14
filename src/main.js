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
import { router } from './plugins/vue-router';


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
