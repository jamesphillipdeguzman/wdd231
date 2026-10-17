/**
 * WDD 231 - Shared Theme Listener for Course Pages
 * Listens for SET_THEME postMessage commands and syncs with localStorage.
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'dev-courses-theme';

  function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
    if (document.body) {
      document.body.classList.toggle('dark', isDark);
    }

    try {
      localStorage.setItem(STORAGE_KEY, theme);
      localStorage.setItem('theme', theme);
    } catch (e) {
      // Ignore security errors in restricted iframe environments
    }
  }

  // 1. Initialize from localStorage or prefers-color-scheme
  try {
    const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') {
      applyTheme(saved);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      applyTheme('dark');
    }
  } catch (e) {}

  // 2. Listen for SET_THEME messages from parent window or opener
  window.addEventListener('message', (event) => {
    if (!event.data) return;

    if (event.data.type === 'SET_THEME' || event.data.type === 'THEME_CHANGE') {
      const theme = event.data.theme;
      if (theme === 'dark' || theme === 'light') {
        applyTheme(theme);
      }
    }
  });

  // Expose global helper
  window.__applyCourseTheme = applyTheme;
})();
