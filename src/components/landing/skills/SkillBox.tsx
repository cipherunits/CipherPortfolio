type SkillBoxProps = {
  title: string;
  subTitle: string;
};

export default function SkillBox({ title, subTitle }: SkillBoxProps) {
  return (
    <div className="max-w-45 overflow-hidden rounded-lg border border-(--color-stroke)/50 bg-(--color-background-secondary) transition duration-300 hover:border-(--color-primery)/35">
      <h3 className="border-b border-(--color-stroke)/40 p-2 font-medium text-white">
        {title}
      </h3>
      <p className="p-2 text-(--color-stroke) [word-spacing:6px]">{subTitle}</p>
    </div>
  );
}
