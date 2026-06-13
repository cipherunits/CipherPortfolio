import Image from "next/image";
import Link from "next/link";
import React from "react";

function ContactBox() {
  return (
      <div className="border border-(--color-stroke) p-4 space-y-4">
        <h2 className="text-white font-semibold">Message us here</h2>
        <div className="flex justify-start items-center gap-2 text-(--color-stroke)">
          <Image
            src="/GithubLogo.png"
            alt="Github Logo"
            width={24}
            height={24}
          />
          <Link
            className="hover:underline duration-300"
            href="https://github.com/cipherunits"
            target="_blank"
          >
            cipherunits
          </Link>
        </div>
        <div className="flex justify-start items-center gap-2 text-(--color-stroke)">
          <Image src="/EmailLogo.png" alt="Email Logo" width={24} height={24} />
          <Link
            className="hover:underline duration-300"
            href="mailto:cipherunit.dev@gmail.com"
            target="_blank"
          >
            {process.env.CONTACT_EMAIL}
          </Link>
        </div>
      </div>
  );
}

export default ContactBox;
