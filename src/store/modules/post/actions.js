/* ============
 * Actions for the post module
 * ============
 *
 * The actions that are available on the
 * post module.
 */

import Transformer from '@/transformers/PostTransformer';
import * as types from './mutation-types';

import Repository from '../../../repositories/RepositoryFactory';
const PostRepository = Repository.get("posts");

export const get = ({ commit }) => {
  commit(types.STATUS_LOADING, true)

  setTimeout(() => {
    PostRepository.get().then((res) => {
      // console.log(res.data)
      const list = res.data.map(post => {
        return Transformer.fetch(post)
      })

      commit(types.GET, list);
    }).catch(function (error) {
      console.log(error);
    })
    .then(function () {
      commit(types.STATUS_LOADING, false)
      // always executed
    })

  }, 3000)
};

export default {
  get,
};
