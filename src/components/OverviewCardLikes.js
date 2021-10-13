import React from "react";
// import classes from "./OverviewCardLikes.module.css";
import classes from "./OverviewCard.module.css";

const OverviewCardLikes = ({ details }) => {
  return (
    <React.Fragment>
      {details.map((detail) => {
        const arrow = detail.likes_arrow.includes("up") ? "up" : "down";
        console.log(arrow);
        return (
          <div className={classes.card} key={detail.id}>
            <p className={classes["card-title"]}>{detail.likes_title}</p>
            <img
              src={detail.social}
              alt={detail.id}
              className={classes["card-icon"]}
            />
            <p className={classes["card-count"]}>{detail.likes_count}</p>
            <div className={classes["icon-wrapper"]}>
              <img src={detail.likes_arrow} alt="arrow" />
              <p className={`${classes["card-change"]} ${classes[arrow]}`}>
                {detail.likes_change}%
              </p>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default OverviewCardLikes;
