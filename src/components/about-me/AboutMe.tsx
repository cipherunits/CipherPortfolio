import Image from "next/image";
import Fields from "../shared/Fields";
import Button from "../shared/Button";

export default function AboutMe() {
  return (
    <div className="max-w-6xl p-6 mx-auto pt-12 space-y-6 flex flex-col md:flex-row justify-between items-center">
      <div className="space-y-6 max-w-lg">
        <Fields text="about-me" />
        <div className="space-y-4 text-(--color-stroke)">
          <p>Hello, I’m CiphrtUnit !</p>

          <p>
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
          </p>

          <p>
            Transforming my creativity and knowledge into websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
        </div>
        <Button>Read more {"->"}</Button>
      </div>
      <Image src="/AboutMe.png" alt="about me" width={300} height={300} />
    </div>
  );
}
