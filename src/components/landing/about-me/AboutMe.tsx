import Image from "next/image";
import Fields from "@/components/shared/Fields";
import Button from "@/components/shared/Button";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div className="max-w-6xl p-6 mx-auto pt-12 space-y-6 flex flex-col md:flex-row justify-between items-center">
      <div className="space-y-6 max-w-lg">
        <Fields text="about-us" />
        <div className="space-y-4 text-(--color-stroke)">
          <p>CiphrtUnit !</p>
          <p>
            CipherUnit is an open-source engineering collective
            focused on building secure, scalable, and high-quality software systems.
            We design and develop developer tools, frameworks, and infrastructure
            with a strong emphasis on performance, clean architecture, and reliability.
          </p>
        </div>
        <Link target="_blank" href="https://github.com/cipherunits/">
          <Button>Read more {"->"}</Button>
        </Link>
      </div>
      <Image src="/images/AboutMe.png" alt="CipherUnit Cipher Unit Open Source Engineering Collective — about us" width={300} height={300} />
    </div>
  );
}
