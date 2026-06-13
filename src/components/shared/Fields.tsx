export default function Fields({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 font-medium text-2xl md:text-3xl text-white">
      <div className="flex items-center gap-2 md:w-auto w-[60%]">
        <span className="text-(--color-primery)">#</span>
        <p className="">{text}</p>
      </div>
      <span className="border border-(--color-primery) w-[85%] md:w-50"></span>
    </div>
  );
}
