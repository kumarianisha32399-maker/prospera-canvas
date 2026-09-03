import { Link } from "@tanstack/react-router";
import { useStore } from "@/lib/store";

export function Hero() {
  const home = useStore("homepage");

  return (
    <section className="relative isolate overflow-hidden bg-navy">
      {/* Hero banner image — swap via Admin → Homepage Content */}
      <img
        src={home.heroImage}
        alt="Modern architecture and construction by Prospera Arcon LLP"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/35" />

      <div className="container-x relative flex min-h-[86vh] flex-col justify-center py-24">
        <span className="eyebrow fade-in">Prospera Arcon LLP · Pune</span>
        <h1 className="mt-6 max-w-4xl text-4xl leading-[1.08] text-white sm:text-5xl lg:text-[4.25rem]">
          {home.heroHeading}
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/75 lg:text-lg">
          {home.heroSubheading}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/projects" className="btn btn-gold">
            {home.ctaPrimary}
          </Link>
          <Link to="/contact" className="btn btn-ghost-light">
            {home.ctaSecondary}
          </Link>
        </div>

        <div className="mt-16 grid max-w-4xl grid-cols-2 gap-px border border-white/15 bg-white/15 sm:grid-cols-4">
          {home.credibility.map((c) => (
            <div key={c} className="bg-navy/80 px-5 py-5 text-center">
              <span className="text-[0.72rem] font-bold tracking-[0.14em] text-white/85 uppercase">
                {c}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
