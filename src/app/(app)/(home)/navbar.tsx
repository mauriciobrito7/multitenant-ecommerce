"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

interface NavItemProps {
  label: string;
  href: string;
  isActive: boolean;
}

function NavItem({ label, href, isActive }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: "link" }),
        "bg-transparent hover:bg-transparent rounded-full border-transparent hover:no-underline hover:border-primary px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-background">
      <Link href="/" className="flex items-center pl-6">
        <span className={cn("text-5xl font-semibold", poppins.className)}>funroad</span>
      </Link>

      <section className="items-center gap-4 hidden lg:flex">
        {navItems.map((item) => (
          <NavItem key={item.label} {...item} isActive={isActive(item.href)} />
        ))}
      </section>

      <section className="hidden lg:flex">
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "border-0 border-l px-12 h-full rounded-none bg-background hover:bg-brand transition-colors text-lg duration-150"
          )}
        >
          Login
        </Link>
        <Link
          href="/register"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "border-0 border-l px-12 h-full rounded-none bg-black text-white hover:bg-brand hover:text-black transition-colors text-lg duration-150"
          )}
        >
          Start Selling
        </Link>
      </section>
    </nav>
  );
}
