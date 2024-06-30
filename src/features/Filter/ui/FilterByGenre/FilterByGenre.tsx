import { Select } from "src/shared/ui";
import { GENRES } from "../../model/contstants";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentGenre,
  selectGenreIsNotSelected,
} from "../../model/selectors";
import { genreChanged, pageChanged } from "../../model/filterSlice";
import { GenresRussian } from "../../model/types";
import { useSearchParams } from "react-router-dom";

export const FilterByGenre = () => {
  const currentGenre = useSelector(selectCurrentGenre);
  const genreNotSelected = useSelector(selectGenreIsNotSelected);
  const [params, setParams] = useSearchParams();
  const dispatch = useDispatch();

  function handleGenreChange(ruGenre: string) {
    dispatch(genreChanged(ruGenre as GenresRussian));
    dispatch(pageChanged(1));
    if ((ruGenre as GenresRussian) !== "Не выбран") {
      params.set("genre", ruGenre);
    } else {
      params.delete("genre");
    }

    setParams(params.toString());
  }

  return (
    <Select
      options={Object.values(GENRES)}
      label="Жанр"
      currentOption={genreNotSelected ? null : currentGenre}
      onOptionSelect={handleGenreChange}
      placeholder="Выберите жанр"
    ></Select>
  );
};
