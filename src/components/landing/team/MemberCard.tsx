import Image from "next/image";
import Link from "next/link";

import type { TeamMember } from "@/lib/team";
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

  return (
    <article
      itemScope
      itemType="https://schema.org/Person"
      className={`
        group flex h-full w-full flex-col items-center text-center
        border border-(--color-stroke)
        bg-(--color-background-secondary)
        transition-all duration-300
        hover:-translate-y-1
        hover:border-white/20
        ${compact ? "gap-3 p-4" : "gap-4 p-6"}
      `}
    >
      <Link
        href={htmlUrl}
        target="_blank"
        rel="noopener noreferrer me"
        aria-label={`Open ${name}'s GitHub profile (@${login})`}
        title={`${name} on GitHub`}
        className="relative block shrink-0 overflow-hidden border border-(--color-stroke) transition group-hover:border-(--color-primery)"
        itemProp="url"
      >
        <Image
          src={avatarUrl}
          alt={`${name} (@${login}) — public GitHub avatar, Cipher Unit engineering team`}
          width={compact ? 72 : 112}
          height={compact ? 72 : 112}
          sizes={compact ? "72px" : "112px"}
          className="object-cover"
          itemProp="image"
        />
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
            className="mt-2 line-clamp-3 text-sm leading-6 text-(--color-stroke)"
          >
            {bio}
          </p>
        ) : null}

        <meta itemProp="jobTitle" content="Open Source Engineer" />
        <meta itemProp="worksFor" content={siteConfig.name} />
        <link itemProp="affiliation" href={siteConfig.url} />
      </div>

      {!compact ? (
        <Link
          href={htmlUrl}
          target="_blank"
          rel="noopener noreferrer me"
          className="mt-auto text-sm text-(--color-stroke) transition hover:text-white hover:underline"
          aria-label={`Visit ${name} on GitHub`}
        >
          github.com/{login} →
        </Link>
      ) : null}

      <span className="sr-only">{label}</span>
    </article>
  );
}
