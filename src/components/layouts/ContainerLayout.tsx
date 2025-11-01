import { cn } from "@/utils/cn";

export const ContainerLayout = ({ className, children, ...restProps }: React.ComponentProps<"div">) => {
  return (
    <div className={cn("mx-auto w-[min(100vw-3rem,75rem)]", className)} {...restProps}>
      {children}
    </div>
  );
};
