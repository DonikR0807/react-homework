import { ActorInMovieCard, MovieFull, movieApi } from "src/entities/Movie";
import s from "./MoviePage.module.css";
import { useParams } from "react-router-dom";
import { ConditionalRender, Loader } from "src/shared/ui";
import { Carousel } from "src/shared/ui/Carousel/Carousel";
import { RateMovie } from "src/features/RateMovie/ui/RateMovie";

export const MoviePage = () => {
  const { movieId } = useParams<"movieId">();
  const { data, isLoading, isSuccess, isError } = movieApi.useGetMovieByIdQuery(
    Number(movieId),
  );

  return (
    <div className={s.root}>
      <ConditionalRender
        isSuccess={isSuccess}
        isLoading={isLoading}
        isFailed={isError}
        renderOnSuccess={() => {
          if (data) {
            return (
              <div>
                <div className={s.movieContainer}>
                  <MovieFull {...data}>
                    <RateMovie></RateMovie>
                  </MovieFull>
                </div>
                <Carousel
                  slides={data.actors.map((actor) => (
                    <ActorInMovieCard {...actor}></ActorInMovieCard>
                  ))}
                ></Carousel>
              </div>
            );
          }
        }}
        renderOnLoading={() => <Loader></Loader>}
        renderOnFailed={() => <p className={s.error}></p>}
      ></ConditionalRender>
    </div>
  );
};
