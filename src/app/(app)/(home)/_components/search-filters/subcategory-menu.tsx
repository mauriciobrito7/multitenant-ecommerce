import { Category } from "@/payload-types";
import Link from "next/link";

interface Props {
  category: Category;
  position: {
    top: number;
    left: number;
  };
  isOpen: boolean;
}

export function SubcategoryMenu({ category, position, isOpen }: Props) {
  if (!isOpen || !category.subcategories || category.subcategories?.length === 0) return null;

  const backgroundColor = category.color || "bg-background";

  return (
    <div className="fixed z-50" style={{ top: position.top, left: position.left }}>
      {/* Invisible bridge to maintain hover */}
      <div className="h-3 w-60" />

      <div
        className="w-60 text-foreground rounded-md overflow-hidden border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-x-[2px] -translate-y-[2px]"
        style={{ backgroundColor }}
      >
        <div>
          {category.subcategories?.map((subcategory: Category) => (
            <Link
              className="w-full text-left p-4 hover:bg-foreground hover:text-background flex justify-between items-center underline font-medium"
              key={subcategory.id}
              href={`/search?category=${subcategory.id}`}
            >
              {subcategory.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
