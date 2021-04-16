import Vue from 'vue';
import axios from 'axios';
// axios.defaults.baseURL = process.env.VUE_APP_API_LOCATION;
axios.defaults.headers.common.Accept = 'application/json';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.interceptors.response.use(
//     (response) => response,
//     (error) => {
//       if (error.response.status === 401) {
//         store.dispatch('auth/logout');
//       }
  
//       return Promise.reject(error);
//     },
//   );

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

// Bind axios to Vue.
Vue.$http = axios;
Object.defineProperty(Vue.prototype, '$http', {
  get() {
    return axios;
  },
});