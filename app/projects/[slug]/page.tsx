import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — Shrihari Pote`,
    description: project.summary,
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const isExternal = project.link.startsWith("http");

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="mx-auto flex max-w-3xl items-center justify-between px-6 py-8 text-sm">
        <Link href="/" className="font-medium tracking-tight hover:opacity-70">
          Shrihari Pote
        </Link>
        <Link href="/work" className="text-white/60 hover:text-white">
          ← Work
        </Link>
      </header>

      <div className="mx-auto max-w-3xl px-6 pb-24">
        <div
          className={`flex aspect-[16/7] items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br ${project.cover}`}
        >
          {project.coverImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.coverImage}
              alt={project.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="select-none text-7xl font-semibold text-white/10">
              {project.name.charAt(0)}
            </span>
          )}
        </div>

        <div className="mt-8 flex items-center gap-3">
          <h1 className="text-3xl font-medium tracking-tight">{project.name}</h1>
          <span
            className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
              project.status === "Shipped"
                ? "bg-white/10 text-white/80"
                : "bg-white/5 text-white/50"
            }`}
          >
            {project.status}
          </span>
        </div>

        <p className="mt-2 text-sm font-medium text-white/40">{project.tag}</p>

        <div className="mt-8 space-y-4">
          {project.details.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-white/70">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-white/35">
          {project.stack.map((tech) => (
            <span key={tech}>#{tech.replace(/\s+/g, "").toLowerCase()}</span>
          ))}
        </div>

        {isExternal ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center rounded-lg border border-white/20 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
          >
            View on GitHub
          </a>
        ) : (
          <p className="mt-10 text-sm italic text-white/40">
            Still in progress — repo link coming soon.
          </p>
        )}
      </div>
    </main>
  );
}
