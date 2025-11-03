import { cn } from "@/utils/cn";
import { createElement } from "react";

interface ButtonProps extends React.ComponentProps<"button"> {
  asWrapper?: boolean;
  size?: "large" | "medium" | "small";
  variant?: "primary" | "secondary";
}

export const Button = ({
  asWrapper,
  children,
  className,
  size = "large",
  variant = "primary",
  ...restProps
}: ButtonProps) => {
  const baseClass = cn(
    "flex items-center w-fit justify-center gap-2 font-medium tracking-wide inset-ring transition-[color,background-color,box-shadow]",
    {
      "px-6 py-3 rounded-lg text-base": size === "large",
      "py-2 px-5 rounded-lg text-base": size === "medium",
      "px-4 py-1 rounded-md text-sm": size === "small",
    },
    {
      "bg-gray-900 text-white inset-ring-gray-900 hover:bg-gray-50 hover:text-gray-900": variant === "primary",
      "bg-gray-50 text-gray-900 inset-ring-gray-100 hover:inset-ring-gray-900": variant === "secondary",
    },
    className,
  );

  if (asWrapper) {
    return createElement("span", { className: baseClass, children, role: "presentation" });
  }

  return (
    <button className={baseClass} {...restProps}>
      {children}
    </button>
  );
};
