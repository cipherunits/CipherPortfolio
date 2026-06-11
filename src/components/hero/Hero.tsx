import Image from "next/image";
import Button from "../shared/Button";

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
          He crafts responsive websites where technologies meet creativity and
          user experience. With a keen eye for design and a passion for coding,
          he transforms ideas into seamless digital experiences that captivate
          and engage users.
        </p>
        <Button>Contact me!!</Button>
      </div>
      <div>
        <Image src="/Hero.png" alt="Hero Image" width={500} height={300} />
      </div>
    </section>
  );
}
