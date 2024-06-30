import { Button } from "../Button/Button";
import NextIcon from "src/shared/assets/icons/next.svg?react";
import PrevIcon from "src/shared/assets/icons/prev.svg?react";
import s from "./Pagination.module.css";
import classNames from "classnames";

interface PaginationProps {
  currentPage: number;
  onPrev: () => void;
  onNext: () => void;
  totalPages: number;
}

const btnStyles = {
  borderRadius: "50%",
  padding: 8,
  width: 32,
  height: 32,
  boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.3)",
};

export const Pagination = ({
  onPrev,
  onNext,
  totalPages,
  currentPage,
}: PaginationProps) => {
  const prevBtnDisabled = currentPage === 1;
  const nextBtnDisabled = currentPage === totalPages;

  return (
    <div className={s.root}>
      <Button
        variant="text"
        style={{
          ...btnStyles,
          backgroundColor: prevBtnDisabled ? "#e9eaed" : "var(--white-text)",
          cursor: prevBtnDisabled ? "not-allowed" : "pointer",
        }}
        disabled={prevBtnDisabled}
        onClick={() => {
          if (!prevBtnDisabled) {
            onPrev();
          }
        }}
      >
        <PrevIcon
          width={16}
          height={16}
          className={classNames(s.icon, prevBtnDisabled && s.disabled)}
        ></PrevIcon>
      </Button>
      <p className={s.currentPage}>{currentPage}</p>
      <Button
        variant="text"
        style={{
          ...btnStyles,
          backgroundColor: nextBtnDisabled ? "#e9eaed" : "var(--white-text)",
          cursor: nextBtnDisabled ? "not-allowed" : "pointer",
        }}
        disabled={nextBtnDisabled}
        onClick={() => {
          if (!nextBtnDisabled) {
            onNext();
          }
        }}
      >
        <NextIcon
          width={16}
          height={16}
          className={classNames(s.icon, nextBtnDisabled && s.disabled)}
        ></NextIcon>
      </Button>
    </div>
  );
};
