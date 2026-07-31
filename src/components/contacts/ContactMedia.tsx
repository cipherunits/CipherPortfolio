import Fields from "../shared/Fields";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

function ContactMedia() {
  return (
    <div className="mt-14 mb-8">
      <Fields text="all-media" />
      <div className="flex items-center gap-4 mt-8">
        <Link
          className="flex items-center gap-2 hover:underline duration-300 text-(--color-stroke)"
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
          <p className="text-(--color-stroke)">@CipherUnit</p>
        </Link>
        {siteConfig.instagram ? (
          <Link
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline duration-300 text-(--color-stroke)"
          >
            <Image
              src="/images/InstagramLogo.svg"
              alt="Instagram page link"
              width={20}
              height={20}
            />
            <p className="text-(--color-stroke)">@CipherUnit</p>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default ContactMedia;
