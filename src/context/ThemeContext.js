import React from "react";
import "../utils/vars.css";

export const themes = {
  dark: {
    backgroundColor: "hsl(230, 17%, 14%)",
    color: "hsl(0, 0%, 100%)",
  },
  light: {
    backgroundColor: "hsl(0, 0%, 100%)",
    color: "hsl(230, 17%, 14%)",
  },
  neutral: {
    color: "var(--red)",
    backgroundColor: "var(--green)",
  },
};

const ThemeContext = React.createContext(themes.dark);

export default ThemeContext;
