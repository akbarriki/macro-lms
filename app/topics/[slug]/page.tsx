import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Quiz } from "@/app/components/quiz";
import { quizzes } from "@/data/quizzes";
import { topics } from "@/data/topics";

type TopicPageProps = {
  params: Promise<{ slug: string }>;
};

// Finish the whole page before replying, so unknown topics return a real 404.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return topics.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = topics.find((item) => item.slug === slug);

  return topic ? { title: topic.title } : { title: "Topic not found" };
}

// Load content/<slug>.mdx, or return null if the lesson is not written yet.
async function getLesson(slug: string) {
  const lessonPath = join(process.cwd(), "content", `${slug}.mdx`);

  if (!existsSync(lessonPath)) {
    return null;
  }

  const lesson = await import(`@/content/${slug}.mdx`);
  return lesson.default;
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const topicIndex = topics.findIndex((item) => item.slug === slug);
  const topic = topics[topicIndex];

  if (!topic) {
    notFound();
  }

  const Lesson = await getLesson(slug);
  const nextTopic = topics[topicIndex + 1];

  return (
    <article className="py-10 sm:py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest">
        Topic {String(topicIndex + 1).padStart(2, "0")} / {String(topics.length).padStart(2, "0")}
      </p>
      <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
        {topic.title}
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
        {topic.summary}
      </p>

      <section className="mt-10 border-y border-line py-7" aria-labelledby="guiding-question">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-rust">Guiding question</p>
        <h2 id="guiding-question" className="mt-3 max-w-2xl font-serif text-2xl leading-snug text-ink">
          {topic.question}
        </h2>
      </section>

      {Lesson ? (
        <Lesson />
      ) : (
        <div className="mt-8 border-l-2 border-forest bg-white px-5 py-5 sm:px-6">
          <p className="text-sm font-semibold text-ink">Lesson materials are being prepared</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            This topic page is ready for readings, examples, and practice activities.
          </p>
        </div>
      )}

      <Quiz key={topic.slug} questions={quizzes[topic.slug]} />

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
        <Link href="/" className="text-sm font-medium text-forest hover:underline">
          &larr; Course overview
        </Link>
        {nextTopic ? (
          <Link href={`/topics/${nextTopic.slug}`} className="text-sm font-medium text-forest hover:underline">
            Next: {nextTopic.shortTitle} &rarr;
          </Link>
        ) : (
          <Link href={`/topics/${topics[0].slug}`} className="text-sm font-medium text-forest hover:underline">
            Return to the first topic &rarr;
          </Link>
        )}
      </div>
    </article>
  );
}