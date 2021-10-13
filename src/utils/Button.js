import React, { useState } from "react";
import classes from "./Button.module.css";

const Button = () => {
  const [darkMode, setDarkMode] = useState(true);

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };

  return (
    <button type="button" className={classes.btn} onClick={darkModeHandler}>
      <span
        className={`${darkMode ? classes.dark : ""} ${classes.circle}`}
      ></span>
    </button>
  );
};

export default Button;
