type Props = {
  children: React.ReactNode;
  Theme?: "primary" | "stroke";
};

export default function Button({ children, Theme = "primary" }: Props) {
  const themeClasses = {
    primary: "border border-(--color-primery) hover:bg-(--color-primery)/20 duration-300 text-white",
    stroke: "border border-(--color-stroke) hover:bg-(--color-stroke)/20 duration-300 text-white"
  };
  
  return (
    <button className={`
      font-medium cursor-pointer duration-300 py-1 px-2
      ${themeClasses[Theme]}
    `}>
      {children}
    </button>
  );
}