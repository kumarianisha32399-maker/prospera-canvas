import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
      <div className="container-x relative py-20 lg:py-28">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.1] text-white lg:text-6xl">{title}</h1>
        {text ? <p className="mt-5 max-w-2xl text-white/70">{text}</p> : null}
      </div>
    </section>
  );
}
