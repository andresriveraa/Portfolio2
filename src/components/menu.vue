<template>
  <div id="Menu" class="menu">
    <ul id="menu" class="menu">
      <router-link class="Link menulink" to="/" v-show="menu">Inicio</router-link>
      <router-link class="Link menulink" to="/portfolio" v-show="!menu" >Portafolio</router-link>
      <router-link class="Link menulink" to="/contact">Contacto</router-link>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['menu']),
  },
  created() {
    if (window.location.pathname === '/') {
      this.$store.state.menu = false;
    } else { this.$store.state.menu = true; }
  },
};
</script>
<style>
@import '../css/main.css'
</style>
