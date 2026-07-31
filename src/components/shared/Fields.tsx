export default function Fields({
  text,
  as: Tag = "h2",
}: {
  text: string;
  as?: "h2" | "h3" | "p";
}) {
  return (
    <div className="flex items-center gap-4 font-medium text-2xl md:text-3xl text-white">
      <div className="flex items-center gap-2 md:w-auto w-[60%]">
        <span className="text-(--color-primery)" aria-hidden>
          #
        </span>
        <Tag className="">{text}</Tag>
      </div>
      <span className="border border-(--color-primery) w-[85%] md:w-50" aria-hidden />
    </div>
  );
}
