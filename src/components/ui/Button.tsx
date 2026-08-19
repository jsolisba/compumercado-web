import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  href = "#",
  variant = "primary",
  className,
}: ButtonProps) {
  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md",
    secondary:
      "border border-neutral-300 bg-white text-neutral-900 hover:border-neutral-400 hover:bg-neutral-50",
  };

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-all duration-200",
        styles[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
