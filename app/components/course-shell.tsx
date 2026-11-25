import Link from "next/link";
import type { ReactNode } from "react";
import { TopicNavigation } from "@/app/components/topic-navigation";

export function CourseShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex-1">
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex min-h-17 max-w-360 items-center justify-between gap-6 px-5 sm:px-8">
          <div className="flex items-center gap-3">
            <Link href="/" aria-label="Macroeconomics Course 101 home" className="group grid size-9 shrink-0 place-items-center border border-forest font-serif text-lg text-forest transition-colors hover:bg-[#e6f0eb] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest">
              M
            </Link>
            <div>
              <Link href="/" className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest">
                <span className="block font-serif text-base leading-tight text-ink">Macroeconomics</span>
                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Course 101</span>
              </Link>
              <p className="mt-1 text-[10px] leading-4 text-muted">
                by: <a href="https://github.com/akbarriki" target="_blank" rel="noreferrer" className="font-medium text-forest hover:underline">Riki Akbar</a>
              </p>
            </div>
          </div>
          <p className="hidden text-xs font-medium uppercase tracking-[0.12em] text-muted sm:block">
            Principles and policy
          </p>
        </div>
      </header>

      <div className="mx-auto flex max-w-360">
        <aside className="hidden w-72.5 shrink-0 border-r border-line px-6 py-9 lg:block" aria-label="Course navigation">
          <Link href="/" className="mb-6 block px-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted hover:text-forest">
            Course overview
          </Link>
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#84928b]">Topics</p>
          <TopicNavigation orientation="vertical" />
          <div className="mt-8 border-t border-line px-3 pt-5">
            <p className="text-xs leading-5 text-muted">A guided introduction to output, prices, employment, and economic policy.</p>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <div className="border-b border-line bg-white/70 lg:hidden">
            <div className="overflow-x-auto px-3 scrollbar-thin">
              <TopicNavigation orientation="horizontal" />
            </div>
          </div>
          <div className="mx-auto max-w-4xl px-5 pb-12 sm:px-8 lg:px-12">{children}</div>
        </main>
      </div>
    </div>
  );
}