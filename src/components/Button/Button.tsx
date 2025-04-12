import clsx from "clsx";
import "./styles.scss";
import { ReactNode } from "react";

const baseClassName = "button";

interface ButtonProps {
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ onClick, disabled, children, className }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        `${baseClassName}`,
        {
          [`${baseClassName}--disabled`]: disabled,
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
