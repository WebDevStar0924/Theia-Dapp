import React, { useState } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { dark, light } from "../theme";
import { ThemeProvider as ThemeUIProvider } from "theme-ui";

const CACHE_KEY = "IS_DARK";

const ThemeContext = React.createContext({
  isDark: null,
  toggleTheme: () => null,
  setTheme: (theme: boolean) => {},
});

const ThemeContextProvider: React.FC = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const isDarkUserSetting = localStorage.getItem(CACHE_KEY);
    return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : false;
  });

  const toggleTheme = () => {
    setIsDark((prevState) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState));
      return !prevState;
    });
    return null;
  };

  const setTheme = (theme) => {
    setIsDark(theme);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, setTheme }}>
      <SCThemeProvider theme={isDark ? dark : light}>
        <ThemeUIProvider theme={isDark ? dark : light}>
          {children}
        </ThemeUIProvider>
      </SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
