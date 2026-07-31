"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./Item";

export default function NavItem({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  const pathname = usePathname() || "/";
  const name =
    pathname === "/" ? "home" : pathname.split("/").filter(Boolean).pop();

  return navItems.map((item) => {
    const isActive = name === item.name;

    return (
      <li key={item.name}>
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
