import React, { useState } from "react";
import Button from "../utils/Button";
import Header from "./Header";
import SocialSection from "./SocialSection";
import OverviewSection from "./OverviewSection";
import ThemeContext, { themes } from "../context/ThemeContext";
import classes from "./App.module.css";

function App() {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    theme === themes.dark ? setTheme(themes.neutral) : setTheme(themes.dark);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={classes.app}>
        <Header />
        <Button />
        <button onClick={toggleTheme}>Change Theme</button>
        <SocialSection />
        <OverviewSection />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
