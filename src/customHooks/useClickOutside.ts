import { useEffect } from "react";

function useClickOutside(
  handler: React.Dispatch<React.SetStateAction<boolean>>,
  selector: string,
  falseOrTrue: boolean
) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (!target.closest(selector)) {
        handler(falseOrTrue);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [handler, selector]);
}

export default useClickOutside;
