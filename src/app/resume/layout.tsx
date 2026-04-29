import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Software Engineer with 7+ years of experience. Built Spaceship's domain search platform at Namecheap. Creator of 33 JavaScript Concepts (66K+ stars).",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
