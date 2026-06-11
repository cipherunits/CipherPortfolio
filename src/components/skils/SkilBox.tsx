type SkilBox = {
  title: string;
  subTitle: string;
};

export default function SkilBox({ title, subTitle }: SkilBox) {
  return (
    <div className="border border-(--color-stroke) max-w-45">
      <h3 className="border-b border-(--color-stroke) font-medium text-white p-1">
        {title}
      </h3>
      <p className="text-(--color-stroke) p-1 [word-spacing:6px]">
        {subTitle}
        </p>
    </div>
  );
}