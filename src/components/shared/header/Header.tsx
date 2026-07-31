"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ImageLogo from "../ImageLogo";
import NavItem from "./NavItem";
import { siteConfig } from "@/lib/site";

const MENU_ANIMATION_MS = 360;
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const openMenu = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setIsOpen(true);
    setIsVisible(true);
  };

  const closeMenu = useCallback(() => {
    setIsAnimatingIn(false);
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
    }
    closeTimer.current = window.setTimeout(() => {
      setIsVisible(false);
      setIsOpen(false);
      closeTimer.current = null;
    }, MENU_ANIMATION_MS);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        window.clearTimeout(closeTimer.current);
      }
    };
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
          className="fixed inset-0 z-[100] overflow-hidden bg-(--color-bg)"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          style={{
            transform: isAnimatingIn ? "translateY(0%)" : "translateY(-100%)",
            transition: `transform ${MENU_ANIMATION_MS}ms ${EASE}`,
            willChange: "transform",
          }}
        >
          <div className="mx-auto flex h-full max-w-6xl flex-col p-6">
            <div
              className="flex w-full items-center justify-between"
              style={{
                opacity: isAnimatingIn ? 1 : 0,
                transform: isAnimatingIn ? "translateY(0)" : "translateY(-8px)",
                transition: `opacity ${MENU_ANIMATION_MS}ms ${EASE}, transform ${MENU_ANIMATION_MS}ms ${EASE}`,
                transitionDelay: isAnimatingIn ? "60ms" : "0ms",
              }}
            >
              <ImageLogo />
              <button
                type="button"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-(--color-stroke)/30 transition hover:bg-(--color-surface) active:scale-95"
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
                <NavItem
                  onNavigate={closeMenu}
                  staggered
                  open={isAnimatingIn}
                />
              </ul>
            </nav>

            <div
              className="mt-auto mb-4 flex w-full items-center justify-center gap-4"
              style={{
                opacity: isAnimatingIn ? 1 : 0,
                transform: isAnimatingIn ? "translateY(0)" : "translateY(12px)",
                transition: `opacity ${MENU_ANIMATION_MS}ms ${EASE}, transform ${MENU_ANIMATION_MS}ms ${EASE}`,
                transitionDelay: isAnimatingIn ? "220ms" : "0ms",
              }}
            >
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
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-transparent transition hover:border-(--color-stroke)/40 hover:bg-(--color-surface) active:scale-95 md:hidden"
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
