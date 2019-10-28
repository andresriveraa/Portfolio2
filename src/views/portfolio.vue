<template>
  <div>
    <Menu class="menuColor" />
    <div class="gridImg">
      <figure>
        <img class="pinkCircle" src="../img/pinkCircle.png" alt="">
      </figure>
    </div>
    <div class="textProject">
      <projectItem :itemPort="itemShow"></projectItem>
      <div class="menuProjects">
        <ul>
          <li v-for="link in projectsPortfolio" :key="link.id"
          @click.prevent="showProject(link)"> {{link.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import projectItem from '../components/project.vue';

export default {
  data() {
    return {
      itemShow: this.$store.state.projectsPortfolio[0],
    };
  },
  created() {
    this.$store.commit('changeColor');
  },
  components: {
    projectItem,
  },
  computed: {
    ...mapState(['projectsPortfolio']),
  },
  methods: {
    showProject(project) {
      this.itemShow = project;
    },
  },
};
</script>

<style>
@import '../css/main.css';
</style>
