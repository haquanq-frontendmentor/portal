import { useEffect, useRef } from "react";

const focusableSelector =
  'a[href], button, input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])';

export const FocusTrap = ({ children, ...restProps }: React.ComponentProps<"div">) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const container = ref.current as HTMLDivElement;

    const focusables = container.querySelectorAll(focusableSelector) as NodeListOf<HTMLElement & { focus: () => void }>;

    const firstFocusable = focusables[0];
    const lastFocusable = focusables[focusables.length - 1];

    firstFocusable.addEventListener("keydown", (e) => {
      if (e.shiftKey && e.key === "Tab") {
        e.preventDefault();
        lastFocusable.focus();
      }
    });

    lastFocusable.addEventListener("keydown", (e) => {
      if (!e.shiftKey && e.key === "Tab") {
        e.preventDefault();
        firstFocusable.focus();
      }
    });
  }, []);

  return (
    <div ref={ref} {...restProps}>
      {children}
    </div>
  );
};
