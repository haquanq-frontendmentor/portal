"use client";

import { cn } from "@/utils/cn";
import { FlaskConicalIcon, type LucideIcon, MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FocusTrap } from "../helpers/FocusTrap";

type RouteMetadata = {
  label: string;
  to: string;
  icon: LucideIcon | null;
};

const routes: RouteMetadata[] = [
  { label: "Home", to: "/", icon: null },
  { label: "Solutions", to: "/solutions", icon: null },
  { label: "snippets", to: "/snippets", icon: FlaskConicalIcon },
];

const matchTabletViewport = () => window.matchMedia("(min-width:48em)").matches;

export const Nav = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const handleMenuButtonClick = () => {
    setMenuOpen((v) => !v);
  };

  const handleMenuBackgroundClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleMenuBackdropClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuOpen(false);
  };

  const handleMenuBackgroundKeydown = (e: React.KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === "Escape") {
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    }
  };

  const handleAppResize = () => {
    if (menuOpen && matchTabletViewport()) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    window.addEventListener("resize", handleAppResize);
    return () => window.removeEventListener("resize", handleAppResize);
  }, []);

  return (
    <nav className="flex justify-center md:grow">
      <button
        className="flex items-center text-gray-900 md:hidden"
        type="button"
        aria-label="Mobile menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={handleMenuButtonClick}
        ref={menuButtonRef}
      >
        {menuOpen ? <XIcon /> : <MenuIcon />}
      </button>
      <FocusTrap isDisabled={!menuOpen}>
        <div
          className={cn(
            "absolute inset-x-0 top-full hidden h-[calc(100vh-100%)] bg-gray-900/25",
            menuOpen && "block",
            "md:static md:inset-0 md:block md:h-auto md:bg-transparent",
          )}
          id="mobile-menu"
          onClick={handleMenuBackdropClick}
        >
          <div
            className="mx-auto my-6 w-[min(100vw-3rem,25rem)] rounded-lg bg-white p-6 md:m-auto md:w-auto md:p-0"
            onClick={handleMenuBackgroundClick}
            onKeyDown={handleMenuBackgroundKeydown}
          >
            <ul className="flex flex-col items-center gap-4 text-lg font-medium text-gray-500 md:flex-row md:gap-6">
              {routes.map((v, index) => (
                <li className="" key={"nav-link-" + index}>
                  <Link
                    className={cn(
                      "group relative flex items-center gap-2 px-1 capitalize hover:underline",
                      pathname === v.to && "text-gray-900",
                      v.icon && "pr-0",
                    )}
                    href={v.to}
                  >
                    {v.label}
                    {v.icon && <v.icon className="h-5" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FocusTrap>
    </nav>
  );
};
