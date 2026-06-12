import Image from "next/image";
import Fields from "../shared/Fields";
import Button from "../shared/Button";

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
        <Button>Read more {"->"}</Button>
      </div>
      <Image src="/AboutMe.png" alt="about me" width={300} height={300} />
    </div>
  );
}
