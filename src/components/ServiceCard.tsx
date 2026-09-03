import { Link } from "@tanstack/react-router";
import type { Service } from "@/data/mockData";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card-flat group flex h-full flex-col">
      <div className="relative h-44 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="img-zoom h-full w-full object-cover"
        />
        <span className="absolute top-0 left-0 bg-navy px-3 py-1.5 text-[0.62rem] font-bold tracking-[0.16em] text-gold uppercase">
          {service.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-xl text-navy">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.16em] text-navy uppercase transition-colors group-hover:text-gold"
        >
          Learn More <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
