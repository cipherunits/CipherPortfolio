import Image from "next/image";
import Button from "@/components/shared/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex md:flex-row flex-col gap-10 items-center justify-between max-w-6xl p-6 mx-auto pt-12">
      <div className="max-w-lg space-y-6">
        <div className="font-semibold text-[34px] text-white leading-tight">
          <p>
            Building{" "}
            <span className="text-(--color-primery)">open-source tools</span>{" "}
            for developers by{" "}
            <span className="text-(--color-primery)">developers</span> .
          </p>
        </div>
        <p className="text-(--color-stroke) font-base [word-spacing:2px] md:[word-spacing:6px]">
          CipherUnit is a collective of developers crafting open-source systems,
          developer tools, and infrastructure with a focus on security,
          performance, and minimal design. Built for engineers who care about
          how things really work.
        </p>
        <Link href="/contact">
          <Button>Contact us !</Button>
        </Link>   
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image src="/Hero.png" alt="CipherUnit Open Source Engineering Collective — Developer tools and scalable software systems" width={500} height={300} />
        <div className="border border-(--color-stroke) px-2 flex items-center gap-2 py-1 w-[80%]">
          <span className="bg-(--color-primery) p-1.5"></span>
          <div>
            <p className="text-(--color-stroke)">
              Currently working on {"  "}
              <span className="text-white">Cipher Unit</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
