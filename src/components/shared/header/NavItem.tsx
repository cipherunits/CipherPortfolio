import Link from "next/link";
import { navItems } from "./Item";
import { usePathname } from "next/navigation";

export default function NavItem() {
  const pathname = usePathname();

  const name = pathname === "/" ? "home" : pathname.split("/").filter(Boolean).pop();

  return navItems.map((item: { name: string; link: string }) => {
    const isActive = name === item.name;

    return (
      <li
        key={item.name}
        className="text-gray-400 hover:text-white transition-colors cursor-pointer"
      >
        <Link className="flex gap-1" href={item.link}>
          <span className="text-(--color-primery)">#</span>
          <p className={`${isActive ? "text-white" : ""}`}>{item.name}</p>
        </Link>
      </li>
    );
  });
} 