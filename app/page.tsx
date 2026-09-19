import Link from "next/link";
import SakuraEditorialPoster from "@/components/ui/sakura-editorial-poster";
import { RainbowLinkButton } from "@/components/ui/rainbow-button";
import { ContactForm } from "@/components/contact-form";

const services = ["Web development", "AI prompt writing", "Thumbnail design"];

const skills = [
  "Python",
  "C++",
  "JavaScript",
  "HTML",
  "CSS",
  "SQL",
  "Flask",
  "Git & GitHub",
];

export default function Home() {
  return (
    <main className="bg-[#ece8df]">
      <SakuraEditorialPoster
        title="SHRIHARI"
        keywords={[{ label: "Build" }, { label: "Ship" }, { label: "Repeat" }]}
        headline="Shrihari Gajanan Pote"
        body="Second-year B.Tech Computer Technology student at RTMSSU, Pune. Freelance developer working across Python, JavaScript, and Flask, with self-directed projects spanning web apps, dashboards, and CLI tools."
        subheadline="Pune, Maharashtra, India"
        footerLeft="Portfolio"
        footerCenter="2026"
        footerRight="Pune, IN"
        socialHandle="@shriharipote"
        sceneSrc={null}
      />

      <section className="mx-auto flex max-w-5xl justify-center px-6 pt-14">
        <RainbowLinkButton href="/resume.pdf" download="Shrihari_Pote_Resume.pdf">
          Download résumé
        </RainbowLinkButton>
      </section>

      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-28 text-center">
        <h2 className="text-4xl font-semibold leading-tight text-[#2c211d] sm:text-6xl">
          Let&apos;s see what I cooked
        </h2>
        <Link
          href="/work"
          className="mt-8 inline-flex items-center rounded-xl bg-[#2c211d] px-8 py-3 text-sm font-medium text-[#f5f5f0] transition-colors hover:bg-[#4a3a33]"
        >
          Go
        </Link>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-[#7a5a52]">
          Skills
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[#ddd3c8] bg-[#f5f5f0] px-4 py-2 text-sm text-[#2c211d]"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-[#7a5a52]">
          Freelance services
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {services.map((service) => (
            <span
              key={service}
              className="rounded-full border border-[#ddd3c8] bg-[#f5f5f0] px-4 py-2 text-sm text-[#2c211d]"
            >
              {service}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-[#7a5a52]">
          Keep in touch
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#5c4f48]">
          Have a project, freelance work, or an internship role in mind? Send
          a message and it'll land straight in my inbox.
        </p>
        <ContactForm />
      </section>

      <footer className="border-t border-[#ddd3c8] px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 text-sm text-[#5c4f48] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Shrihari Pote</span>
          <div className="flex gap-4">
            <a
              className="hover:underline"
              href="https://github.com/shriharipote"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a className="hover:underline" href="mailto:poteshreehari@gmail.com">
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
