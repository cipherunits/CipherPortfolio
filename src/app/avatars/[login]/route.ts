import { getTeamMembers } from "@/lib/team";
import { seoAvatarUrl } from "@/lib/seo-images";

export const revalidate = 3600;

type RouteContext = {
  params: Promise<{ login: string }>;
};

/**
 * Same-origin avatar URLs so Google Image Search attributes photos to
 * cipherunit.xyz instead of avatars.githubusercontent.com.
 */
export async function GET(_request: Request, context: RouteContext) {
  const { login } = await context.params;
  const members = await getTeamMembers();
  const member = members.find(
    (entry) => entry.login.toLowerCase() === login.toLowerCase(),
  );

  if (!member) {
    return new Response("Avatar not found", { status: 404 });
  }

  const upstream = await fetch(seoAvatarUrl(member.avatarUrl), {
    next: { revalidate: 3600 },
    headers: {
      Accept: "image/*",
      "User-Agent": "CipherPortfolio-AvatarProxy",
    },
  });

  if (!upstream.ok || !upstream.body) {
    return new Response("Upstream avatar unavailable", { status: 502 });
  }

  const contentType = upstream.headers.get("content-type") || "image/jpeg";

  return new Response(upstream.body, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
