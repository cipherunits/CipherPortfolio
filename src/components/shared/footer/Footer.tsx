import Link from "next/link";
import ImageLogo from "../ImageLogo";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-(--color-stroke) pt-6 mt-auto">
      <div className="w-full max-w-6xl p-6 mx-auto">
        <div className="md:mb-18 mb-12 flex flex-col md:flex-row items-center justify-between md:gap-0 gap-12">
          <div className="space-y-2">
            <div className="flex flex-col md:flex-row items-center md:gap-4 gap-6">
              <ImageLogo />
              <p className="text-base text-(--color-stroke)">
                {process.env.CONTACT_EMAIL}
              </p>
            </div>
            <p className="text-base text-(--color-stroke) md:text-start text-center">
              Building open-source tools for developers by developers .
            </p>
          </div>
          <div>
            <p className="text-2xl text-white font-semibold md:text-start text-center">
              Media
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Link href={process.env.Instageram_PAGE as string} target="_blank">
                <Image
                  src="/images/InstagramLogo.svg"
                  alt="Instagream Page Link & Logo"
                  width={28}
                  height={28}
                />
              </Link>
              <Link href={process.env.GITHUB_PAGE as string} target="_blank">
                <Image
                  src="/images/GithubLogo.png"
                  alt="Github Logo"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
        </div>
        <p className="text-center text-base [word-spacing:2px] text-(--color-stroke)">
          Made with ❤️ for developers by{" "}
          <Link className="hover:underline" href="https://github.com/cipherunits" target="_blank">
            CipherUnit
          </Link>
        </p>
      </div>
    </footer>
  );
}
