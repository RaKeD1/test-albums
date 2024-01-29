import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";



export const Button: FC< ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { children, ...otherProps } = props;
  return (
    <button
      className={cls.Button}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
