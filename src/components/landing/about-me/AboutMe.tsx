import Image from "next/image";
import Fields from "@/components/shared/Fields";
import Button from "@/components/shared/Button";
import Link from "next/link";
import { absoluteUrl, siteConfig } from "@/lib/site";

export default function AboutMe() {
  return (
    <section
      className="max-w-6xl p-6 mx-auto pt-12 space-y-6 flex flex-col md:flex-row justify-between items-center"
      aria-labelledby="about-heading"
    >
      <div className="space-y-6 max-w-lg">
        <div id="about-heading">
          <Fields text="about-us" />
        </div>
        <div className="space-y-4 text-(--color-stroke)">
          <p className="text-white font-medium">CipherUnit!</p>
          <p>
            CipherUnit is an open-source engineering collective focused on
            building secure, scalable, and high-quality software systems. We
            design and develop developer tools, frameworks, and infrastructure
            with a strong emphasis on performance, clean architecture, and
            reliability.
          </p>
        </div>
        <Link target="_blank" rel="noopener noreferrer" href={siteConfig.github}>
          <Button>Read more {"->"}</Button>
        </Link>
      </div>
      <Image
        src="/images/AboutMe.png"
        overrideSrc={absoluteUrl("/images/AboutMe.png")}
        alt="CipherUnit Cipher Unit Open Source Engineering Collective — about us"
        width={300}
        height={300}
        sizes="(max-width: 768px) 70vw, 300px"
      />
    </section>
  );
}
