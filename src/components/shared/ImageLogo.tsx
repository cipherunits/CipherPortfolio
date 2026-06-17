import Image from "next/image";
import Link from "next/link";

export default function ImageLogo() {
  return (
    <Link className="flex items-center gap-2" href="/">
      <Image
        src="/CipherUnit.png"
        alt="CipherUnit Logo — Cipher Unit Open Source Developer Tools and Engineering Collective"
        width={25}
        height={25}
        className="w-6 h-auto"
      />
      <p className="font-bold text-xl text-white">Cipher Unit</p>
    </Link>
  );
}
