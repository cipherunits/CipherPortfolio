import Image from "next/image";
import Button from "../../shared/Button";
import Link from "next/link";
import type { Project } from "../types/projects.type"

export default function Project({
  imageUrl,
  teck,
  title,
  diceription,
  buttonLive,
  buttonDocs,
  linkLive,
  linkDocs,
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
          <div className="flex justify-between gap-2 items-center">
            <Link target="_blank" href={linkLive}>
              <Button Theme="primary">{buttonLive}</Button>
            </Link>
            <Link target="_blank" href={linkDocs}>
              <Button Theme="stroke">{buttonDocs}</Button>
            </Link>
          </div>
          ⭐⭐⭐⭐
        </div>
      </div>
    </div>
  );
}