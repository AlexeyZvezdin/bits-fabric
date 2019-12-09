import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bag: {
      items: [],
      totalPrice: 0
    }
  },
  getters: {
    fullBag(state) {
      let i = state.bag.items.length;
      let spelling;

      switch (i) {
        case 1:
          spelling = 'товар';
          break;
        case i > 1 && i < 5:
          // Можно сделать продвинутей на сотни и так далее, отрезая последние цифры
          spelling = 'товарa';
          break;
        case i > 4:
          spelling = 'товаров';
          break;
        case i === 0:
          return false;
        default:
          return false;
      }

      return `${i} ${spelling}/${state.bag.totalPrice} руб`;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
