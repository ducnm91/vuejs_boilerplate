<template>
    <header>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/bootstrap">Bootstrap</b-nav-item>
            <b-nav-item to="/form" >Form</b-nav-item>
            <b-nav-item to="/layout-1" >layout 1</b-nav-item>
            <b-nav-item to="/layout-2" >layout 2</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#" @click="changeLanguage('en')">EN</b-dropdown-item>
              <b-dropdown-item href="#" @click="changeLanguage('nl')">JP</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-text>{{ $t("general.welcome") }}</b-nav-text>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
</template>
<style lang="scss">
  .navbar-dark .navbar-nav {
    .nav-link {
      &.router-link-active {
        color: #fff;
        &:focus,
        &:hover {
          color: #fff;
        }
      }
    }
  }
</style>
<script>
export default {
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>