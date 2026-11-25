import type { MDXComponents } from "mdx/types";

// These styles apply to every lesson in the content folder.
// Lessons start at "##" because the topic page already shows the main title.
const components: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="mt-10 font-serif text-2xl text-ink">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 font-serif text-xl text-ink">{children}</h3>
  ),
  p: ({ children }) => <p className="mt-4 leading-7 text-ink">{children}</p>,
  ul: ({ children }) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 leading-7">{children}</ol>
  ),
  a: ({ children, href }) => (
    <a href={href} className="text-forest underline">
      {children}
    </a>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
