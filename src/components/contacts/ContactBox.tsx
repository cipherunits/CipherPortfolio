import Image from "next/image";
import Link from "next/link";
import { mailtoHref, siteConfig } from "@/lib/site";

export default function ContactBox() {
  return (
    <div className="border border-(--color-stroke) p-4 space-y-4">
      <h2 className="text-white font-semibold">Message us here</h2>
      <div className="flex justify-start items-center gap-2 text-(--color-stroke)">
        <Image
          src="/images/GithubLogo.png"
          alt=""
          width={24}
          height={24}
          aria-hidden
        />
        <Link
          className="hover:underline duration-300"
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          cipherunits
        </Link>
      </div>
      <div className="flex justify-start items-center gap-2 text-(--color-stroke)">
        <Image
          src="/images/EmailLogo.png"
          alt=""
          width={24}
          height={24}
          aria-hidden
        />
        <Link
          className="hover:underline duration-300"
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
