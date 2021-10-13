import React from "react";
import classes from "./SocialCard.module.css";

const SocialCard = ({ details }) => {
  return (
    <React.Fragment>
      {details.map((detail) => {
        const arrow = detail.today_arrow.includes("up") ? "up" : "down";

        return (
          <div
            className={`${classes.card} ${classes[detail.id]}`}
            key={detail.id}
          >
            <div className={classes["icon-wrapper"]}>
              <img src={detail.social} alt={detail.id} />
              <p className={classes["card-name"]}>{detail.name}</p>
            </div>
            <p className={classes["card-num"]}>{detail.amount}</p>
            <p className={classes["card-desc"]}>{detail.followers}</p>
            <div className={classes["icon-wrapper"]}>
              <img src={detail.today_arrow} alt="arrow up" />
              <p className={`${classes["card-daily"]} ${classes[arrow]}`}>
                {detail.today_change} Today
              </p>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default SocialCard;
