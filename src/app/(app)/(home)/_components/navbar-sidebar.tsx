"use client";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface NavbarSidebar {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NavbarSidebar({ items, open, onOpenChange }: NavbarSidebar) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center">
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto gap-2 h-full pb-2">
          {items.map((item) => (
            <Link
              onClick={() => onOpenChange(false)}
              key={item.href}
              href={item.href}
              className="w-full text-left p-4 hover:bg-foreground hover:text-background flex items-center text-base font-medium duration-150"
            >
              {item.children}
            </Link>
          ))}

          <section className="border-t">
            <Link
              onClick={() => onOpenChange(false)}
              href="/sign-in"
              className="w-full text-left p-4 hover:bg-foreground hover:text-background flex items-center text-base font-medium duration-150"
            >
              Login
            </Link>
            <Link
              onClick={() => onOpenChange(false)}
              href="/sign-up"
              className="w-full text-left p-4 hover:bg-foreground hover:text-background flex items-center text-base font-medium duration-150"
            >
              Start selling
            </Link>
          </section>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
