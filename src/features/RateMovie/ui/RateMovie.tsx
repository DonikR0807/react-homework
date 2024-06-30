import React from "react";
import s from "./RateMovie.module.css";
import Star from "src/shared/assets/icons/star/star.svg?react";
import StarChosen from "src/shared/assets/icons/star/starChosen.svg?react";
import StarHover from "src/shared/assets/icons/star/starHover.svg?react";
import { Button } from "src/shared/ui";
import { rateMovieApi } from "../model/rateMovieApi";
import { useDispatch, useSelector } from "react-redux";
import { movieWasRated } from "../model/ratedMoviesSlice";
import { selectMoviesRatingById } from "../model/selectors";

export const RateMovie = ({ movieId }: { movieId: string }) => {
  const rating = useSelector((state: RootState) =>
    selectMoviesRatingById(state, movieId),
  );
  const [hover, setHover] = React.useState(0);
  const [rateMovie] = rateMovieApi.useRateMovieMutation();
  const dispatch = useDispatch();

  function handleMovieRate(movieId: string, rating: number) {
    rateMovie({
      movieId,
      user_rate: rating,
    })
      .unwrap()
      .then(() => {
        dispatch(
          movieWasRated({
            movieId,
            rating,
          }),
        );
      })
      .catch(() => alert("Failed to rate a movie!"));
  }

  return (
    <div className={s.root}>
      {[...new Array(5)].map((_, index) => {
        const currentRating = index + 1;
        const hovered = currentRating <= hover;
        const lessThanRating = currentRating <= rating;

        return (
          <Button
            className={s.btn}
            onClick={() => handleMovieRate(movieId, currentRating)}
            onMouseEnter={() => setHover(currentRating)}
            onMouseLeave={() => setHover(0)}
          >
            {hovered ? (
              <StarHover className={s.star}></StarHover>
            ) : lessThanRating ? (
              <StarChosen className={s.star}></StarChosen>
            ) : (
              <Star className={s.star}></Star>
            )}
            {currentRating}
          </Button>
        );
      })}
    </div>
  );
};
