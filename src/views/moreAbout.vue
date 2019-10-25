<template>
  <div>
    <!-- skills view -->
    <div class="skillsGrid">
      <!-- left square -->
      <div class="squareLeft">
        <div class="skilsItem">
          <div class="groupSkill" v-for=" skill in skills" :key="skill.id">
              <img :src="require(`@/img/${skill.img}`)" alt="">
              <h3 class="nameSkills">{{skill.name}}</h3>
          </div>
        </div>
      </div>
      <!-- right squqre  -->
      <div class="textSkils">
        <div class="contentTextSkills">
          <router-link to="/">
            <img src="../img/logoLink.png" alt="">
          </router-link>
          <h1 class="titleSkills">Habilidades<br>Técnicas</h1>
          <div class="" >
          <h3 class="subtitleSki">
            En este momento estoy aprendiendo
          </h3>
            <div class="nextSkilld" id="skills">
              <div class="devLearn">
                <h5>Django</h5>
                <h5>Python</h5>
              </div>
              <h5>Investigando persepción Visual</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- experience view -->
    <div class="experienceGrid">
      <!-- experience square left -->
      <div class="enterprises">
        <div class="enterprise">
          <div class="enterpriseOne enterpriseItem">
            <div class="alignItem">
              <h3 class="title">elVecino.com</h3>
              <h5 class="position">Diseñador y<br>Desarrollador web</h5>
              <p class="duration">10 meses - actualmente</p>
            </div>
          </div>
          <div class="enterpriseTwo enterpriseItem">
            <div class="alignItem">
              <h3 class="title">Diseñador freelance</h3>
              <h5 class="position"><a href="/portfolio" style="color: black">Portafolio</a></h5>
              <p class="durationJob">4 años</p>
            </div>
          </div>
        </div>
      </div>
      <!-- experience square right -->
      <div class="textLargeExperience">
        <div class="wrapExperience">
          <router-link to="/">
            <img src="../img/logoLink.png" class="logoExperience" alt="">
          </router-link>
          <div class="contentExperience">
            <h2 class="titleExperience">Experiencia</h2>
            <hr class="lineExp">
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
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['skills']),
  },
};
</script>

<style>
@import '../css/moreAbout.css';
</style>
