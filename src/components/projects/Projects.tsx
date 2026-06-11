import Link from "next/link";
import Fields from "../shared/Fields";
import Project from "./Project";

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-12">
      <div className="flex justify-between items-center">
        <Fields text="projects" />
        <Link className="text-white hover:underline" href="#">
          View all {"~~>"}
        </Link>
      </div>
      <div className="flex md:justify-start justify-center items-center mt-12">
        <Project
          imageUrl="/image.png"
          teck="Rust Python JWT-Token PyO3"
          title="CipherToken"
          diceription="High-performance token and crypto utilities written in Rust with PyO3"
          link="https://github.com/cipherunits/CipherToken"
          button="Live <~>"
        />
      </div>
    </div>
  );
}
