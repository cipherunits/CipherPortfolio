"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ImageLogo from "../ImageLogo";
import NavItem from "./NavItem";
import { siteConfig } from "@/lib/site";

const MENU_ANIMATION_MS = 280;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
    setIsVisible(true);
  };

  const closeMenu = useCallback(() => {
    setIsAnimatingIn(false);
    window.setTimeout(() => {
      setIsVisible(false);
      setIsOpen(false);
    }, MENU_ANIMATION_MS);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsAnimatingIn(true));
    });

    return () => cancelAnimationFrame(id);
  }, [isVisible]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeMenu]);

  const mobileMenu = isVisible
      ? createPortal(
          <div
            className="fixed inset-0 z-[100] bg-(--color-bg)"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div
              className={`flex h-full flex-col p-6 transition-transform ease-out ${
                isAnimatingIn ? "translate-y-0" : "-translate-y-4"
              }`}
              style={{
                transitionDuration: `${MENU_ANIMATION_MS}ms`,
                opacity: isAnimatingIn ? 1 : 0,
                transitionProperty: "transform, opacity",
              }}
            >
              <div className="flex w-full items-center justify-between">
                <ImageLogo />
                <button
                  type="button"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-(--color-stroke)/30 transition hover:bg-(--color-surface)"
                  aria-label="Close menu"
                  onClick={closeMenu}
                >
                  <Image
                    src="/images/CloseIcon.png"
                    alt=""
                    width={22}
                    height={22}
                    aria-hidden
                  />
                </button>
              </div>

              <nav aria-label="Mobile" className="mt-16">
                <ul className="flex flex-col items-start gap-3 text-3xl">
                  <NavItem onNavigate={closeMenu} />
                </ul>
              </nav>

              <div className="mt-auto mb-4 flex w-full items-center justify-center gap-4">
                <Link
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Cipher Unit on GitHub"
                  className="rounded-md p-2 transition hover:bg-(--color-surface)"
                >
                  <Image
                    src={siteConfig.brand.alt}
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
                  className="rounded-md p-2 transition hover:bg-(--color-surface)"
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
                  className="rounded-md p-2 transition hover:bg-(--color-surface)"
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
          </div>,
          document.body,
        )
      : null;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-(--color-stroke)/15 bg-(--color-bg)/80 backdrop-blur-md">
      <div className="mx-auto w-full max-w-6xl p-3">
        <div className="flex w-full items-center justify-between">
          <ImageLogo />
          <nav aria-label="Primary" className="flex items-center gap-2 sm:gap-4">
            <ul className="hidden items-center gap-1 md:flex">
              <NavItem />
            </ul>
            <button
              type="button"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-transparent transition hover:border-(--color-stroke)/40 hover:bg-(--color-surface) md:hidden"
              aria-label="Open menu"
              aria-expanded={isOpen}
              onClick={openMenu}
            >
              <Image
                src="/images/MenuIcon.png"
                alt=""
                width={22}
                height={22}
                aria-hidden
              />
            </button>
          </nav>
        </div>
      </div>
      {mobileMenu}
    </header>
  );
}
