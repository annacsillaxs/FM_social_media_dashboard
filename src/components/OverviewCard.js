import React from "react";
import classes from "./OverviewCard.module.css";

const OverviewCardViews = ({ details }) => {
  return (
    <React.Fragment>
      {details.map((detail) => {
        const arrow = detail.view_arrow.includes("up") ? "up" : "down";

        return (
          <div className={`${classes.card} ${classes.views}`} key={detail.id}>
            <p className={classes["card-title"]}>{detail.view_title}</p>
            <img
              src={detail.social}
              alt={detail.id}
              className={classes["card-icon"]}
            />
            <p className={classes["card-count"]}>{detail.view_count}</p>
            <div className={classes["icon-wrapper"]}>
              <img src={detail.view_arrow} alt="arrow" />
              <p className={`${classes["card-change"]} ${classes[arrow]}`}>
                {detail.view_change}%
              </p>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default OverviewCardViews;
