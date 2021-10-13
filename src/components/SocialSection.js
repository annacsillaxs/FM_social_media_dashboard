import React, { useState } from "react";
import SocialCard from "./SocialCard";
import Container from "../utils/Container";
import classes from "./SocialSection.module.css";
import data from "../data";

const SocialSection = () => {
  const [details, setDetails] = useState(data);

  return (
    <section className={classes.section}>
      <Container>
        <SocialCard details={details} />
      </Container>
    </section>
  );
};

export default SocialSection;
