type Props = {
  children: React.ReactNode;
  Theme?: "primary" | "stroke";
};

export default function Button({ children, Theme = "primary" }: Props) {
  const themeClasses = {
    primary:
      "border border-(--color-primery) hover:bg-(--color-primery)/20 focus-visible:bg-(--color-primery)/15",
    stroke:
      "border border-(--color-stroke) hover:bg-(--color-stroke)/15 focus-visible:bg-(--color-stroke)/10",
  };

  return (
    <button
      className={`
        inline-flex min-h-10 items-center justify-center
        rounded-md px-4 py-2
        text-sm font-medium text-white
        transition-all duration-300
        hover:-translate-y-0.5 active:translate-y-0
        cursor-pointer
        ${themeClasses[Theme]}
      `}
    >
      {children}
    </button>
  );
}
