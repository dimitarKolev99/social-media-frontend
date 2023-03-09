import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(window.localStorage.getItem('userInfo')),
  }),

  getters: {
    getUser(state) {
      return state.user;
    },
  },

  actions: {
    setUser(username: string) {
      this.user = {
        username: username,
      };

      window.localStorage.setItem('userInfo', JSON.stringify(this.user));
    },

    logout() {
      this.user = null;
      window.localStorage.removeItem('userInfo');
    },
  },
});
