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
      <li
        key={item.name}
        className="text-gray-400 hover:text-white transition-colors cursor-pointer"
      >
        <Link
          className="flex gap-1"
          href={item.link}
          {...(item.link.startsWith("http")
            ? { target: "_blank" as const, rel: "noopener noreferrer" }
            : {})}
          {...(onNavigate ? { onClick: onNavigate } : {})}
        >
          <span className="text-(--color-primery)">#</span>
          <span className={`${isActive ? "text-white" : ""}`}>{item.name}</span>
        </Link>
      </li>
    );
  });
}
