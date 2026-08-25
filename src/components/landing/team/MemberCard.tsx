import Image from "next/image";
import Link from "next/link";

import type { TeamMember } from "@/lib/team";
import {
  seoAvatarUrl,
  teamAvatarPath,
  teamAvatarUrl,
} from "@/lib/seo-images";
import { siteConfig } from "@/lib/site";

type MemberCardProps = TeamMember & {
  compact?: boolean;
};

export default function MemberCard({
  login,
  name,
  avatarUrl,
  htmlUrl,
  bio,
  compact = false,
}: MemberCardProps) {
  const label = `${name} (@${login}) — Cipher Unit GitHub member`;
  const siteAvatar = teamAvatarPath({ login });
  const absoluteAvatar = teamAvatarUrl({ login });
  const size = compact ? 72 : 112;

  return (
    <article
      itemScope
      itemType="https://schema.org/Person"
      className={`
        group flex h-full w-full flex-col items-center text-center
        rounded-xl border border-(--color-stroke)/50
        bg-(--color-background-secondary)
        transition-all duration-300
        hover:-translate-y-1
        hover:border-(--color-primery)/40
        hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.55)]
        ${compact ? "gap-3 p-4" : "gap-4 p-6"}
      `}
    >
      <Link
        href={htmlUrl}
        target="_blank"
        rel="noopener noreferrer me"
        aria-label={`Open ${name}'s GitHub profile (@${login})`}
        title={`${name} on GitHub`}
        className="relative block shrink-0 overflow-hidden rounded-lg border border-(--color-stroke)/50 transition group-hover:border-(--color-primery)"
        itemProp="url"
      >
        <Image
          src={seoAvatarUrl(avatarUrl)}
          overrideSrc={siteAvatar}
          alt={`${name} (@${login}) — public GitHub avatar, Cipher Unit (CipherUnit) engineering team`}
          title={`${name} (@${login}) — Cipher Unit team member`}
          width={size}
          height={size}
          sizes={`${size}px`}
          className="object-cover"
          itemProp="image"
        />
        <meta itemProp="image" content={absoluteAvatar} />
      </Link>

      <div className="min-w-0 space-y-1">
        <h3
          itemProp="name"
          className={`truncate font-semibold text-white ${compact ? "text-sm" : "text-lg"}`}
        >
          <Link
            href={htmlUrl}
            target="_blank"
            rel="noopener noreferrer me"
            className="hover:underline"
          >
            {name}
          </Link>
        </h3>

        <p className="truncate text-xs text-(--color-primery)">
          <Link
            href={htmlUrl}
            target="_blank"
            rel="noopener noreferrer me"
            itemProp="sameAs"
            className="hover:underline"
          >
            @{login}
          </Link>
        </p>

        {!compact && bio ? (
          <p
            itemProp="description"
            className="mt-2 line-clamp-4 text-sm leading-6 text-(--color-stroke)"
          >
            {bio}
          </p>
        ) : (
          <meta
            itemProp="description"
            content={`${name} is a public GitHub member of ${siteConfig.name} (@${login}).`}
          />
        )}

        <meta itemProp="jobTitle" content="Open Source Engineer" />
        <meta itemProp="worksFor" content={siteConfig.name} />
        <link itemProp="affiliation" href={siteConfig.url} />
      </div>

      {!compact ? (
        <Link
          href={htmlUrl}
          target="_blank"
          rel="noopener noreferrer me"
          className="mt-auto rounded-md px-2 py-1 text-sm text-(--color-stroke) transition hover:bg-(--color-surface) hover:text-white"
          aria-label={`Visit ${name} on GitHub`}
        >
          {login} →
        </Link>
      ) : null}

      <span className="sr-only">{label}</span>
    </article>
  );
}
