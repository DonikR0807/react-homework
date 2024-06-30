import classNames from "classnames";
import s from "./Loader.module.css";
import LoaderIcon from "src/shared/assets/icons/loader.svg?react";

export const Loader = ({ isActive = false }) => {
  return (
    <LoaderIcon
      className={classNames(s.loader, isActive ? s.active : "")}
    ></LoaderIcon>
  );
};
