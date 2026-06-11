import Image from "next/image";
import Button from "../shared/Button";
import Link from "next/link";

type Project = {
  imageUrl: string;
  teck: string;
  title: string;
  diceription: string;
  button: string;
  link: string;
};

export default function Project({
  imageUrl,
  teck,
  title,
  diceription,
  button,
  link,
}: Project) {
  return (
    <div className="border border-(--color-stroke) w-82.5">
      <Image src={imageUrl} alt="Projects" width={400} height={400} />
      <p className="text-(--color-stroke) py-2 px-4 border border-(--color-stroke) [word-spacing:6px] ">
        {teck}
      </p>
      <div className="p-4 space-y-3">
        <h3 className="text-white font-medium text-2xl">{title}</h3>
        <p className="text-(--color-stroke)">{diceription}</p>
        <div className="flex justify-between items-center">
          <Link target="_blank" href={link}>
            <Button>{button}</Button>
          </Link>
          ⭐⭐⭐⭐
        </div>
      </div>
    </div>
  );
}
