import { ButtonProps } from "@/types/interface";
import React from "react";

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-primary text-white text-nowrap py-2 px-4 gap-2 text-bas font-light flex items-center justify-center transform transition-all duration-300 ease-in-out 
          ${className} 
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          hover:shadow-lg
        `}
    >
      {icon && <span className="text-xl">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
