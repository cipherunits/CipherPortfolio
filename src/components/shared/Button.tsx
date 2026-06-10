type Props = {
  children: React.ReactNode;
};

export default function Button({ children }: Props) {
  return (
    <button className="font-medium border border-(--color-primery) hover:bg-(--color-primery)/20 cursor-pointer duration-300 text-white py-1 px-4">
      {children}
    </button>
  );
}
