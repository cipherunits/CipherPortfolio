import Fields from "../shared/Fields";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

function ContactMedia() {
  return (
    <div className="mt-14 mb-8">
      <Fields text="all-media" />
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Link
          className="flex items-center gap-2 rounded-lg border border-(--color-stroke)/40 bg-(--color-background-secondary) px-3 py-2 text-(--color-stroke) transition duration-300 hover:border-(--color-primery)/40 hover:bg-(--color-surface) hover:text-white"
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/GithubLogo.png"
            alt="Github Logo"
            width={20}
            height={20}
          />
          <p>@CipherUnit</p>
        </Link>
        <Link
          className="flex items-center gap-2 rounded-lg border border-(--color-stroke)/40 bg-(--color-background-secondary) px-3 py-2 text-(--color-stroke) transition duration-300 hover:border-(--color-primery)/40 hover:bg-(--color-surface) hover:text-white"
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/DiscordLogo.svg"
            alt="Discord Logo"
            width={20}
            height={20}
          />
          <p>@CipherUnit</p>
        </Link>
        {siteConfig.instagram ? (
          <Link
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-(--color-stroke)/40 bg-(--color-background-secondary) px-3 py-2 text-(--color-stroke) transition duration-300 hover:border-(--color-primery)/40 hover:bg-(--color-surface) hover:text-white"
          >
            <Image
              src="/images/InstagramLogo.svg"
              alt="Instagram page link"
              width={20}
              height={20}
            />
            <p>@CipherUnit</p>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default ContactMedia;
