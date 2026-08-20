import Image from "next/image";
import Button from "@/components/shared/Button";
import Link from "next/link";
import { absoluteUrl } from "@/lib/site";

export default function Hero() {
  return (
    <section
      className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 p-6 pt-12 md:flex-row"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-lg space-y-6">
        <h1
          id="hero-heading"
          className="text-[34px] leading-tight font-semibold text-white"
        >
          Building{" "}
          <span className="text-(--color-primery)">open-source tools</span> for
          developers by{" "}
          <span className="text-(--color-primery)">developers</span>.
        </h1>
        <p className="font-base text-(--color-stroke) [word-spacing:2px] md:[word-spacing:6px]">
          CipherUnit is a collective of developers crafting open-source systems,
          developer tools, and infrastructure with a focus on security,
          performance, and minimal design. Built for enginers who care about
          how things really work.
        </p>
        <Link href="/contact" className="inline-block">
          <Button>Contact us !</Button>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <Image
          src="/images/Hero.png"
          overrideSrc={absoluteUrl("/images/Hero.png")}
          alt="CipherUnit Open Source Engineering Collective — Developer tools and scalable software systems"
          width={500}
          height={300}
          priority
          fetchPriority="high"
          sizes="(max-width: 768px) 90vw, 500px"
          className="h-auto w-full max-w-125"
        />
        <div className="flex w-[80%] items-center gap-3 rounded-lg border border-(--color-stroke)/50 bg-(--color-background-secondary) px-3 py-2">
          <span
            className="size-2.5 shrink-0 rounded-sm bg-(--color-primery)"
            aria-hidden
          />
          <p className="text-sm text-(--color-stroke)">
            Currently working on{" "}
            <span className="text-white">Cipher Unit</span>
          </p>
        </div>
      </div>
    </section>
  );
}
