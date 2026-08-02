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
      "bg-blue-600 hover:bg-blue-500 text-white",
    secondary:
      "border border-slate-600 text-white hover:bg-slate-800",
  };

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300",
        styles[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}