import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import remarkGfm from "remark-gfm";

import {
  normalizeReadmeMarkdown,
  type ProjectReadme,
  resolveReadmeHref,
  resolveReadmeImageSrc,
} from "@/lib/project-readme";

type ProjectReadmeViewProps = {
  readme: ProjectReadme;
  projectTitle: string;
};

type HtmlExtraProps = {
  align?: string;
  style?: string | CSSProperties;
  width?: string | number;
  height?: string | number;
  children?: ReactNode;
};

const readmeSanitizeSchema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames ?? []), "br", "center"],
  attributes: {
    ...defaultSchema.attributes,
    a: [...(defaultSchema.attributes?.a ?? []), "target", "rel"],
    img: [
      ...(defaultSchema.attributes?.img ?? []),
      "width",
      "height",
      "align",
      "style",
    ],
    p: [...(defaultSchema.attributes?.p ?? []), "align", "style"],
    div: [...(defaultSchema.attributes?.div ?? []), "align", "style"],
    span: [...(defaultSchema.attributes?.span ?? []), "align", "style"],
    h1: [...(defaultSchema.attributes?.h1 ?? []), "align"],
    h2: [...(defaultSchema.attributes?.h2 ?? []), "align"],
    h3: [...(defaultSchema.attributes?.h3 ?? []), "align"],
  },
};

function isCentered(
  align?: string | null,
  style?: string | CSSProperties | null,
): boolean {
  if (align?.toLowerCase() === "center") {
    return true;
  }
  if (typeof style === "string" && /text-align\s*:\s*center/i.test(style)) {
    return true;
  }
  if (
    style &&
    typeof style === "object" &&
    "textAlign" in style &&
    style.textAlign === "center"
  ) {
    return true;
  }
  return false;
}

function topMarginFromStyle(
  style?: string | CSSProperties | null,
): string | undefined {
  if (typeof style === "string") {
    const match = style.match(/margin-top\s*:\s*(\d+)px/i);
    if (match) {
      const px = Math.min(Number(match[1]), 96);
      return `${px}px`;
    }
  }
  return undefined;
}

