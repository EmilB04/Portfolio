import { defineStore } from 'pinia';
import { Dark } from 'quasar';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: true as boolean,
  }),

  getters: {
    mode: (state) => (state.isDark ? 'dark' : 'light'),
  },

  actions: {
    toggle() {
      this.isDark = !this.isDark;
      this._apply();
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    },

    init() {
      const saved = localStorage.getItem('theme');
      if (saved) {
        this.isDark = saved === 'dark';
      } else {
        // Default to dark mode on first visit
        this.isDark = true;
      }
      this._apply();
    },

    _apply() {
      // Sync Quasar's dark mode so body.body--dark is toggled correctly
      Dark.set(this.isDark);
      if (this.isDark) {
        document.documentElement.classList.remove('light-mode');
      } else {
        document.documentElement.classList.add('light-mode');
      }
    },
  },
});
