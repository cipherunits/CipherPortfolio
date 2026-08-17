#!/usr/bin/env node
/**
 * Notify search engines about the Cipher Unit sitemap / key pages.
 * Google Search Console sitemap submit still requires the web UI (or OAuth).
 *
 * Usage: node scripts/seo-notify.mjs
 */
const SITE = process.env.SITE_NAME || "https://cipherunit.xyz";
const INDEXNOW_KEY = "cipherunit-indexnow-2026";

const urls = [
  `${SITE}/`,
  `${SITE}/projects`,
  `${SITE}/projects/cipher-token`,
  `${SITE}/projects/npm-mirror`,
  `${SITE}/team`,
  `${SITE}/contact`,
  `${SITE}/sitemap.xml`,
  `${SITE}/image-sitemap.xml`,
];

async function pingIndexNow() {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(SITE).host,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  });
  console.log(`IndexNow: HTTP ${res.status}`);
  const text = await res.text();
  if (text) {
    console.log(text);
  }
}

async function main() {
  console.log("Sitemap (submit manually in GSC):");
  console.log(
    `https://search.google.com/search-console/sitemaps?resource_id=${encodeURIComponent(SITE + "/")}`,
  );
  console.log(`Direct sitemap URL: ${SITE}/sitemap.xml`);
  console.log(`Image sitemap URL: ${SITE}/image-sitemap.xml`);
  console.log("");
  console.log("Rich Results Test:");
  for (const url of [
    `${SITE}/`,
    `${SITE}/projects`,
    `${SITE}/projects/cipher-token`,
    `${SITE}/projects/npm-mirror`,
    `${SITE}/team`,
    `${SITE}/contact`,
  ]) {
    console.log(
      `https://search.google.com/test/rich-results?url=${encodeURIComponent(url)}`,
    );
  }
  console.log("");
  await pingIndexNow();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
