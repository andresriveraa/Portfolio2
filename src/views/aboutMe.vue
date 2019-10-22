<template>
  <div id="home">
    <div class="cornerUp">
      <h4 class="horizontal">+57-318 813 4406</h4>
      <h4 class="vertical">+57-318 813 4406</h4>
    </div>
    <img id="circleHome" src="../img/circleWhite.png" alt class="circle" />
    <figure class="me" id="me">
      <img src="../img/perfil.png" alt="Andres Rivera" class="meImg" />
    </figure>
    <Menu />
    <div class="tittleHome">
      <h3 class="carrer">Diseñador Web</h3>
      <div class="nameTitle">
        <h1 class="name">Andrés</h1>
        <h1 class="name">Rivera</h1>
      </div>
    </div>
    <div class="menuAbout">
      <ul>
        <router-link class="Link" to="/moreAbout/#abstract">Experiencia</router-link>
        <router-link class="Link" to="/moreAbout/#skills">Skills</router-link>
        <router-link class="Link" to="/moreAbout/#abstract">Perfil</router-link>
      </ul>
    </div>
    <div class="cornerNick">
      <h4 class="horizontalRight">circuandante</h4>
      <h4 class="verticalRight">@circuandantediseno</h4>
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
@import "../css/aboutMe.css";
</style>
