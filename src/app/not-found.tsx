import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="mb-4 font-mono text-[12px] tracking-[0.25em] uppercase text-[#666]">
        404
      </p>
      <h1 className="text-[clamp(2rem,5vw,3rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-[#ededed]">
        Page not found
      </h1>
      <p className="mt-6 max-w-[360px] text-[15px] leading-[1.75] text-[#888]">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="link-hover mt-8 font-mono text-[13px] tracking-wide text-[#a0a0a0] transition-colors hover:text-[#ededed]"
      >
        Back to home
      </Link>
    </div>
  );
}
