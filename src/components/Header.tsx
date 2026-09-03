import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useStore } from "@/lib/store";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Why Us", to: "/about", hash: "why" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const settings = useStore("settings");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur transition-all duration-300 ${
        scrolled ? "py-1" : "py-3"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-6">
        <Link to="/" className="group flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span
            className={`font-display font-semibold tracking-[0.14em] text-white transition-all duration-300 ${
              scrolled ? "text-[0.95rem]" : "text-base sm:text-lg"
            }`}
          >
            {settings.logoText}
          </span>
          <span className="mt-1 text-[0.62rem] font-bold tracking-[0.42em] text-gold">
            {settings.logoSubtitle}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={"hash" in item ? item.hash : undefined}
              className="relative py-2 text-[0.78rem] font-semibold tracking-[0.14em] text-white/75 uppercase transition-colors hover:text-gold"
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "!text-gold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn btn-gold btn-sm hidden sm:inline-flex">
            Enquire Now
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border border-white/25 lg:hidden"
          >
            <span
              className={`h-[1.5px] w-5 bg-white transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
            />
            <span className={`h-[1.5px] w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-[1.5px] w-5 bg-white transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open ? (
        <div className="fade-in border-t border-white/10 bg-navy lg:hidden">
          <nav className="container-x flex flex-col py-4">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                hash={"hash" in item ? item.hash : undefined}
                onClick={() => setOpen(false)}
                className="border-b border-white/8 py-3.5 text-sm font-semibold tracking-[0.14em] text-white/80 uppercase"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-gold mt-5">
              Enquire Now
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
