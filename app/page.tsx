import Link from "next/link";
import { topics } from "@/data/topics";

export default function Home() {
  return (
    <div className="py-10 sm:py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest">
        Introduction to Macroeconomics
      </p>
      <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
        Understanding the economy as a whole.
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
        Explore how economists measure national output, explain changes in
        prices and employment, and evaluate the policies that shape long-run
        prosperity.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          className="inline-flex min-h-11 items-center gap-3 bg-forest px-5 text-sm font-semibold text-white transition-colors hover:bg-forest-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
          href={`/topics/${topics[0].slug}`}
        >
          Begin with {topics[0].title}
          <span aria-hidden="true">&rarr;</span>
        </Link>
        <span className="text-sm text-muted">
          9 topics <span aria-hidden="true">·</span> Foundations to policy
        </span>
      </div>

      <section className="mt-14 border-t border-line pt-8 sm:mt-16" aria-labelledby="course-map-heading">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 id="course-map-heading" className="font-serif text-2xl text-ink">
            Course map
          </h2>
          <span className="text-sm text-muted">A connected view of the economy</span>
        </div>
        <ol className="mt-5 grid gap-x-8 sm:grid-cols-2">
          {topics.map((topic, index) => (
            <li key={topic.slug} className="border-t border-line">
              <Link
                href={`/topics/${topic.slug}`}
                className="group flex min-h-14 items-center gap-4 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
              >
                <span className="font-mono text-xs text-rust">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-ink group-hover:text-forest">
                  {topic.title}
                </span>
                <span className="ml-auto text-muted transition-transform group-hover:translate-x-1" aria-hidden="true">
                  &rarr;
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12 grid gap-8 border-t border-line py-8 sm:mt-14 sm:grid-cols-3" aria-label="Course approach">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-rust">01 / Measure</p>
          <p className="mt-3 text-sm leading-6 text-muted">Start with the indicators used to describe economic conditions.</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-rust">02 / Explain</p>
          <p className="mt-3 text-sm leading-6 text-muted">Connect households, firms, markets, and the wider economy.</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-rust">03 / Evaluate</p>
          <p className="mt-3 text-sm leading-6 text-muted">Apply economic models to policy choices and real outcomes.</p>
        </div>
      </section>
    </div>
  );
}
