import Image from "next/image";
import Fields from "@/components/shared/Fields";
import Link from "next/link";
import { mailtoHref, siteConfig } from "@/lib/site";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-12">
      <Fields text="contacts" />
      <div className="flex md:flex-row flex-col gap-10 items-center justify-between ">
        <p className="w-md font-medium [word-spacing:6px] md:px-0 px-8 md:text-start text-center text-(--color-stroke)">
          Get in touch with CipherUnit (Cipher Unit) for open source
          collaborations, contributions, or technical inquiries.
        </p>
        <div className="border border-(--color-stroke) p-4 space-y-4">
          <h2 className="text-white font-semibold">Message us here</h2>
          <div className="flex justify-start items-center gap-2 text-(--color-stroke)">
            <Image
              src="/images/GithubLogo.png"
              alt="Github Logo"
              width={24}
              height={24}
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
              alt="Email Logo"
              width={24}
              height={24}
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
      </div>
    </div>
  );
}
