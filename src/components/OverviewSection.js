import React, { Fragment, useState } from "react";
import OverviewCardViews from "./OverviewCard";
import OverviewCardLikes from "./OverviewCardLikes";
import Container from "../utils/Container";
import classes from "./OverviewSection.module.css";
import data from "../data";

const OverviewSection = () => {
  const [details, setDetails] = useState(data);
  return (
    <Fragment>
      <h2 className={classes.title}>Overview - Today</h2>
      <Container>
        <OverviewCardViews details={details} />
        <OverviewCardLikes details={details} />
      </Container>
    </Fragment>
  );
};

export default OverviewSection;
