import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/mockData";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-flat group flex h-full flex-col">
      <div className="relative h-60 overflow-hidden">
        <img
          src={project.cover}
          alt={project.name}
          loading="lazy"
          className="img-zoom h-full w-full object-cover"
        />
        <span className="absolute top-0 right-0 bg-gold px-3 py-1.5 text-[0.62rem] font-bold tracking-[0.16em] text-navy uppercase">
          {project.status}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.16em] text-slate-blue uppercase">
          <span>{project.category}</span>
          <span className="h-3 w-px bg-border" />
          <span>{project.year}</span>
        </div>
        <h3 className="mt-3 text-2xl text-navy">{project.name}</h3>
        <p className="mt-1 text-sm text-gold">{project.location}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <Link
          to="/projects/$id"
          params={{ id: project.id }}
          className="btn btn-outline btn-sm mt-7 self-start"
        >
          View Project
        </Link>
      </div>
    </article>
  );
}
