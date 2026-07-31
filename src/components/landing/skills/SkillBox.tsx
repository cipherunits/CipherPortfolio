type SkillBoxProps = {
  title: string;
  subTitle: string;
};

export default function SkillBox({ title, subTitle }: SkillBoxProps) {
  return (
    <div className="flex h-full min-w-0 w-full flex-col overflow-hidden rounded-lg border border-(--color-stroke)/50 bg-(--color-background-secondary) transition duration-300 hover:border-(--color-primery)/35">
      <h3 className="border-b border-(--color-stroke)/40 p-2 text-sm font-medium text-white sm:text-base">
        {title}
      </h3>
      <p className="p-2 text-xs leading-5 break-words text-(--color-stroke) sm:text-sm sm:leading-6 [word-spacing:4px] sm:[word-spacing:6px]">
        {subTitle}
      </p>
    </div>
  );
}
