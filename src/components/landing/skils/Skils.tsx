import Image from "next/image";
import Fields from "@/components/shared/Fields";
import SkilBox from "./SkilBox";

export default function Skils() {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-12">
      <Fields text="skills" />
      <div className="flex flex-col md:flex-row gap-12 mt-8 justify-between items-center">
        <Image src="/Skils.png" alt="Skils Logo" width={320} height={320} />
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <SkilBox
              title="Languages"
              subTitle="TypeScript JavaScript Python C# Rust C"
            />
            <SkilBox
              title="Databases"
              subTitle="SQLite PostgreSQL MongoDB SQLServer MySQL"
            />
            <SkilBox
              title="Frameworks"
              subTitle="React Django FastApi .NetCore"
            />
          </div>
          <div className="flex justify-end gap-2">
            <SkilBox title="Tools" subTitle="VScode Neovim Linux Git" />
            <SkilBox
              title="Other"
              subTitle="NextJs JWT Tailwind pip pnpm uv cargo"
            />
          </div>
          <div className="flex md:justify-end justify-center gap-2">
            <SkilBox title="DevOps" subTitle="IIS Nginx DockerSvc Bash CI-Cd " />
          </div>
        </div>
      </div>
    </div>
  );
}
