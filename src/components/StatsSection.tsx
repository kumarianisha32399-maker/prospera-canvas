import { useStore } from "@/lib/store";
import { Reveal } from "./Reveal";

export function StatsSection() {
  const home = useStore("homepage");

  return (
    <section className="bg-navy">
      <div className="container-x grid grid-cols-2 gap-px bg-white/12 lg:grid-cols-4">
        {home.stats.map((s, i) => (
          <div key={s.id} className="bg-navy px-6 py-12 text-center lg:py-16">
            <Reveal delay={i * 90}>
              <p className="font-display text-4xl text-gold lg:text-5xl">{s.value}</p>
              <p className="mt-3 text-[0.72rem] font-bold tracking-[0.2em] text-white/60 uppercase">
                {s.label}
              </p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
