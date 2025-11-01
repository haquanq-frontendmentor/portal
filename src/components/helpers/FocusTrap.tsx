import { useEffect, useRef } from "react";

const focusableSelector =
  'a[href], button, input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])';

interface FocusTrapProps extends React.ComponentProps<"div"> {
  isDisabled?: boolean;
}

export const FocusTrap = ({ isDisabled = false, children, ...restProps }: FocusTrapProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const container = ref.current as HTMLDivElement;

    const focusableElements = container.querySelectorAll(focusableSelector) as NodeListOf<
      HTMLElement & { focus: () => void }
    >;

    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    const handleFirstFocusableElementKeydown = (e: KeyboardEvent) => {
      if (isDisabled) return;
      if (e.shiftKey && e.key === "Tab") {
        e.preventDefault();
        lastFocusableElement.focus();
      }
    };

    const handleLastFocusableElementKeydown = (e: KeyboardEvent) => {
      if (isDisabled) return;
      if (!e.shiftKey && e.key === "Tab") {
        e.preventDefault();
        firstFocusableElement.focus();
      }
    };

    firstFocusableElement.addEventListener("keydown", handleFirstFocusableElementKeydown);
    lastFocusableElement.addEventListener("keydown", handleLastFocusableElementKeydown);
    return () => {
      firstFocusableElement.removeEventListener("keydown", handleFirstFocusableElementKeydown);
      lastFocusableElement.removeEventListener("keydown", handleLastFocusableElementKeydown);
    };
  }, [isDisabled]);

  return (
    <div ref={ref} {...restProps}>
      {children}
    </div>
  );
};
