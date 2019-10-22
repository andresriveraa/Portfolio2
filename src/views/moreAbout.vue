<template>
  <div>
    <div class="skills">
      <div class="skilsItem" v-for=" skill in skills" :key="skill.id">
        <img src="skill.img" alt="">
        <h3 class="nameSkills">{{skill.name}}</h3>
      </div>
      <div class="textSkils">
        <img src="" alt="" class="logo">
        <h1 class="titleSkills">Habilidades<br>Técnicas</h1>
        <div class="nextLeran">
          <h3 class="subtitleSki">
            En este momento estoy aprendiendo
          </h3>
          <div class="nextSkills" id="skills">
            <h5>Django</h5>
            <h5>Python</h5>
            <h5>Investigando persepción Visual</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="experience">
      <div class="enterprise">
        <div class="enterpriseOne">
          <h3 class="title">elVecino.com</h3>
          <h5 class="position">Diseñador y<br>Desarrollador web</h5>
          <p class="duration">10 meses - actualmente</p>
        </div>
        <div class="enterpriseTwo">
          <h3 class="title">Diseñador freelance</h3>
          <h5 class="position"><a href="/portfolio">Portafolio</a></h5>
          <p class="duration"></p>
        </div>
      </div>
      <div class="textLargeExperience">
        <router-link to="/">
          <img src="../img/logoLink.png" alt="">
        </router-link>
        <h2 class="titleExperience">Experiencia</h2>
        <p id="abstract">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
          no sea takimata sanctus est Lorem ipsum dolor sit amet
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  ...mapState(['skills']),
};
</script>

<style>
@import '../css/moreAbout.css';
</style>
