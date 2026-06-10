import Image from "next/image";
import Link from "next/link";

export default function ImageLogo() {
  return (
    <Link className="flex items-center gap-2" href="/">
      <Image
        src="/CipherUnit.png"
        alt="Chipher Unit Logo"
        width={25}
        height={25}
      />
      <p className="font-bold text-xl text-white">Cipher Unit</p>
    </Link>
  );
}
