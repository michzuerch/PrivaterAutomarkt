<template>
<<<<<<< HEAD
  <div id="app" class="dark:bg-black">
    <navbar @setTheme="setTheme" :theme="this.theme"></navbar>

    <slot />

    <v-footer></v-footer>
=======
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/cars/">Unsere Autos</g-link>
        <g-link class="nav__link" to="/contact/">Kontakt</g-link>
        <g-link class="nav__link" to="/financing/">Finanzierung</g-link>
        <g-link class="nav__link" to="/impressum/">Impressum</g-link>
        <g-link class="nav__link" to="/location/">Standort</g-link>
        <g-link class="nav__link" to="/services/">Unsere Dienstleistungen</g-link>
        <g-link class="nav__link" to="/registration/">Zulassungsstelle</g-link>
      </nav>
    </header>
    <slot/>
>>>>>>> 3a6b6b0d093c82c21cc6402b4bfa5f0dd16f2768
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from "~/components/Navbar/Navbar.vue";
import VFooter from "~/components/Partials/Footer.vue";
export default {
  data: function() {
    return {
      theme: "light"
    };
  },
  components: {
    Navbar,
    VFooter
  },
  methods: {
    setTheme(mode) {
      this.theme = mode;
    }
  }
};
</script>