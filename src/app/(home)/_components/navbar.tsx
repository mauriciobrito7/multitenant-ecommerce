"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavbarSidebar } from "./navbar-sidebar";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const navItems = [
  {
    children: "Home",
    href: "/",
  },
  {
    children: "About",
    href: "/about",
  },
  {
    children: "Features",
    href: "/features",
  },
  {
    children: "Pricing",
    href: "/pricing",
  },
  {
    children: "Contact",
    href: "/contact",
  },
];

interface NavItem {
  children: React.ReactNode;
  href: string;
  isActive: boolean;
}

function NavItem({ children, href, isActive }: NavItem) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: "link" }),
        "bg-transparent hover:bg-transparent rounded-full border-transparent hover:no-underline hover:border-primary px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      {children}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href="/" className="flex items-center pl-6">
        <span className={cn("text-5xl font-semibold", poppins.className)}>funroad</span>
      </Link>

      <NavbarSidebar items={navItems} open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />

      <section className="items-center gap-4 hidden lg:flex">
        {navItems.map((item) => (
          <NavItem key={item.children} {...item} isActive={isActive(item.href)} />
        ))}
      </section>

      <section className="hidden lg:flex">
        <Link
          href="/sign-in"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "border-0 border-l px-12 h-full rounded-none bg-white hover:bg-brand transition-colors text-lg duration-150"
          )}
        >
          Login
        </Link>
        <Link
          href="/sign-up"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "border-0 border-l px-12 h-full rounded-none bg-black text-white hover:bg-brand hover:text-black transition-colors text-lg duration-150"
          )}
        >
          Start selling
        </Link>
      </section>

      <section className="flex items-center justify-center pr-2 lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSidebarOpen(true)}
          className="size-12 border-transparent hover:bg-transparent bg-white duration-150"
        >
          <MenuIcon />
        </Button>
      </section>
    </nav>
  );
}
