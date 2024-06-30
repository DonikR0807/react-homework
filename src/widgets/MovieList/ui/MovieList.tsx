import { MovieCard, movieApi } from "src/entities/Movie";
import s from "./MovieList.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  PaginateMovies,
  selectCurrentGenre,
  selectCurrentPage,
  selectCurrentYear,
  selectGenreIsNotSelected,
  selectYearIsNotSelected,
  totalPagesChanged,
} from "src/features/Filter";
import { GENRES } from "src/features/Filter/model/contstants";
import { GenresEnglish } from "src/features/Filter/model/types";
import { selectSearchValue } from "src/features/Search/model/selectors";
import React from "react";
import { ConditionalRender, Loader } from "src/shared/ui";

export const MovieList = () => {
  const currentPage = useSelector(selectCurrentPage);
  const currentGenre = useSelector(selectCurrentGenre);
  const currentYear = useSelector(selectCurrentYear);
  const yearIsNotSelected = useSelector(selectYearIsNotSelected);
  const genreIsNotSelected = useSelector(selectGenreIsNotSelected);
  const searchValue = useSelector(selectSearchValue);
  const dispatch = useDispatch();

  const queryString = React.useMemo(() => {
    const queryParams = new URLSearchParams();
    queryParams.set("page", String(currentPage));
    queryParams.set("limit", "10");

    if (!genreIsNotSelected) {
      for (const genre in GENRES) {
        if (GENRES[genre as GenresEnglish] === currentGenre) {
          queryParams.set("genre", genre);
        }
      }
    }

    if (!yearIsNotSelected) {
      queryParams.set("release_year", currentYear);
    }

    if (searchValue) {
      queryParams.set("title", searchValue);
    }
    return queryParams.toString();
  }, [
    currentGenre,
    currentYear,
    genreIsNotSelected,
    searchValue,
    yearIsNotSelected,
    currentPage,
  ]);

  const { data, isSuccess, isError, isFetching } =
    movieApi.useGetCurrentPageQuery(`?${queryString}`);

  React.useLayoutEffect(() => {
    if (data) {
      dispatch(totalPagesChanged(data.total_pages));
    }
  }, [data, dispatch]);

  return (
    <div className={s.root}>
      <ConditionalRender
        isSuccess={isSuccess}
        renderOnSuccess={() =>
          data?.search_result.length !== 0 ? (
            <div className={s.dataContainer}>
              <div className={s.list}>
                {data?.search_result.map((shortMovie) => (
                  <MovieCard {...shortMovie} key={shortMovie.id}></MovieCard>
                ))}
              </div>
              <div className={s.paginationContainer}>
                <PaginateMovies></PaginateMovies>
              </div>
            </div>
          ) : (
            <div className={s.notFoundContainer}>
              <p className={s.notFound}>Фильмы не найдены</p>
              <span className={s.caption}>
                Измените запрос и попробуйте снова
              </span>
            </div>
          )
        }
        isFailed={isError}
        renderOnFailed={() => <p className={s.error}>Ошибка...</p>}
        isLoading={isFetching}
        renderOnLoading={() => <Loader isActive={isFetching}></Loader>}
      ></ConditionalRender>
    </div>
  );
};
