import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Work — Shrihari Pote",
  description: "Projects by Shrihari Pote.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8 text-sm">
        <Link href="/" className="font-medium tracking-tight hover:opacity-70">
          Shrihari Pote
        </Link>
        <Link href="/#contact" className="text-white/60 hover:text-white">
          Contact
        </Link>
      </header>

      <div className="mx-auto max-w-5xl px-6 pb-24 pt-6">
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
          Work
        </h1>
        <p className="mt-3 max-w-md text-sm text-white/50">
          A running list of things I&apos;ve built — some shipped, some still
          in the oven.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group">
              <div
                className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br ${project.cover} transition-transform duration-300 group-hover:scale-[1.02]`}
              >
                {project.coverImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.coverImage}
                    alt={project.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="select-none text-6xl font-semibold text-white/10">
                    {project.name.charAt(0)}
                  </span>
                )}
                <span className="absolute right-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white/80 backdrop-blur">
                  {project.status}
                </span>
              </div>

              <h2 className="mt-4 text-lg font-medium tracking-tight text-white group-hover:text-white/80">
                {project.name}
              </h2>
              <p className="mt-1.5 line-clamp-2 text-sm text-white/50">
                {project.summary}
              </p>
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-white/35">
                {project.stack.map((tech) => (
                  <span key={tech}>#{tech.replace(/\s+/g, "").toLowerCase()}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
