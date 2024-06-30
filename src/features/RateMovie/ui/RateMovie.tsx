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
import { debounce } from "src/shared/lib";

export const RateMovie = ({ movieId }: { movieId: string }) => {
  const rating = useSelector((state: RootState) =>
    selectMoviesRatingById(state, movieId),
  );
  const [hover, setHover] = React.useState(0);
  const [rateMovie] = rateMovieApi.useRateMovieMutation();
  const dispatch = useDispatch();

  const handleMovieRate = React.useCallback(
    debounce((rating: number) => {
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
          const savedRatedMovies = localStorage.getItem("ratedMovies");
          if (savedRatedMovies) {
            const parsed: { [index: string]: number } =
              JSON.parse(savedRatedMovies);
            parsed[movieId] = rating;
            localStorage.setItem("ratedMovies", JSON.stringify(parsed));
          } else {
            localStorage.setItem(
              "ratedMovies",
              JSON.stringify({
                [movieId]: rating,
              }),
            );
          }
        })
        .catch(() => alert("Failed to rate a movie!"));
    }, 300),
    [],
  );

  React.useEffect(() => {
    const savedRatedMovies = localStorage.getItem("ratedMovies");
    if (savedRatedMovies) {
      const parsed: { [index: string]: number } = JSON.parse(savedRatedMovies);
      if (parsed[movieId]) {
        dispatch(
          movieWasRated({
            movieId,
            rating: parsed[movieId],
          }),
        );
      }
    }
  }, [dispatch, movieId]);

  return (
    <div className={s.root}>
      {[...new Array(5)].map((_, index) => {
        const currentRating = index + 1;
        const hovered = currentRating <= hover;
        const lessThanRating = currentRating <= rating;

        return (
          <Button
            key={currentRating}
            className={s.btn}
            onClick={() => handleMovieRate(currentRating)}
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
