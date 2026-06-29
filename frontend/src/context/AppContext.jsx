import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [lang, setLangState] = useState(() => localStorage.getItem('lang') || 'en');
  const [theme, setThemeState] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.lang = lang;
    document.documentElement.lang = lang;
  }, [theme, lang]);

  function setLang(l) {
    setLangState(l);
    localStorage.setItem('lang', l);
  }

  function setTheme(t) {
    setThemeState(t);
    localStorage.setItem('theme', t);
  }

  function toggleLang() { setLang(lang === 'en' ? 'es' : 'en'); }
  function toggleTheme() { setTheme(theme === 'dark' ? 'light' : 'dark'); }

  return (
    <AppContext.Provider value={{ lang, theme, toggleLang, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
