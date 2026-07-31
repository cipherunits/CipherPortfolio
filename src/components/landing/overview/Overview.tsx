import { getTeamMembers } from "@/lib/team";

export default async function Overview() {
  const members = await getTeamMembers();
  const peopleLabel = members.length > 0 ? `${members.length}` : "8+";

  const stats = [
    { value: "4+", label: "Project Built" },
    { value: peopleLabel, label: "Contributed" },
    { value: "∞", label: "Ideas" },
  ];

  return (
    <section
      className="mx-auto w-full max-w-6xl px-4 sm:px-6"
      aria-label="Cipher Unit at a glance"
    >
      <div className="flex flex-wrap items-center justify-center gap-4 rounded-xl border border-(--color-stroke)/40 bg-(--color-background-secondary)/80 px-4 py-6 sm:gap-10 sm:px-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="min-w-24 rounded-lg px-3 py-2 text-center transition duration-300 hover:bg-(--color-surface)"
          >
            <p className="text-2xl font-bold text-(--color-primery)/90 md:text-4xl">
              {stat.value}
            </p>
            <span className="text-sm font-semibold text-(--color-stroke)">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
