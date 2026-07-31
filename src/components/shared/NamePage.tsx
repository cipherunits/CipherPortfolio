"use client";

import { usePathname } from "next/navigation";

export default function NamePage() {
  const pathname = usePathname();
  const name = pathname.split("/").filter(Boolean).pop() ?? "page";

  return (
    <div className="flex items-center gap-4 font-medium text-2xl md:text-3xl text-white">
      <div className="flex items-center gap-2 md:w-auto w-[60%]">
        <span className="text-(--color-primery)" aria-hidden>
          /
        </span>
        <h1 className="capitalize">{name}</h1>
      </div>
    </div>
  );
}
