/* ============
 * Mutations for the post module
 * ============
 *
 * The mutations that are available on the
 * post module.
 */

import { GET, GET_POST, STATUS_LOADING } from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [GET](state, list) {
    state.list = list;
  },
  [GET_POST](state, post) {
    state.postTitle = post.postTitle;
    state.postThumbnail = post.postThumbnail;
  },
  [STATUS_LOADING](state, status) {
    state.loading = status;
  },
};