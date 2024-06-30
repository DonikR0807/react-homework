import {
  FilterByGenre,
  FilterByYear,
  genreChanged,
  yearChanged,
} from "src/features/Filter";
import s from "./FilterSection.module.css";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import React from "react";
import { GenresRussian, years } from "src/features/Filter/model/types";
export const FilterSection = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const genreParam = params.get("genre");
    const yearParam = params.get("release_year");
    if (genreParam) {
      dispatch(genreChanged(genreParam as GenresRussian));
    }
    if (yearParam) {
      dispatch(yearChanged(yearParam as years));
    }
  }, [params, dispatch]);

  return (
    <div className={s.root}>
      <h2 className={s.text}>Фильтр</h2>
      <div className={s.filterContainer}>
        <FilterByGenre></FilterByGenre>
        <FilterByYear></FilterByYear>
      </div>
    </div>
  );
};
