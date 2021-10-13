import React, { useContext } from "react";
import Container from "../utils/Container";
import ThemeContext from "../context/ThemeContext";
import classes from "./Header.module.css";

const Header = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className={classes.header} style={theme}>
      <Container>
        <div className={classes["header_title-box"]}>
          <h2 className={classes["header_title"]}>Social Media Dashboard</h2>
          <p className={classes["header_text"]}>Total followers: 23,004</p>
        </div>
        <div className={classes["header_btn-box"]}>
          <p className={classes["header_text"]}>Dark Mode</p>
        </div>
      </Container>
    </div>
  );
};

export default Header;
