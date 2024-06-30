import { ReactNode } from "react";
import s from "./Modal.module.css";
import { createPortal } from "react-dom";
import { Button } from "../Button/Button";
import CloseIcon from "src/shared/assets/icons/close.svg?react";
import classNames from "classnames";

interface ModalProps {
  children?: ReactNode;
  title: string;
  open: boolean;
  onClose: () => void;
}

export const Modal = ({ children, title, open, onClose }: ModalProps) => {
  return createPortal(
    <div className={classNames(s.root, open ? s.open : "")}>
      <div className={s.modal}>
        <div className={s.titleContainer}>
          <p className={s.title}>{title}</p>
          <Button
            onClick={onClose}
            variant="text"
            style={{
              padding: 0,
            }}
          >
            <CloseIcon width={16} height={16}></CloseIcon>
          </Button>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("root")!,
  );
};