export default function ProjectReadmeView({
  readme,
  projectTitle,
}: ProjectReadmeViewProps) {
  const markdown = normalizeReadmeMarkdown(readme.markdown);

  const components = {
    h1: ({ children, align, style }: HtmlExtraProps) => (
      <h1
        className={`mb-4 text-3xl font-semibold text-white ${
          isCentered(align, style) ? "text-center" : ""
        }`}
      >
        {children}
      </h1>
    ),
    h2: ({ children }: HtmlExtraProps) => (
      <h2 className="mt-8 mb-3 border-b border-(--color-stroke)/30 pb-2 text-2xl font-semibold text-white">
        {children}
      </h2>
    ),
    h3: ({ children }: HtmlExtraProps) => (
      <h3 className="mt-6 mb-2 text-xl font-semibold text-white">{children}</h3>
    ),
    h4: ({ children }: HtmlExtraProps) => (
      <h4 className="mt-5 mb-2 text-lg font-semibold text-white">{children}</h4>
    ),
    p: ({ children, align, style }: HtmlExtraProps) => {
      const centered = isCentered(align, style);
      const marginTop = topMarginFromStyle(style);

      return (
        <p
          className={`my-3 text-sm leading-7 text-(--color-stroke) ${
            centered ? "text-center" : ""
          }`}
          style={marginTop ? { marginTop } : undefined}
        >
          {children}
        </p>
      );
    },
    ul: ({ children }: HtmlExtraProps) => (
      <ul className="my-3 list-disc space-y-2 ps-5 text-sm leading-7 text-(--color-stroke)">
        {children}
      </ul>
    ),
    ol: ({ children }: HtmlExtraProps) => (
      <ol className="my-3 list-decimal space-y-2 ps-5 text-sm leading-7 text-(--color-stroke)">
        {children}
      </ol>
    ),
    li: ({ children }: HtmlExtraProps) => (
      <li className="marker:text-(--color-primery)">{children}</li>
    ),
    a: ({
      href,
      children,
    }: HtmlExtraProps & { href?: string }) => (
      <a
        href={resolveReadmeHref(href, readme)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-(--color-secondary) underline-offset-2 transition hover:text-(--color-primery) hover:underline"
      >
        {children}
      </a>
    ),
    strong: ({ children }: HtmlExtraProps) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    em: ({ children }: HtmlExtraProps) => (
      <em className="italic text-(--color-stroke)">{children}</em>
    ),
    blockquote: ({ children }: HtmlExtraProps) => (
      <blockquote className="my-4 border-s-4 border-(--color-primery)/50 bg-(--color-surface)/50 px-4 py-2 text-sm text-(--color-stroke)">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-8 border-(--color-stroke)/30" />,
    br: () => <br className="my-2 block" />,
    center: ({ children }: HtmlExtraProps) => (
      <div className="my-3 text-center text-sm leading-7 text-(--color-stroke)">
        {children}
      </div>
    ),
    code: ({
      className,
      children,
    }: HtmlExtraProps & { className?: string }) => {
      const isBlock = Boolean(className?.includes("language-"));
      if (isBlock) {
        return <code className={className}>{children}</code>;
      }

      return (
        <code className="rounded bg-(--color-surface) px-1.5 py-0.5 font-mono text-[0.85em] text-(--color-yellow)">
          {children}
        </code>
      );
    },
    pre: ({ children }: HtmlExtraProps) => (
      <pre className="my-4 overflow-x-auto rounded-lg border border-(--color-stroke)/30 bg-[#1e2228] p-4 text-xs leading-6 text-(--color-command-terminal)">
        {children}
      </pre>
    ),
    table: ({ children }: HtmlExtraProps) => (
      <div className="my-4 overflow-x-auto">
        <table className="w-full min-w-xl border-collapse text-left text-sm text-(--color-stroke)">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }: HtmlExtraProps) => (
      <thead className="border-b border-(--color-stroke)/40 bg-(--color-surface)/60">
        {children}
      </thead>
    ),
    th: ({ children }: HtmlExtraProps) => (
      <th className="px-3 py-2 font-semibold text-white">{children}</th>
    ),
    td: ({ children }: HtmlExtraProps) => (
      <td className="border-b border-(--color-stroke)/20 px-3 py-2">
        {children}
      </td>
    ),
    img: ({
      src,
      alt,
      width,
      align,
    }: HtmlExtraProps & { src?: string; alt?: string }) => {
      const resolved = resolveReadmeImageSrc(
        typeof src === "string" ? src : undefined,
        readme,
      );
      if (!resolved) {
        return null;
      }

      const parsedWidth =
        width !== undefined && width !== null
          ? Number(width) || undefined
          : undefined;
      const centered = isCentered(align, undefined);

      return (
        // Remote README assets from arbitrary GitHub paths.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={resolved}
          alt={alt || `${projectTitle} README image`}
          width={parsedWidth}
          loading="lazy"
          className={`my-4 h-auto max-w-full rounded-lg border border-(--color-stroke)/30 ${
            centered || parsedWidth ? "mx-auto block" : ""
          }`}
          style={parsedWidth ? { width: parsedWidth, maxWidth: "100%" } : undefined}
        />
      );
    },
  } as Components & { center: Components["div"] };

  return (
    <section
      aria-label={`${projectTitle} README`}
      className="mt-8 overflow-hidden rounded-xl border border-(--color-stroke)/50 bg-(--color-background-secondary)"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-(--color-stroke)/40 bg-(--color-surface)/40 px-5 py-3">
        <h2 className="text-sm font-semibold tracking-wide text-white">
          README.md
        </h2>
        <Link
          href={readme.htmlUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-(--color-stroke) transition hover:text-(--color-primery)"
        >
          View on GitHub →
        </Link>
      </div>

      <div className="project-readme px-5 py-6 sm:px-8 sm:py-8">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[
            rehypeRaw,
            [rehypeSanitize, readmeSanitizeSchema],
          ]}
          components={components}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </section>
  );
}
