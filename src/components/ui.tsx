import Link from "next/link";
import { Sparkles } from "lucide-react";
import { showSamples } from "@/lib/site";

/** Small marker on placeholder content. Only rendered in preview mode. */
export function SampleTag({ show, tone = "light" }: { show?: boolean; tone?: "light" | "dark" }) {
  if (!show || !showSamples) return null;
  return (
    <span
      title="Placeholder content: replace before launch"
      className={`ml-2 inline-flex rounded-full border border-dashed px-2 py-px align-middle text-[0.6875rem] font-semibold tracking-normal ${
        tone === "dark" ? "border-white/50 text-white/80" : "border-slate/50 text-slate"
      }`}
    >
      Sample
    </span>
  );
}

export function Logo({ name, tone = "dark" }: { name: string; tone?: "dark" | "light" }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 text-lg font-extrabold tracking-tight sm:text-xl ${
        tone === "light" ? "text-white" : "text-navy-900"
      }`}
    >
      <span className="flex size-9 items-center justify-center rounded-xl bg-navy text-gold">
        <Sparkles className="size-5" aria-hidden="true" strokeWidth={2} />
      </span>
      {name}
    </Link>
  );
}

interface SectionHeaderProps {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2";
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  as: Tag = "h2",
}: SectionHeaderProps) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className={`eyebrow ${tone === "light" ? "!text-gold" : ""}`}>{eyebrow}</p>
      )}
      <Tag
        id={id}
        className={`mt-3 text-[clamp(2rem,4.2vw,3rem)] ${tone === "light" ? "text-white" : "text-navy-900"}`}
      >
        {title}
      </Tag>
      {intro && (
        <p className={`mt-4 text-lg ${tone === "light" ? "text-white/75" : "text-slate"}`}>{intro}</p>
      )}
    </div>
  );
}
