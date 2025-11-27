const DROPDOWN_WIDTH = 240; // Width of dropdown (w-60 = 15rem = 240px)
const VIEWPORT_PADDING = 16; // 16px padding

export function useDropdownPosition(dropdownRef: React.RefObject<HTMLDivElement | null>) {
  const calculateInitialLeftPosition = (rect: DOMRect): number => {
    // Calculate the initial position
    return rect.left + window.scrollX;
  };

  const adjusRightEdgeOverflow = (left: number, rect: DOMRect): number => {
    // check if dropdown would go off the right edge of the viewport
    if (left + DROPDOWN_WIDTH > window.innerWidth) {
      // Align to right edge of button instead
      left = rect.right - window.scrollX - DROPDOWN_WIDTH;

      // if still off-screen, align to the right edge of viewport with some padding
      if (left < 0) {
        left = window.innerWidth - DROPDOWN_WIDTH - VIEWPORT_PADDING;
      }
    }

    return left;
  };

  const adjusLeftEdgeOverflow = (left: number): number => {
    // ensure dropdown doesn't go off left edge
    if (left < 0) {
      left = VIEWPORT_PADDING;
    }

    return left;
  };

  const getDropdownPosition = () => {
    if (!dropdownRef.current)
      return {
        top: 0,
        left: 0,
      };

    const rect = dropdownRef.current.getBoundingClientRect();
    const top = rect.bottom + window.scrollY;

    let left = calculateInitialLeftPosition(rect);
    left = adjusRightEdgeOverflow(left, rect);
    left = adjusLeftEdgeOverflow(left);

    return {
      top,
      left,
    };
  };

  return {
    getDropdownPosition,
  };
}
