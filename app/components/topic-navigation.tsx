"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { topics } from "@/data/topics";

type TopicNavigationProps = {
  orientation: "horizontal" | "vertical";
};

export function TopicNavigation({ orientation }: TopicNavigationProps) {
  const pathname = usePathname();
  const isHorizontal = orientation === "horizontal";

  return (
    <nav aria-label="Course topics">
      <ul className={isHorizontal ? "flex w-max min-w-full gap-1" : "space-y-1"}>
        {topics.map((topic, index) => {
          const href = `/topics/${topic.slug}`;
          const isActive = pathname === href;

          return (
            <li key={topic.slug} className={isHorizontal ? "shrink-0" : undefined}>
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`group flex min-h-10 items-center gap-3 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest ${
                  isHorizontal
                    ? `border-b-2 px-2.5 ${isActive ? "border-forest text-forest" : "border-transparent text-muted hover:text-ink"}`
                    : `px-3 ${isActive ? "bg-[#e6f0eb] font-semibold text-forest-dark" : "text-muted hover:bg-white hover:text-ink"}`
                }`}
              >
                <span className={`font-mono text-[11px] ${isActive ? "text-rust" : "text-[#84928b]"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="whitespace-nowrap">
                  {isHorizontal ? topic.shortTitle : topic.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}