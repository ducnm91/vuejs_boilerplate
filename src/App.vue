<template>
  <div id="app">
    <h1 class="text-center">Vue Boilerplate!</h1>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Common/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
  @import './assets/styles/custom_bootstrap.scss';
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
  @import '../node_modules/bootstrap-vue/src/index.scss';
  // @import '../node_modules/bootstrap-vue/src/icons.scss';
</style>
