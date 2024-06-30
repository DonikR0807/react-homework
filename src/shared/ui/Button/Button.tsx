import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";
import s from "./Button.module.css";

type ButtonVariants = "text" | "contained" | "outlined";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Button = ({
  children,
  variant = "text",
  className,
  style,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(s.btnBase, s[variant], className)}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};
