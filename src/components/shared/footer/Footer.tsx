import Link from "next/link";
import ImageLogo from "../ImageLogo";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 h-16 mx-auto w-full border-t border-(--color-stroke) py-6">
      <div className="w-full max-w-6xl p-6 mx-auto">
        <div className="md:mb-18 mb-12 flex flex-col md:flex-row items-center justify-between md:gap-0 gap-12">
          <div className="space-y-2">
            <div className="flex flex-col md:flex-row items-center md:gap-4 gap-6">
              <ImageLogo />
              <p className="text-base text-(--color-stroke)">
                {process.env.EMAIL}
              </p>
            </div>
            <p className="text-base text-(--color-stroke) md:text-start text-center">
              software development company focused on building modern
            </p>
          </div>
          <div>
            <p className="text-2xl text-white font-semibold md:text-start text-center">Media</p>
            <div className="flex items-center gap-4 mt-4">
              <Link href="https://github.com/cipherunits/" target="_blank">
                <Image
                  src="/CipherUnit.png"
                  alt="Cipher Unit Logo"
                  width={28}
                  height={28}
                />
              </Link>
              <Link href="https://github.com/cipherunits/" target="_blank">
                <Image
                  src="/GithubLogo.png"
                  alt="Github Logo"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="https://github.com/cipherunits/" target="_blank">
                <Image
                  src="/LinuxLogoT.png"
                  alt="Linux Logo"
                  width={36}
                  height={36}
                />
              </Link>
            </div>
          </div>
        </div>
        <p className="text-center text-base [word-spacing:5px] text-(--color-stroke)">
          © Copyright {new Date().getFullYear()}. Made by CipherUnit
        </p>
      </div>
    </footer>
  );
}
