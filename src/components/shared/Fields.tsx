export default function Fields({
  text,
  as: Tag = "h2",
}: {
  text: string;
  as?: "h2" | "h3" | "p";
}) {
  return (
    <div className="flex min-w-0 items-center gap-4 font-medium text-2xl md:text-3xl text-white">
      <div className="flex shrink-0 items-center gap-2">
        <span className="text-(--color-primery)" aria-hidden>
          #
        </span>
        <Tag className="">{text}</Tag>
      </div>
      <span
        className="h-px min-w-0 flex-1 rounded-full bg-(--color-primery)/80 md:flex-none md:w-50"
        aria-hidden
      />
    </div>
  );
}
