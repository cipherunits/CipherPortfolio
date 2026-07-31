import Image from "next/image";
import Fields from "@/components/shared/Fields";
import SkillBox from "./SkillBox";

export default function Skills() {
  return (
    <section
      className="max-w-6xl mx-auto p-6 mt-12"
      aria-labelledby="skills-heading"
    >
      <div id="skills-heading">
        <Fields text="skills" />
      </div>
      <div className="flex flex-col md:flex-row gap-12 mt-8 justify-between items-center">
        <Image
          src="/images/Skills.png"
          alt="Cipher Unit engineering skills — languages, frameworks, DevOps and developer tools"
          width={320}
          height={320}
          sizes="(max-width: 768px) 70vw, 320px"
        />
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <SkillBox
              title="Languages"
              subTitle="TypeScript JavaScript Python C# Rust C"
            />
            <SkillBox
              title="Databases"
              subTitle="SQLite PostgreSQL MongoDB SQLServer MySQL"
            />
            <SkillBox
              title="Frameworks"
              subTitle="React Django FastApi .NetCore"
            />
          </div>
          <div className="flex justify-end gap-2">
            <SkillBox title="Tools" subTitle="VScode Neovim Linux Git" />
            <SkillBox
              title="Other"
              subTitle="NextJs JWT Tailwind pip pnpm uv cargo"
            />
          </div>
          <div className="flex md:justify-end justify-center gap-2">
            <SkillBox title="DevOps" subTitle="IIS Nginx DockerSvc Bash CI-Cd " />
          </div>
        </div>
      </div>
    </section>
  );
}
