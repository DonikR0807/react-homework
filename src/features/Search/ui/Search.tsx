import { Input } from "src/shared/ui";
import SearchIcon from "src/shared/assets/icons/search.svg?react";
import React from "react";
import { debounce } from "src/shared/lib";
import { useDispatch } from "react-redux";
import { searchValueChanged } from "../model/searchSlice";
import { pageChanged } from "src/features/Filter";

export const Search = () => {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();
  const debouncedSearch = React.useCallback(
    debounce((searchValue) => {
      dispatch(searchValueChanged(searchValue));
      dispatch(pageChanged(1));
    }, 1000),
    [],
  );

  function hangdleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { target } = event;

    setValue(target.value);
    debouncedSearch(target.value);
  }

  function handleClear() {
    setValue("");
    debouncedSearch("");
  }

  return (
    <Input
      id="input"
      icon={<SearchIcon width={16} height={16} />}
      value={value}
      onChange={hangdleChange}
      placeholder="Название фильма"
      clearBtn={value.length !== 0}
      onClear={handleClear}
    ></Input>
  );
};
