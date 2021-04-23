/* ============
 * Vuex Store
 * ============
 *
 * Vuex is a state management pattern + library for Vue.js applications.
 * It serves as a centralized store for all the components in an application,
 * with rules ensuring that the state can only be mutated in a predictable fashion.
 *
 * http://vuex.vuejs.org/en/index.html
 */

import Vue from 'vue';
// import createLogger from 'vuex/dist/logger';
import Vuex from 'vuex';

Vue.use(Vuex);

// Modules
import post from './modules/post';

// const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  /**
   * Assign the modules to the store.
   */
  modules: {
    post
  },

  /**
   * If strict mode should be enabled.
   */
//   strict: debug,

  /**
   * Plugins used in the store.
   */
//   plugins: debug ? [createLogger()] : [],
});