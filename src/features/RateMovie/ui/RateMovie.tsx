import React from "react";
import s from "./RateMovie.module.css";
import Star from "src/shared/assets/icons/star/star.svg?react";
import StarChosen from "src/shared/assets/icons/star/starChosen.svg?react";
import StarHover from "src/shared/assets/icons/star/starHover.svg?react";
import { Button } from "src/shared/ui";

export const RateMovie = () => {
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);
  return (
    <div className={s.root}>
      {[...new Array(5)].map((_, index) => {
        const currentRating = index + 1;
        const hovered = currentRating <= hover;
        const lessThanRating = currentRating <= rating;

        return (
          <Button
            className={s.btn}
            onClick={() => setRating(currentRating)}
            onMouseEnter={() => setHover(currentRating)}
            onMouseLeave={() => setHover(0)}
          >
            {hovered ? (
              <StarHover></StarHover>
            ) : lessThanRating ? (
              <StarChosen></StarChosen>
            ) : (
              <Star></Star>
            )}
            {currentRating}
          </Button>
        );
      })}
    </div>
  );
};
