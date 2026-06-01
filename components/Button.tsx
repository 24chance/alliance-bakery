import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-choco-700 text-cream-50 shadow-md hover:bg-choco-800 hover:shadow-lg hover:-translate-y-0.5",
  secondary:
    "bg-caramel-400 text-choco-900 shadow-md hover:bg-caramel-500 hover:-translate-y-0.5 hover:shadow-lg",
  ghost:
    "bg-transparent text-choco-700 ring-2 ring-choco-300/60 hover:bg-choco-700 hover:text-cream-50 hover:ring-choco-700",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50";

/** Renders an internal Link when `href` is set, otherwise a <button>. */
export function Button({
  variant = "primary",
  href,
  className,
  children,
  ...rest
}: {
  variant?: Variant;
  href?: string;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"button">, "ref">) {
  const cls = cn(base, styles[variant], className);
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
