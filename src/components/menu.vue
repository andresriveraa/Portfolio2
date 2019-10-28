<template>
  <div id="Menu" class="menu">
    <ul id="menu" class="menu">
      <router-link :class="'Link menulink ' + menuitemShow.colroLetter"
                  to="/" v-show="menuitemShow.inicio">Inicio</router-link>
      <router-link :class="'Link menulink ' + menuitemShow.colroLetter"
                  to="/portfolio" v-show="menuitemShow.portfolio" >Portafolio</router-link>
      <router-link :class="'Link menulink ' + menuitemShow.colroLetter"
                  to="/contact" v-show="menuitemShow.contacto">Contacto</router-link>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['menuitemShow', 'colroLetter']),
  },
};
</script>
<style>
@import '../css/main.css';
</style>
