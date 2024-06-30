import { InputHTMLAttributes } from "react";
import s from "./Input.module.css";
import ClearIcon from "src/shared/assets/icons/clear.svg?react";
import classNames from "classnames";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  clearBtn?: boolean;
  onClear?: React.MouseEventHandler<SVGSVGElement>;
  id: string;
  className?: string;
  containerStyles?: React.CSSProperties;
  containerClassName?: string;
  labelStyles?: React.CSSProperties;
  labelClassName?: string;
  clearBtnStyles?: React.CSSProperties;
  clearBtnClassName?: string;
}

export const Input = ({
  label,
  icon,
  clearBtn,
  id,
  onClear,
  containerStyles,
  className,
  containerClassName,
  labelClassName,
  labelStyles,
  clearBtnStyles,
  clearBtnClassName,
  ...props
}: InputProps) => {
  return (
    <div>
      {label && (
        <label
          className={classNames(s.label, labelClassName)}
          style={labelStyles}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div
        className={classNames(s.root, containerClassName)}
        style={containerStyles}
      >
        {icon && icon}
        <input id={id} className={classNames(s.input, className)} {...props} />
        {clearBtn && (
          <ClearIcon
            className={classNames(s.clearBtn, clearBtnClassName)}
            onClick={onClear}
            width={16}
            height={16}
            style={clearBtnStyles}
          ></ClearIcon>
        )}
      </div>
    </div>
  );
};
