"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Category } from "@/payload-types";
import { useDropdownPosition } from "./use-dropdown-position";
import { SubcategoryMenu } from "./subcategory-menu";

interface Props {
  category: Category;
  isActive: boolean;
  isNavigationHovered: boolean;
}

export function CategoryDropdown({ category, isActive, isNavigationHovered }: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hasSubcategories = category.subcategories && category.subcategories?.length > 0;
  const { getDropdownPosition } = useDropdownPosition(dropdownRef);

  const onMouseEnter = () => {
    if (hasSubcategories) {
      setIsDropdownOpen(true);
    }
  };

  const onMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const dropdownPosition = getDropdownPosition();

  return (
    <div className="relative" ref={dropdownRef} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="relative">
        <Button
          variant="elevated"
          className={cn(
            "h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-background hover:border-primary text-foreground",
            isActive && !isNavigationHovered && "bg-background border-primary"
          )}
        >
          {category.name}
        </Button>
        {hasSubcategories && (
          <div
            className={cn(
              "opacity-0 absolute -bottom-3 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-foreground left-1/2 -translate-x-1/2",
              isDropdownOpen && "opacity-100"
            )}
          />
        )}
      </div>

      <SubcategoryMenu category={category} position={dropdownPosition} isOpen={isDropdownOpen} />
    </div>
  );
}
