export default function Overview() {
  return(
    <div className="w-full flex justify-center items-cennter gap-14 p-6 border-y border-(--color-stroke)">
        <div className="text-center">
            <p className="text-2xl md:text-4xl text-(--color-primery)/80 font-bold shadow-2xl">1,200+</p>
            <span className="text-(--color-stroke) font-semibold">Project Built</span>
        </div>
        <div className="text-center">
            <p className="text-2xl md:text-4xl text-(--color-primery)/80 font-bold shadow-2xl">25+</p>
            <span className="text-(--color-stroke) font-semibold">Theme</span>
        </div>
        <div className="text-center">
            <p className="text-2xl md:text-4xl text-(--color-primery)/80 font-bold shadow-2xl">∞</p>
            <span className="text-(--color-stroke) font-semibold">Commands</span>
        </div>
    </div>
  );
}
