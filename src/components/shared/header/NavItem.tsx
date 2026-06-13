import Link from "next/link";
import { navItems } from "./Item";

export default function NavItem() {
  return navItems.map((item: { name: string, link:string }) => (
    <li
      key={item.name}
      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
    >
      <Link className="flex gap-1" href={item.link}>
        <span className="text-(--color-primery)">#</span>
        <p>{item.name}</p>
      </Link>
    </li>
  ));
}
