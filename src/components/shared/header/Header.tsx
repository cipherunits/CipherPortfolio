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
          <section>
            <ul className="md:flex hidden items-center gap-6">
              <NavItem />
            </ul>
            <Image
              src="/images/MenuIcon.png"
              alt="Menu Icon"
              width={25}
              height={25}
              className="md:hidden cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          </section>
        </div>
      )}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-(--color-bg) p-6">
          <div className="w-full flex justify-between items-center">
            <ImageLogo />
            <Image
              src="/images/CloseIcon.png"
              alt="Close Icon"
              width={25}
              height={25}
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <ul className="mt-20 text-3xl flex flex-col items-start gap-8">
            <NavItem />
          </ul>
          <div className="absolute flex justify-center items-center gap-4 bottom-10 right-0 left-0 mx-auto w-max">
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={siteConfig.brand.alt}
                alt="CipherUnit Logo — Cipher Unit Open Source Developer Tools and Engineering Collective"
                width={38}
                height={38}
              />
            </Link>
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/GithubLogo.png"
                alt="Github Logo"
                width={40}
                height={40}
              />
            </Link>
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/LinuxLogoT.png"
                alt="Linux Logo"
                width={46}
                height={46}
              />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
