import React from "react";
import Fields from "../shared/Fields";
import Image from "next/image";
import Link from "next/link";

function ContactMedia() {
  return (
    <div className="mt-14 mb-8">
      <Fields text="all-media" />
      <div className="flex items-center gap-4 mt-8">
        <Link
          className="flex items-center gap-2 hover:underline duration-300 text-(--color-stroke)"
          href="https://github.com/cipherunits/"
          target="_blank"
        >
          <Image
            src="/images/GithubLogo.png"
            alt="Github Logo"
            width={20}
            height={20}
          />
          <p className="text-(--color-stroke)">@CipherUnit</p>
        </Link>
        <Link href={process.env.Instageram_PAGE as string} target="_blank" className="flex items-center gap-2 hover:underline duration-300 text-(--color-stroke)">
          <Image
            src="/images/InstagramLogo.svg"
            alt="Instagream Page Link & Logo"
            width={20}
            height={20}
          />
          <p className="text-(--color-stroke)">@CipherUnit</p>

        </Link>
      </div>
    </div>
  );
}

export default ContactMedia;
