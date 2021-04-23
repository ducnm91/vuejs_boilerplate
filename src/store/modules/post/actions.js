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
  /*
   * Normally you would use a proxy to fetch the account:
   *
   * new Proxy()
   *  .find()
   *  .then((response) => {
   *    commit(types.FIND, Transformer.fetch(response));
   *  })
   *  .catch(() => {
   *    console.log('Request failed...');
   *  });
   */
  PostRepository.get().then((res) => {
    console.log(res.data)
    const list = res.data.map(post => {
      return Transformer.fetch(post)
    })
    console.log('after transformer')
    console.log(list)
    commit(types.GET, list);
  }).catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  })
};

export default {
  get,
};
