import Image from "next/image";
import Fields from "@/components/shared/Fields";
import Link from "next/link";
import { mailtoHref, siteConfig } from "@/lib/site";

export default function Contact() {
  return (
    <section
      className="mx-auto mt-12 max-w-6xl p-6"
      aria-labelledby="contacts-heading"
    >
      <div id="contacts-heading">
        <Fields text="contacts" />
      </div>
      <div className="mt-8 flex flex-col items-center justify-between gap-10 md:flex-row">
        <p className="w-md px-8 text-center font-medium text-(--color-stroke) [word-spacing:6px] md:px-0 md:text-start">
          Get in touch with CipherUnit (Cipher Unit) for open source
          collaborations, contributions, or technical inquiries.
        </p>
        <div className="space-y-4 rounded-xl border border-(--color-stroke)/50 bg-(--color-background-secondary) p-5 shadow-[0_12px_32px_-24px_rgba(0,0,0,0.5)]">
          <h3 className="font-semibold text-white">Message us here</h3>
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
      </div>
    </section>
  );
}
