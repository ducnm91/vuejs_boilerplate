/* ============
 * Mutations for the post module
 * ============
 *
 * The mutations that are available on the
 * post module.
 */

import { GET, GET_POST } from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [GET](state, list) {
    state.list = list;
  },
  [GET_POST](state, post) {
    state.postTitle = post.postTitle;
    state.postThumbnail = post.postThumbnail;
  }
};