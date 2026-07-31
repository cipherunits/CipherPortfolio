"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ImageLogo from "../ImageLogo";
import NavItem from "./NavItem";
import { siteConfig } from "@/lib/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full max-w-6xl p-6 mx-auto">
      {!isOpen && (
        <div className="w-full flex justify-between items-center">
          <ImageLogo />
          <nav aria-label="Primary" className="flex items-center gap-6">
            <ul className="md:flex hidden items-center gap-6">
              <NavItem />
            </ul>
            <button
              type="button"
              className="md:hidden cursor-pointer"
              aria-label="Open menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Image
                src="/images/MenuIcon.png"
                alt=""
                width={25}
                height={25}
                aria-hidden
              />
            </button>
          </nav>
        </div>
      )}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-(--color-bg) p-6">
          <div className="w-full flex justify-between items-center">
            <ImageLogo />
            <button
              type="button"
              className="cursor-pointer"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src="/images/CloseIcon.png"
                alt=""
                width={25}
                height={25}
                aria-hidden
              />
            </button>
          </div>
          <nav aria-label="Mobile">
            <ul className="mt-20 text-3xl flex flex-col items-start gap-8">
              <NavItem onNavigate={() => setIsOpen(false)} />
            </ul>
          </nav>
          <div className="absolute flex justify-center items-center gap-4 bottom-10 right-0 left-0 mx-auto w-max">
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cipher Unit on GitHub"
            >
              <Image
                src={siteConfig.brand.logo}
                alt=""
                width={38}
                height={38}
                aria-hidden
              />
            </Link>
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub organization"
            >
              <Image
                src="/images/GithubLogo.png"
                alt=""
                width={40}
                height={40}
                aria-hidden
              />
            </Link>
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open source on Linux"
            >
              <Image
                src="/images/LinuxLogoT.png"
                alt=""
                width={46}
                height={46}
                aria-hidden
              />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
