import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CourseShell } from "@/app/components/course-shell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Macroeconomics | Course 101",
    template: "%s | Macroeconomics",
  },
  description: "An introductory course in macroeconomic ideas and policy.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CourseShell>{children}</CourseShell>
      </body>
    </html>
  );
}
