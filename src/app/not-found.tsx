import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="mb-4 font-mono text-[#666] text-[12px] uppercase tracking-[0.25em]">
        404
      </p>
      <h1 className="font-semibold text-[#ededed] text-[clamp(2rem,5vw,3rem)] leading-[1.1] tracking-[-0.03em]">
        Page not found
      </h1>
      <p className="mt-6 max-w-[360px] text-[#888] text-[15px] leading-[1.75]">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        className="link-hover mt-8 font-mono text-[#a0a0a0] text-[13px] tracking-wide transition-colors hover:text-[#ededed]"
        href="/"
      >
        Back to home
      </Link>
    </div>
  );
}
