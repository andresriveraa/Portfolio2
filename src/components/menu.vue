<template>
  <div class="menu">
    <ul id="Menu" class="menu">
      <router-link to="/" v-show="menu">Inicio</router-link>
      <router-link to="/portfolio" v-show="!menu" >Portafolio</router-link>
      <router-link to="/contact">Contacto</router-link>
      {{menu}}
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
