import Vue from 'vue';
import Vuex from 'vuex';

import JSONSkills from '../data/data.json';
import JSONProject from '../data/project.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    skills: JSONSkills,
    projectsPortfolio: JSONProject,
    menu: 'true',
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
