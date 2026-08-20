import Image from "next/image";
import Fields from "@/components/shared/Fields";
import SkillBox from "./SkillBox";
import { absoluteUrl } from "@/lib/site";

const skills = [
  {
    title: "Languages",
    subTitle: "TypeScript JavaScript Python C# Rust C",
  },
  {
    title: "Databases",
    subTitle: "PostgreSQL MongoDB SQLServer MySQL",
  },
  {
    title: "Frameworks",
    subTitle: "React Django FastApi .NetCore",
  },
  {
    title: "Tools",
    subTitle: "VScode Neovim Linux Git",
  },
  {
    title: "Other",
    subTitle: "NextJs JWT Tailwind pip pnpm uv cargo",
  },
  {
    title: "DevOps",
    subTitle: "IIS Nginx DockerSvc Bash CI-Cd",
  },
] as const;

export default function Skills() {
  return (
    <section
      className="mx-auto mt-12 max-w-6xl p-4 sm:p-6"
      aria-labelledby="skills-heading"
    >
      <div id="skills-heading">
        <Fields text="skills" />
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-8 md:flex-row md:gap-12">
        <Image
          src="/images/Skills.png"
          overrideSrc={absoluteUrl("/images/Skills.png")}
          alt="Cipher Unit engineering skills — languages, frameworks, DevOps and developer tools"
          width={320}
          height={320}
          className="h-auto w-48 max-w-full sm:w-64 md:w-80"
          sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 320px"
        />

        <div className="grid w-full grid-cols-2 gap-2 sm:gap-3 md:max-w-xl lg:max-w-2xl">
          {skills.map((skill) => (
            <SkillBox
              key={skill.title}
              title={skill.title}
              subTitle={skill.subTitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
