import Image from "next/image";
import Link from "next/link";
import { mailtoHref, siteConfig } from "@/lib/site";

export default function ContactBox() {
  return (
    <div className="space-y-4 rounded-xl border border-(--color-stroke)/50 bg-(--color-background-secondary) p-5 shadow-[0_12px_32px_-24px_rgba(0,0,0,0.5)]">
      <h2 className="font-semibold text-white">Message us here</h2>
      <div className="flex items-center justify-start gap-2 text-(--color-stroke)">
        <Image
          src="/images/GithubLogo.png"
          alt=""
          width={24}
          height={24}
          aria-hidden
        />
        <Link
          className="rounded-sm transition duration-300 hover:text-white hover:underline"
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          cipherunits
        </Link>
      </div>
      <div className="flex items-center justify-start gap-2 text-(--color-stroke)">
        <Image
          src="/images/EmailLogo.png"
          alt=""
          width={24}
          height={24}
          aria-hidden
        />
        <Link
          className="rounded-sm transition duration-300 hover:text-white hover:underline"
          href={mailtoHref()}
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteConfig.email}
        </Link>
      </div>
    </div>
  );
}
