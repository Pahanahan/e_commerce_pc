import { useEffect } from "react";

function useClickOutside(
  handler: React.Dispatch<React.SetStateAction<boolean>>,
  triggerSelector: string,
  falseOrTrue: boolean,
  safeSelector?: string
) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (!target.closest(triggerSelector)) {
        if (safeSelector && !target.closest(safeSelector)) {
          handler(falseOrTrue);
        } else if (!safeSelector) {
          handler(falseOrTrue);
        } else {
          return;
        }
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [handler, triggerSelector, falseOrTrue, safeSelector]);
}

export default useClickOutside;
