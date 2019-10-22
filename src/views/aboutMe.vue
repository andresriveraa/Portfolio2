<template>
  <div>
    <div class="cornerUp">
      <h4>+57-318 813 4406</h4>
      <h4>+57-318 813 4406</h4>
    </div>
    <figure class="me" id="me">
      <img src alt class="meImg" />
    </figure>
    <img src="../img/circleWhite.png" alt class="circle" />
    <Menu />
    <div class="tittle">
      <h3 class="carrer">Diseñador Web</h3>
      <div class="nameTitle">
        <h1 class="name">Andrés</h1>
        <h1 class="name">Rivera</h1>
      </div>
    </div>
    <div class="menuAbou">
      <ul>
        <router-link to="/moreAbout/#abstract">Experiencia</router-link>
        <router-link to="/moreAbout/#skills">Skills</router-link>
        <router-link to="/moreAbout/#abstract">Perfil</router-link>
      </ul>
      <div class="cornerNick">
        <h4>circuandante</h4>
        <h4>@circuandantediseno</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['menu']),
  },
};
</script>

<style>
@import "../css/main.css";
</style>
