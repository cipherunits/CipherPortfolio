export default function NamePage({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 font-medium text-2xl md:text-3xl text-white">
      <div className="flex items-center gap-2 md:w-auto w-[60%]">
        <span className="text-(--color-primery)" aria-hidden>
          /
        </span>
        <h1>{title}</h1>
      </div>
    </div>
  );
}
