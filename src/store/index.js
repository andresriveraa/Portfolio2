import Vue from 'vue';
import Vuex from 'vuex';

import JSONSkills from '../data/data.json';
import JSONProject from '../data/project.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    skills: JSONSkills,
    projectsPortfolio: JSONProject,
    menu: true,
    proof: 'true',
    menuitemShow: {
      portfolio: true,
      inicio: false,
      contacto: true,
      colroLetter: 'dark',
    },
  },
  mutations: {
    changeColor(state) {
      switch (window.location.pathname) {
        case '/portfolio':
          state.menuitemShow.portfolio = false;
          state.menuitemShow.inicio = true;
          state.menuitemShow.contacto = true;
          state.menuitemShow.colroLetter = 'dark';
          break;
        case '/contact':
          state.menuitemShow.portfolio = true;
          state.menuitemShow.inicio = true;
          state.menuitemShow.contacto = false;
          state.menuitemShow.colroLetter = 'light';
          break;
        default:
          state.menuitemShow.portfolio = true;
          state.menuitemShow.inicio = false;
          state.menuitemShow.contacto = true;
          state.menuitemShow.colroLetter = 'dark';
          break;
      }
    },
  },
  actions: {
  },
  modules: {
  },
});
