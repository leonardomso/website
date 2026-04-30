import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Software Engineer with 7+ years of experience. Sole engineer on Spaceship at Namecheap — helped sell 3M+ domains.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
