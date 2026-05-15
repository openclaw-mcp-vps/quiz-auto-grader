import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quiz Auto-Grader — AI-Powered Grading for Teachers",
  description: "Auto-grade open-ended quiz responses with AI. Upload rubrics, collect student answers, and get instant detailed feedback. Built for teachers and course creators."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1e6e4866-2b0e-4a16-8af4-2df5748f277c"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
