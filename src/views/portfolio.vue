<template>
  <div>
    <Menu />
    <div class="gridImg">
      <figure>

      </figure>
    </div>
    <div class="textProject">
      <projectItem :itemPort="itemShow"></projectItem>
    </div>
    <div class="menuProjects">
      <ul>
        <li v-for="link in projectsPortfolio" :key="link.id"
         @click.prevent="showProject(link)"> {{link.name}}</li>
      </ul>
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
