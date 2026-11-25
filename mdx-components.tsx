import type { MDXComponents } from "mdx/types";

// Next.js requires this file to show MDX lessons.
// Later, we can add custom styles here for headings, lists, and so on.
const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return components;
}
