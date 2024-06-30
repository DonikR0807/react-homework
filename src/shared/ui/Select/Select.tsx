import React from "react";
import s from "./Select.module.css";
import classNames from "classnames";
import DropdownIcon from "src/shared/assets/icons/dropdown.svg?react";

interface SelectProps {
  options?: string[];
  currentOption?: string | null;
  label?: string;
  placeholder?: string;
  onOptionSelect: (option: string) => void;
}

export const Select = ({
  options,
  currentOption,
  label,
  placeholder,
  onOptionSelect,
}: SelectProps) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={s.root}>
      {label && <p className={s.label}>{label}</p>}
      <div
        className={classNames(s.selectContainer, open && s.open)}
        onClick={() => setOpen((prev) => !prev)}
      >
        <p className={classNames(s.currentOption, currentOption && s.selected)}>
          {currentOption ? currentOption : placeholder}
        </p>
        <DropdownIcon
          className={classNames(s.dropdown, open && s.open)}
        ></DropdownIcon>
      </div>
      <ul className={classNames(s.optionsList, open && s.open)}>
        {options?.map((option) => (
          <li
            key={option}
            className={s.option}
            onClick={() => {
              setOpen(false);
              onOptionSelect(option);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};
