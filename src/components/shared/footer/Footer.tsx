import Link from "next/link";
import ImageLogo from "../ImageLogo";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full border-t border-(--color-stroke)/30 pt-6">
      <div className="mx-auto w-full max-w-6xl p-6">
        <div className="mb-12 flex flex-col items-center justify-between gap-12 md:mb-18 md:flex-row md:gap-0">
          <div className="space-y-2">
            <div className="flex flex-col items-center gap-6 md:flex-row md:gap-4">
              <ImageLogo />
              <p className="text-base text-(--color-stroke)">{siteConfig.email}</p>
            </div>
            <p className="text-center text-base text-(--color-stroke) md:text-start">
              Building open-source tools for developers by developers.
            </p>
          </div>
          <div>
            <p className="text-center text-2xl font-semibold text-white md:text-start">
              Media
            </p>
            <div className="mt-4 flex items-center gap-3">
              {siteConfig.instagram ? (
                <Link
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-(--color-stroke)/30 p-2 transition hover:border-(--color-primery)/40 hover:bg-(--color-surface)"
                >
                  <Image
                    src="/images/InstagramLogo.svg"
                    alt="Instagram page link"
                    width={28}
                    height={28}
                  />
                </Link>
              ) : null}
             <Link
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-(--color-stroke)/30 p-2 transition hover:border-(--color-primery)/40 hover:bg-(--color-surface)"
              >
                <Image
                  src="/images/DiscordLogo.svg"
                  alt="Discord Logo"
                  width={30}
                  height={30}
                />
              </Link>
              <Link
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-(--color-stroke)/30 p-2 transition hover:border-(--color-primery)/40 hover:bg-(--color-surface)"
              >
                <Image
                  src="/images/GithubLogo.png"
                  alt="Github Logo"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
        </div>
        <p className="text-center text-base text-(--color-stroke) [word-spacing:2px]">
          © {year}{" "}
          <Link className="hover:underline" href="/">
            CipherUnit
          </Link>
          {" ❤️‍🔥 "}
          Made for developers by{" "}
          <Link
            className="hover:underline"
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            CipherUnit
          </Link>
        </p>
      </div>
    </footer>
  );
}
