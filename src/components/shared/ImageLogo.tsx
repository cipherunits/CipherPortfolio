import Image from "next/image";
import Link from "next/link";
import { absoluteUrl, siteConfig } from "@/lib/site";

export default function ImageLogo() {
  return (
    <Link className="flex items-center gap-2" href="/">
      <Image
        src={siteConfig.brand.alt}
        alt="Cipher Unit (CipherUnit) logo"
        overrideSrc={absoluteUrl(siteConfig.brand.alt)}
        width={25}
        height={25}
        className="w-6 h-auto"
        priority
      />
      <span className="font-bold text-xl text-white">Cipher Unit</span>
    </Link>
  );
}
