import Link from "next/link";

import Fields from "@/components/shared/Fields";
import MemberCard from "./MemberCard";
import { getTeamMembers } from "@/lib/team";
import { siteConfig } from "@/lib/site";

const LANDING_PREVIEW_COUNT = 4;

export default async function Team({ preview = false }: { preview?: boolean }) {
  const members = await getTeamMembers();

  if (members.length === 0) {
    return null;
  }

  const shown = preview ? members.slice(0, LANDING_PREVIEW_COUNT) : members;

  return (
    <section
      className="mx-auto mt-12 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="team-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content="Cipher Unit GitHub Team" />
      <meta
        itemProp="description"
        content={`Public GitHub members of the ${siteConfig.name} open-source engineering collective.`}
      />
      <meta itemProp="numberOfItems" content={String(shown.length)} />
      <meta itemProp="itemListOrder" content="Ascending" />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="w-full" id="team-heading">
          <Fields text="team" />
        </div>

        {preview ? (
          <Link
            href="/team"
            className="shrink-0 text-sm font-medium text-white transition hover:underline"
            aria-label="View all Cipher Unit GitHub team members"
          >
            View all team →
          </Link>
        ) : null}
      </div>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-(--color-stroke)">
        {preview
          ? `Meet public GitHub members building open-source tools at ${siteConfig.name}.`
          : `Public contributors and engineers from the ${siteConfig.githubOrg} GitHub organization — avatars, names, and profiles.`}
      </p>

      <div
        className={`mt-10 grid justify-center gap-6 ${
          preview
            ? "grid-cols-2 sm:grid-cols-4"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        }`}
      >
        {shown.map((member, index) => (
          <div
            key={member.login}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <meta itemProp="position" content={String(index + 1)} />
            <MemberCard {...member} compact={preview} />
          </div>
        ))}
      </div>

      {preview && members.length > LANDING_PREVIEW_COUNT ? (
        <p className="mt-6 text-center text-sm text-(--color-stroke)">
          <Link href="/team" className="text-white hover:underline">
            +{members.length - LANDING_PREVIEW_COUNT} more on the team page
          </Link>
        </p>
      ) : null}
    </section>
  );
}
