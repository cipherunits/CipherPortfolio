import Fields from "../shared/Fields";
import Image from "next/image";
import Link from "next/link";
import { absoluteUrl, siteConfig } from "@/lib/site";

function ContactMedia() {
  return (
    <div className="mt-14 mb-8">
      <Fields text="all-media" />
      <p className="mt-4 max-w-2xl text-sm leading-7 text-(--color-stroke)">
        Official Cipher Unit channels for updates, repositories, and community
        contact. Prefer GitHub issues for project-specific discussions and email
        for partnerships.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Link
          className="flex items-center gap-2 rounded-lg border border-(--color-stroke)/40 bg-(--color-background-secondary) px-3 py-2 text-(--color-stroke) transition duration-300 hover:border-(--color-primery)/40 hover:bg-(--color-surface) hover:text-white"
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/GithubLogo.png"
            alt="Cipher Unit GitHub organization"
            title="Cipher Unit on GitHub"
            width={20}
            height={20}
          />
          <p>@{siteConfig.githubOrg}</p>
        </Link>
        <Link
          className="flex items-center gap-2 rounded-lg border border-(--color-stroke)/40 bg-(--color-background-secondary) px-3 py-2 text-(--color-stroke) transition duration-300 hover:border-(--color-primery)/40 hover:bg-(--color-surface) hover:text-white"
          href={`mailto:${siteConfig.email}`}
        >
          <Image
            src="/images/EmailLogo.png"
            alt="Email Cipher Unit"
            title={`Email ${siteConfig.email}`}
            width={20}
            height={20}
          />
          <p>{siteConfig.email}</p>
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
              alt="Cipher Unit Instagram"
              title="Cipher Unit on Instagram"
              width={20}
              height={20}
            />
            <p>@CipherUnit</p>
          </Link>
        ) : null}
        <Link
          href="/team"
          className="flex items-center gap-2 rounded-lg border border-(--color-stroke)/40 bg-(--color-background-secondary) px-3 py-2 text-(--color-stroke) transition duration-300 hover:border-(--color-primery)/40 hover:bg-(--color-surface) hover:text-white"
        >
          <Image
            src={siteConfig.brand.logo}
            overrideSrc={absoluteUrl(siteConfig.brand.logo)}
            alt="Cipher Unit team"
            title="Cipher Unit team page"
            width={20}
            height={20}
          />
          <p>Team page</p>
        </Link>
      </div>
    </div>
  );
}

export default ContactMedia;
