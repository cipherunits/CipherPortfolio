import Link from "next/link";
import Fields from "@/components/shared/Fields";
import Project from "./ProjectBox";

export default function Projects({ view = false }: { view: boolean }) {


  return (
    <div className="max-w-6xl mx-auto  mt-12">
      <div className="flex justify-between items-center">
        <div className="w-[60%]">
          <Fields text="projects" />
        </div>
        {
          view !== false ? (
            <Link className="text-white hover:underline" href="/projects">
              View all {"~~>"}
            </Link>
          ) : null
        }

      </div>
      <div className="flex md:justify-start justify-center items-center mt-12">
        <Project
          imageUrl="/image.png"
          teck="Rust Python JWT-Token PyO3"
          title="CipherToken"
          diceription="High-performance token and crypto utilities written in Rust with PyO3"
          linkLive="https://github.com/cipherunits/CipherToken"
          buttonLive="Live <~>"
          buttonDocs="Docs <~>"
          linkDocs="https://cipherunits.github.io/CipherToken/getting-started"
        />
      </div>
    </div>
  );
}
