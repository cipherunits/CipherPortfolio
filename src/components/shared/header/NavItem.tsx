import { navItems } from "./Item";

export default function NavItem() {
  return navItems.map((item: { name: string }) => (
    <li key={item.name} className="flex gap-1 text-gray-400 hover:text-white transition-colors cursor-pointer">
      <span className="text-(--color-primery)">#</span>
      <p>{item.name}</p>
    </li>
  ));
}

