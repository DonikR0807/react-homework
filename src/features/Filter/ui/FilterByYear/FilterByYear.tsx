import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentYear,
  selectYearIsNotSelected,
} from "../../model/selectors";
import { YEARS } from "../../model/contstants";
import { Select } from "src/shared/ui";
import { years } from "../../model/types";
import { pageChanged, yearChanged } from "../../model/filterSlice";
import { useSearchParams } from "react-router-dom";

export const FilterByYear = () => {
  const currentYear = useSelector(selectCurrentYear);
  const yearIsNotSelected = useSelector(selectYearIsNotSelected);
  const [params, setParams] = useSearchParams();
  const dispatch = useDispatch();

  function handleYearChange(newYear: string) {
    dispatch(yearChanged(newYear as years));
    dispatch(pageChanged(1));
    if ((newYear as years) !== "Не выбран") {
      params.set("release_year", newYear);
    } else {
      params.delete("release_year");
    }
    setParams(params.toString());
  }

  return (
    <Select
      options={Object.values(YEARS)}
      label="Год выпуска"
      currentOption={yearIsNotSelected ? null : currentYear}
      onOptionSelect={handleYearChange}
      placeholder="Выберите год"
    ></Select>
  );
};
