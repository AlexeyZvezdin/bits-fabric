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

      if (i === 0) {
        return false;
      } else if (i === 1) {
        spelling = 'товар';
      } else if (i > 0 && i < 5) {
        // Можно сделать продвинутей на сотни и так далее, отрезая последние цифры
        spelling = 'товара';
      } else if (i > 4) {
        spelling = 'товаров';
      }

      return `${i} ${spelling}/${state.bag.totalPrice} руб`;
    },
    getTrue(state) {
      return state.bag.totalPrice;
    }
  },
  mutations: {
    addToBag(state, item) {
      state.bag.items = [...state.bag.items, item];
      state.bag.totalPrice += item.price;
    }
  },
  actions: {
    addToBagAction(context, data) {
      console.log(data[0] + data[1], ' CENTEXT');
      context.commit('addToBag', { name: 'valenok', price: 1225 });
    }
  },
  modules: {}
});
