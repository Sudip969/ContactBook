import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      user: null,
      friends: [],
    };
  },
  getters: {
    isAuth() {
      if (localStorage.getItem("token") === null) {
        return false;
      }
      return true;
    },
  },
});

export default store;
