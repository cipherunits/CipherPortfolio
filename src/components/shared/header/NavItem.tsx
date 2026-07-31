"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./Item";

export default function NavItem({
  onNavigate,
  staggered = false,
  open = false,
}: {
  onNavigate?: () => void;
  staggered?: boolean;
  open?: boolean;
}) {
  const pathname = usePathname() || "/";
  const name =
    pathname === "/" ? "home" : pathname.split("/").filter(Boolean).pop();

  return navItems.map((item, index) => {
    const isActive = name === item.name;

    return (
      <li
        key={item.name}
        className={
          staggered
            ? `transition-[opacity,transform] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                open
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`
            : undefined
        }
        style={
          staggered
            ? {
                transitionDelay: open ? `${120 + index * 55}ms` : "0ms",
              }
            : undefined
        }
      >
        <Link
          className={`
            flex items-center gap-1 rounded-md px-3 py-2
            text-(--color-stroke) transition-colors
            hover:bg-(--color-surface) hover:text-white
            ${isActive ? "bg-(--color-surface) text-white" : ""}
          `}
          href={item.link}
          {...(item.link.startsWith("http")
            ? { target: "_blank" as const, rel: "noopener noreferrer" }
            : {})}
          {...(onNavigate ? { onClick: onNavigate } : {})}
        >
          <span className="text-(--color-primery)">#</span>
          <span>{item.name}</span>
        </Link>
      </li>
    );
  });
}
