import { defineStore } from 'pinia'

export const useThemeStore = defineStore('themestore', () => {
  const curTheme = ref('wireframe');

  const toggleTheme = () => {
    curTheme.value = curTheme.value === 'wireframe' ? 'dark' : 'wireframe';
    document.documentElement.setAttribute('data-theme', curTheme.value);
  };

  const getBrowserTheme = () => {
    curTheme.value = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'wireframe';
    document.documentElement.setAttribute('data-theme', curTheme.value);
  }

  return {
    curTheme,
    toggleTheme,
    getBrowserTheme
  }
})
