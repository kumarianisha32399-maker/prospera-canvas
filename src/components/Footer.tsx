import { Link } from "@tanstack/react-router";
import { useStore } from "@/lib/store";

export function Footer() {
  const settings = useStore("settings");
  const services = useStore("services").filter((s) => s.enabled);

  return (
    <footer className="bg-navy text-white/70">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <span className="font-display text-lg font-semibold tracking-[0.12em] text-white">
            {settings.logoText}
          </span>
          <p className="mt-1 text-[0.62rem] font-bold tracking-[0.42em] text-gold">
            {settings.logoSubtitle}
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed">{settings.footerText}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {settings.social.map((s) => (
              <a
                key={s.label}
                href={s.url}
                className="border border-white/20 px-3 py-1.5 text-[0.68rem] font-semibold tracking-[0.14em] uppercase transition-colors hover:border-gold hover:text-gold"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[0.75rem] font-bold tracking-[0.2em] text-white uppercase">Company</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { label: "About", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Projects", to: "/projects" },
              { label: "Gallery", to: "/gallery" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[0.75rem] font-bold tracking-[0.2em] text-white uppercase">Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.id}>
                <Link to="/services" className="transition-colors hover:text-gold">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[0.75rem] font-bold tracking-[0.2em] text-white uppercase">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={`tel:${settings.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                {settings.phone}
              </a>
            </li>
            <li className="break-all">{settings.email}</li>
            <li className="leading-relaxed">{settings.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
          <p>© 2026 Prospera Arcon LLP. All Rights Reserved.</p>
          <Link
            to="/admin/login"
            className="font-semibold tracking-[0.16em] text-gold uppercase transition-opacity hover:opacity-75"
          >
            Admin Login
          </Link>
        </div>
      </div>
    </footer>
  );
}
