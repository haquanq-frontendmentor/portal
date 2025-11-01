import { cn } from "@/utils/cn";
import { createElement } from "react";

interface ButtonProps extends React.ComponentProps<"button"> {
  asWrapper?: boolean;
}

export const Button = ({ asWrapper, children, className, ...restProps }: ButtonProps) => {
  const baseClass = cn(
    "rounded-lg bg-gray-900 px-6 py-3 flex items-center text-white w-fit justify-center gap-2 font-medium tracking-wide transition-opacity hover:opacity-75",
    className,
  );

  if (asWrapper) {
    return createElement("span", { className: baseClass, children });
  }

  return (
    <button className={baseClass} {...restProps}>
      {children}
    </button>
  );
};
