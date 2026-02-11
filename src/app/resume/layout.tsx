import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Software Engineer with 6+ years of experience. Currently at Namecheap building Spaceship.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
